import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Alert,
} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { fonts, windowWidth, colors, windowHeight } from '../../utils';
import { MyButton, MyGap, MyInput, MyHeader } from '../../components';

import RNExitApp from 'react-native-exit-app';
import { getData, storeData } from '../../utils/localStorage';
import { color } from 'react-native-elements/dist/helpers';
import 'intl';
import 'intl/locale-data/jsonp/en';
import MyDashboard from '../../components/MyDashboard';



export default function Home({ navigation }) {

  const [user, setUser] = useState({});



  useEffect(() => {

    getData('user').then(res => {
      setUser(res);
    })

  })




  const IndonesiaTgl = (tgl) => {

    var bulan = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    var _tanggal = new Date(tgl).getDate();
    var _bulan = new Date(tgl).getMonth();
    var _tahun = new Date(tgl).getFullYear();


    return `${_tanggal} ${bulan[_bulan]} ${_tahun}`
  }


  const MyTable = ({ label, value }) => {
    return (
      <View style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
      }}>
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: windowWidth / 23,
          color: colors.black
        }}>{label}</Text>
        <Text style={{
          fontFamily: fonts.secondary[400],
          fontSize: windowWidth / 23,
          color: colors.black
        }}>{value}</Text>
      </View>
    )
  }


  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
          // padding: 10
        }}>
        <View
          style={{
            padding: 10,
            height: windowHeight / 8,
            flexDirection: 'row',
            backgroundColor: colors.primary
          }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: fonts.secondary[400],
                fontSize: windowHeight / 25,
                maxWidth: '80%',
                color: colors.white,
              }}>
              Selamat datang,
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 22,
                maxWidth: '80%',
                color: colors.white,
              }}>
              {user.nama_lengkap}
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: fonts.secondary[400],
                fontSize: windowWidth / 27,
                maxWidth: '80%',
                color: colors.white,
              }}>
              {user.email}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Icon
              type="ionicon"
              name="cog"
              color={colors.white}
              size={windowWidth / 15}
            />
          </View>
        </View>


        <MyDashboard />



      </SafeAreaView >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 60, padding: 10, backgroundColor: colors.primary, borderTopWidth: 1, borderTopColor: colors.primary }}>

        <TouchableOpacity style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="home" color={colors.white} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.white
          }}>Beranda</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={() => navigation.navigate('MenuProfileEdit', user)} style={{ width: 80, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="person" color={colors.white} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.white
          }}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {

          Alert.alert(
            "SALES RECORD",
            "Apakah Anda yakin akan keluar ?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "OK", onPress: () => {
                  storeData('user', {
                    email: null,
                    password: null
                  });



                  navigation.replace('Login');
                }
              }
            ]
          );

        }} style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Icon type="ionicon" name="log-out" color={colors.white} />
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 35,
            color: colors.white
          }}>Logout / Keluar</Text>
        </TouchableOpacity>


      </View>
    </>
  );
}



const styles = StyleSheet.create({

})
