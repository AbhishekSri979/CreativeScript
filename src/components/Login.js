import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { AppConstants, AppImages } from '../constants'
import { loginStyle } from '../styles/styles'
import { Button, Input } from '.'

const Login = ({ onChangeForm, onSuccessLogin }) => {

    const [form, setForm] = useState({ email: '', password: '' })
    const [rememberMe, setRememberMe] = useState(false)

    const RenderSocialIcon = ({ icon }) => {
        return (
            <TouchableOpacity activeOpacity={.7} style={loginStyle.socialIconView}>
                <Image source={icon} style={loginStyle.socialIcon} resizeMode='contain' />
            </TouchableOpacity>
        )
    }


    return (
        <View style={loginStyle.container}>
            <Input
                value={form.email}
                icon={AppImages.Email}
                placeholder={AppConstants.email}
                containerStyle={{ marginBottom: 22 }} />
            <Input
                value={form.password}
                icon={AppImages.Lock}
                placeholder={AppConstants.password}
                secureTextEntry
                containerStyle={{ marginBottom: 16 }} />
            <View style={loginStyle.content}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[loginStyle.checkBoxRow, { marginBottom: 0 }]}
                        onPress={() => setRememberMe(!rememberMe)}>
                        {
                            rememberMe ?
                                <Image source={AppImages.Checkbox} style={{ height: 20, width: 20 }} resizeMode='contain' />
                                :
                                <View style={{
                                    height: 20,
                                    width: 20,
                                    borderWidth: 1,
                                    borderRadius: 4
                                }} />
                        }
                        <Text style={loginStyle.rememberMeTextStyle}>{AppConstants.rememberMe}</Text>
                    </TouchableOpacity>
                    <Text style={loginStyle.forgotPassTextStyle}>{AppConstants.forgotPassword}</Text>
                </View>
                <View style={loginStyle.socialMainView}>
                    <RenderSocialIcon icon={AppImages.Facebook} />
                    <RenderSocialIcon icon={AppImages.Apple} />
                    <RenderSocialIcon icon={AppImages.Google} />
                </View>
                <View style={[loginStyle.row]}>
                    <View style={loginStyle.line} />
                    <Text style={loginStyle.orTextStyle}>Or</Text>
                    <View style={loginStyle.line} />
                </View>
            </View>
            <View style={[loginStyle.dontHaveAccntView]}>
                <Text style={loginStyle.dontHaveAcntTextStyle}>{AppConstants.dontHaveAnAccount}</Text>
                <TouchableOpacity activeOpacity={.7}>
                    <Text style={loginStyle.signUpTextStyle}>{` ${AppConstants.signUp}`}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                bottom: 20,
            }}>
                <Button title={AppConstants.proceed} />
            </View>
        </View>
    )
}

export default Login
