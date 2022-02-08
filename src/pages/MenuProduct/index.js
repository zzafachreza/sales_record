import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native'
import { MyButton } from '../../components';
import { fonts, windowWidth, colors, windowHeight } from '../../utils'
import { getData } from '../../utils/localStorage';
import { useIsFocused } from "@react-navigation/native";
import 'intl';
import 'intl/locale-data/jsonp/en';


export default function ({ navigation }) {


    const isFocused = useIsFocused();
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);
    const [isData, setIsData] = useState(false);
    const [loading, setLoading] = useState(false);

    const getDataAPI = (x) => {
        setIsData(false);
        getData('user').then(res => {
            setUser(res);

            axios.post('https://zavalabs.com/sales_record/api/sales_record_product.php').then(r => {

                setIsData(true);
                setData(r.data);
                console.warn('data pelatihan', r.data)
            })

        })
    }



    useEffect(() => {

        if (isFocused) {
            getDataAPI();
        }

    }, [isFocused])


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


    return (
        <SafeAreaView>
            <ScrollView>

                {!isData && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )}



                {isData && data.map(item => {
                    return (
                        <View style={{ margin: 5, padding: 10, borderWidth: 1, borderColor: colors.primary }}>



                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                fontSize: windowWidth / 25,
                                color: colors.black,

                            }}>Nama Product</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[400],
                                fontSize: windowWidth / 20,
                                color: colors.black,

                            }}>{item.nama_product}</Text>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 25,
                                        color: colors.black,

                                    }}>Stock Product</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 25,
                                        color: colors.black,

                                    }}>{item.stok_product}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontFamily: fonts.secondary[600],
                                        fontSize: windowWidth / 25,
                                        color: colors.black,

                                    }}>Harga Product</Text>
                                    <Text style={{
                                        fontFamily: fonts.secondary[400],
                                        fontSize: windowWidth / 25,
                                        color: colors.black,

                                    }}>{new Intl.NumberFormat().format(item.harga_product)}</Text>
                                </View>
                            </View>

                        </View>
                    )
                })}




            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
