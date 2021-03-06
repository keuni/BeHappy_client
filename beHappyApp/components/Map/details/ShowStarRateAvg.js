import React from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ShowStarRateAvg({ rateAvg }) {
  let stars = [];
  {
    if (rateAvg.toString().slice(2) === '5') {
      for (let i = rateAvg - 1; i > -4; i--) {
        if (i > 0) {
          stars.push(
            <FontAwesome
              name='star'
              key={'full' + i.toString()}
              size={24}
              style={{ color: '#D61A3C', paddingRight: 3 }}
            />
          );
        }
      }
      stars.push(
        <FontAwesome
          name='star-half-empty'
          key={'half'}
          size={24}
          style={{ color: '#D61A3C', paddingRight: 3 }}
        />
      );
      for (let i = rateAvg - 1; i > -4; i--) {
        if (i < 0) {
          stars.push(
            <FontAwesome
              name='star-o'
              key={'o' + i.toString()}
              size={24}
              style={{ color: '#B2BEC3', paddingRight: 3 }}
            />
          );
        }
      }
    } else {
      rateAvg = Math.round(rateAvg);
      for (let i = rateAvg; i > -5; i--) {
        if (i > 0) {
          stars.push(
            <FontAwesome
              name='star'
              key={'full' + i.toString()}
              size={24}
              style={{ color: '#D61A3C', paddingRight: 3 }}
            />
          );
        } else {
          stars.push(
            <FontAwesome
              name='star-o'
              key={'o' + i.toString()}
              size={24}
              style={{ color: '#B2BEC3', paddingRight: 3 }}
            />
          );
        }
      }
    }
  }

  return (
    <View style={{ paddingTop: 6 }}>
      <View style={styles.rateStarAvg}>{stars.slice(0, 5)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  rateStarAvg: { flexDirection: 'row', alignItems: 'center', paddingBottom: 5 },
});
