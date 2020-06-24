import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Moment from 'moment';
import getEnvVars from '../../../environment';
const { ec2 } = getEnvVars();

import BookingDeleteModal from './BookingDeleteModal';

const MyBookingList = ({
  token,
  navigation,
  booking,
  deleteBookingState,
  modifyBookingState,
  index,
  controlCoordinate,
  controlCenterData,
  controlBookmarkClicked,
  changeBookingState,
}) => {
  const [modalDeleteBookingShown, setModalDeleteBookingShown] = useState(false);

  const handleModalDeleteBookingShown = (status) => {
    setModalDeleteBookingShown(status);
  };

  const date = Moment(new Date()).format('yyyy-MM-DD');
  const time = Moment(new Date()).format('HH:mm');
  const bookingTime = booking.time.slice(0, 5);

  const getCenterInfo = () => {
    let url = ec2 + '/center?centerId=' + booking.center.id;
    fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return '';
      })
      .then((data) => {
        if (typeof data === 'object') {
          controlCoordinate(data.latitude, data.longitude);
          controlCenterData([data], [data]);
          controlBookmarkClicked(true);
          navigation.navigate('MapStack', {
            screen: 'MapContainer',
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookingInfo}>
        <Text style={styles.bookingCenter} onPress={getCenterInfo}>
          {booking.center.centerName}
        </Text>
        <Text style={styles.bookingDate}>
          예약 일시 : {booking.date} / {booking.time.slice(0, 5)}
        </Text>
      </View>
      <View style={styles.btnSection}>
        {booking.bookingState === 'used' ? (
          <Fragment>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                navigation.navigate('BookingReview', {
                  token,
                  booking,
                  index,
                  changeBookingState,
                })
              }
            >
              <Text style={styles.btnText}>리뷰 쓰기</Text>
            </TouchableOpacity>
            <Text style={styles.blockText}>예약 수정</Text>
            <Text style={styles.blockText}>예약 취소</Text>
          </Fragment>
        ) : booking.bookingState === 'notUsed' ||
          booking.bookingState === 'reviewed' ? (
          <Fragment>
            <Text style={styles.blockText}>리뷰 쓰기</Text>
            <Text style={styles.blockText}>예약 수정</Text>
            <Text style={styles.blockText}>예약 취소</Text>
          </Fragment>
        ) : booking.bookingState === 'booked' &&
          booking.date <= date &&
          bookingTime <= time ? (
          <Fragment>
            <Text style={styles.blockText}>리뷰 쓰기</Text>
            <Text style={styles.blockText}>예약 수정</Text>
            <Text style={styles.blockText}>예약 취소</Text>
          </Fragment>
        ) : (booking.bookingState === 'booked' && booking.date !== date) ||
          booking.time.slice(0, 5) !== time ? (
          <Fragment>
            <Text style={styles.blockText}>리뷰 쓰기</Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                navigation.navigate('BookingModify', {
                  token,
                  booking,
                  modifyBookingState,
                  index,
                })
              }
            >
              <Text style={styles.btnText}>예약 수정</Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={styles.btn}
              onPress={() => handleModalDeleteBookingShown(true)}
            >
              <Text style={styles.btnText}>예약 취소</Text>
            </TouchableHighlight>
          </Fragment>
        ) : (
          <Fragment />
        )}
        <BookingDeleteModal
          booking={booking}
          token={token}
          navigation={navigation}
          deleteBookingState={deleteBookingState}
          index={index}
          handleModalDeleteBookingShown={handleModalDeleteBookingShown}
          modalDeleteBookingShown={modalDeleteBookingShown}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  bookingInfo: {
    marginBottom: 10,
  },
  bookingCenter: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  bookingDate: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  btnSection: {
    flexDirection: 'row',
  },
  btn: {
    borderColor: '#62CCAD',
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginRight: 10,
    borderRadius: 25,
  },
  btnText: {
    fontSize: 15,
    color: '#62CCAD',
    fontWeight: 'bold',
  },
  blockText: {
    fontSize: 15,
    color: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginRight: 10,
    borderRadius: 25,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default MyBookingList;