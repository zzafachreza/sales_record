import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fonts } from '../../utils/fonts';

const IconCategory = ({ img, title, onPress, iconname }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    // flex: 1,
                    width: 90,
                    height: 90,
                    // backgroundColor: '#F8781D',
                    // backgroundColor: '#FFF',
                    backgroundColor: colors.secondary,
                    borderRadius: 10,
                    padding: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                    borderWidth: 4,
                    borderColor: colors.secondary,

                    elevation: 2,
                }}>
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'center',
                    }}>
                    <Icon
                        type="ionicon"
                        name={iconname}
                        color={colors.primary}
                        size={40}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Montserrat-SemiBold',
                            // color: '#F8781D',
                            color: colors.white,
                            fontSize: 12,
                            textAlign: 'center',
                        }}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default function MyDashboard() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();

    return (
        <View
            style={{
                justifyContent: 'center',
                padding: 20,
                flex: 1,
            }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MenuProduct')}
                        style={{
                            flex: 1,
                            borderRadius: 10,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: windowHeight / 20,
                            marginRight: 10,
                            marginBottom: 5,
                        }}>
                        <Icon
                            type="ionicon"
                            name="camera-outline"
                            size={windowWidth / 5}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}>
                        <Text style={{ fontFamily: fonts.secondary[600], fontSize: 16 }}>
                            PRODUCT
                        </Text>
                        <Text style={{ fontFamily: fonts.secondary[400], fontSize: 12 }}>
                            Data Master Product
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Manual')}
                        style={{
                            flex: 1,
                            borderRadius: 10,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                            marginBottom: 5,
                        }}>
                        <Icon
                            type="ionicon"
                            name="desktop-outline"
                            size={windowWidth / 5}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 70,
                        }}>
                        <Text style={{ fontFamily: fonts.secondary[600], fontSize: 16 }}>
                            PRODUCT MONITORING
                        </Text>
                        <Text style={{ fontFamily: fonts.secondary[400], fontSize: 12 }}>
                            Monitoring Product
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MenuCustomer')}
                        style={{
                            flex: 1,
                            borderRadius: 10,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: windowHeight / 20,
                            marginLeft: 10,
                            marginBottom: 5,
                        }}>
                        <Icon
                            type="ionicon"
                            name="people-outline"
                            size={windowWidth / 5}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 10,
                        }}>
                        <Text style={{ fontFamily: fonts.secondary[600], fontSize: 16 }}>
                            CUSTOMER
                        </Text>
                        <Text style={{ fontFamily: fonts.secondary[400], fontSize: 12 }}>
                            Data Master Customer
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Hasil')}
                        style={{
                            flex: 1,
                            borderRadius: 10,
                            backgroundColor: colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                            marginBottom: 5,
                        }}>
                        <Icon
                            type="ionicon"
                            name="documents-outline"
                            size={windowWidth / 5}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 70,
                        }}>
                        <Text style={{ fontFamily: fonts.secondary[600], fontSize: 16 }}>
                            BUSINESS DATA
                        </Text>
                        <Text style={{ fontFamily: fonts.secondary[400], fontSize: 12 }}>
                            Business Data
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}