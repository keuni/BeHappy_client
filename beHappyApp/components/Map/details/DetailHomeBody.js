import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailHomeBody(props) {
  return (
    <View style={styles.container}>
      {props.route.params.specialties.length > 0 ? (
        <View style={{ flexDirection: 'row', marginTop: '10%' }}>
          <MaterialCommunityIcons
            name='tag-multiple'
            size={25}
            style={{ marginRight: 13 }}
          />
          <View style={styles.specialtyContainer}>
            {props.route.params.specialties.map((specialty) => (
              <Text style={styles.specialty} key={specialty}>
                #{specialty}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <></>
      )}

      <View style={styles.lineBox}>
        <MaterialCommunityIcons name='city' size={25} />
        <Text style={styles.text}>
          {'    '}
          {props.route.params.roadAddressName || props.route.params.addressName}
        </Text>
      </View>

      {props.route.params.phone ? (
        <View style={styles.lineBox}>
          <MaterialCommunityIcons name='phone-classic' size={25} />

          <Text style={styles.text}>
            {'    '}
            {props.route.params.phone}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: '8%',
  },
  lineBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  specialtyContainer: {
    width: '85%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialty: {
    fontSize: 17,
    color: 'white',
    paddingHorizontal: 7,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: '#62CCAD',
  },
  text: {
    fontSize: 17,
  },
});
