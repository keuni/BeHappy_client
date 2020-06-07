import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Content, List, ListItem, Left, Right } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

const username = 'minyeong';

class Mypage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.mypageText}>MyPage</Text>
          <TouchableOpacity onPress={() => alert('logout success')}>
            <Text style={styles.logoutText}>logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.user}>{username}</Text>
          <Text style={{ color: '#62CCAD', fontWeight: 'bold', fontSize: 20, }}>님</Text>
          <TouchableOpacity onPress={() => alert('my info modify')}>
            {<Entypo name="chevron-right" size={26} color={'#62CCAD'} />}
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <TouchableOpacity style={styles.listItem} onPress={() => alert('boomarks')} >
            <Text style={styles.itemText}>즐겨찾기</Text>
            {<Entypo name="chevron-right" size={40} color={'#62CCAD'} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => alert('reviews')} >
            <Text style={styles.itemText}>리뷰관리</Text>
            {<Entypo name="chevron-right" size={40} color={'#62CCAD'} />}
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} onPress={() => alert('bookings')} >
            <Text style={styles.itemText}>예약관리</Text>
            {<Entypo name="chevron-right" size={40} color={'#62CCAD'} />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: '12%',
    paddingLeft: '6%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mypageText: {
    marginTop: 30,
    height: 40,
    color: '#62CCAD',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: '2%',
  },
  logoutText: {
    marginTop: 20,
    color: '#62CCAD',
    paddingRight: '6%',
    fontWeight: 'bold',
  },
  userInfo: {
    marginBottom: 10,
    paddingLeft: '8%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  list: {
    padding: 10,
  },
  listItem: {
    borderColor: '#62CCAD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 3,
    padding: '6%',
    marginBottom: 10,
  },
  itemText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#62CCAD',
  }
});

export default Mypage;