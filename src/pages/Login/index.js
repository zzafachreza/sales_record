import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { storeData } from '../../utils/localStorage';


export default function ({ navigation }) {

  const [kirim, setKirim] = useState({
    email: null,
    password: null
  });
  const [loading, setLoading] = useState(false);



  const masuk = () => {


    if (kirim.email == null && kirim.password == null) {
      alert('Email dan Passwoord tidak boleh kosong !');
    } else if (kirim.email == null) {
      alert('Email tidak boleh kosong !');
    } else if (kirim.password == null) {
      alert('Passwoord tidak boleh kosong !');
    } else {


      // post API

      setLoading(true);

      console.log(kirim);

      axios.post('https://zavalabs.com/sales_record/api/login.php', kirim).then(res => {
        console.warn(res.data);

        if (res.data.kode === 50) {

          setTimeout(() => {
            setLoading(false);
            alert(res.data.msg);
          }, 1200)



        } else {
          // alert('success');
          storeData('user', res.data);

          setTimeout(() => {
            navigation.replace('Home')
          }, 800)

        }

      })

    }




  }

  return (
    <ScrollView style={{ padding: 10, flex: 1 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 100, height: 90 }}
        />
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 10,
            color: colors.black,
          }}>
          SALES RECORD
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 30,
            color: colors.black,
          }}>
          Aplikasi Untuk Melakukan Sales Record
        </Text>
      </View>
      <MyGap jarak={40} />
      <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
        <MyInput label="Email" onChangeText={val => setKirim({
          ...kirim,
          email: val
        })}


          iconname="card" placeholder="Masukan Email Anda" />
        <MyGap jarak={20} />
        <MyInput
          onChangeText={val => setKirim({
            ...kirim,
            password: val
          })}
          secureTextEntry={true}
          label="Password"
          iconname="key"
          placeholder="Masukan password Anda"
        />
        <MyGap jarak={40} />
        {!loading && <MyButton
          onPress={masuk}
          title="LOGIN SEKARANG"
          warna={colors.primary}
          Icons="log-in-outline"
        />}
      </View>
      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
