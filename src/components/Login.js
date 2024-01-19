import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { AppConstants, AppImages } from '../constants'
import { authScreenStyle } from '../styles/styles'
import { AuthHeader, Button, Input } from '.'

const Login = ({ navigateToSignupPage }) => {

    const [form, setForm] = useState({ email: '', password: '', emailError: '', passwordError: '' })
    const [rememberMe, setRememberMe] = useState(false)

    const RenderSocialIcon = ({ icon }) => {
        return (
            <TouchableOpacity activeOpacity={.7} style={authScreenStyle.socialIconView}>
                <Image source={icon} style={authScreenStyle.socialIcon} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    const handleInputField = (data, key) => (value) => {
        setForm(state => ({
            ...state,
            [data]: value,
            [key]: '',
        }))
    }

    const handleButtonPress = () => {
        let isError = false
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (form.email.trim().length === 0 && form.password.trim().length === 0) {
            isError = true
            setForm(state => ({
                ...state,
                ['emailError']: AppConstants.pleaseEnterEmail,
                ['passwordError']: AppConstants.pleaseEnterPassword,
            }))
        }

        if (!emailRegex.test(form.email)) {
            isError = true
            setForm(state => ({
                ...state,
                ['emailError']: AppConstants.invalidEmailAddress,
            }))
        }

        if (form.email.trim().length === 0) {
            isError = true
            setForm(state => ({
                ...state,
                ['emailError']: AppConstants.pleaseEnterEmail,
            }))
        }

        if (form.password.trim().length === 0) {
            isError = true
            setForm(state => ({
                ...state,
                ['passwordError']: AppConstants.pleaseEnterPassword,
            }))
        }
        if (!isError) {

        }
    }

    return (
        <View style={authScreenStyle.container}>
            <AuthHeader
                icon={AppImages.Logo}
                title={AppConstants.signIn}
                content={AppConstants.content}
            />
            <Input
                value={form.email}
                icon={AppImages.Email}
                placeholder={AppConstants.email}
                onChangeText={handleInputField('email', 'emailError')}
                keyboardType='email-address'
                error={form.emailError}
                containerStyle={{ marginBottom: 0 }} />
            <Input
                value={form.password}
                icon={AppImages.Lock}
                placeholder={AppConstants.password}
                onChangeText={handleInputField('password', 'passwordError')}
                error={form.passwordError}
                secureTextEntry
                containerStyle={{ marginBottom: 0 }} />
            <View style={authScreenStyle.content}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={[authScreenStyle.checkBoxRow, { marginBottom: 0 }]}
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
                        <Text style={authScreenStyle.rememberMeTextStyle}>{AppConstants.rememberMe}</Text>
                    </TouchableOpacity>
                    <Text style={authScreenStyle.forgotPassTextStyle}>{AppConstants.forgotPassword}</Text>
                </View>
                <View style={authScreenStyle.socialMainView}>
                    <RenderSocialIcon icon={AppImages.Facebook} />
                    <RenderSocialIcon icon={AppImages.Apple} />
                    <RenderSocialIcon icon={AppImages.Google} />
                </View>
                <View style={[authScreenStyle.row]}>
                    <View style={authScreenStyle.line} />
                    <Text style={authScreenStyle.orTextStyle}>Or</Text>
                    <View style={authScreenStyle.line} />
                </View>
            </View>

            <View style={{
                bottom: 40,
                position: 'absolute',
                width: '100%'
            }}>
                <View style={[authScreenStyle.dontHaveAccntView]}>
                    <Text style={authScreenStyle.dontHaveAcntTextStyle}>{AppConstants.dontHaveAnAccount}</Text>
                    <TouchableOpacity activeOpacity={.7} onPress={navigateToSignupPage}>
                        <Text style={authScreenStyle.signUpTextStyle}>{` ${AppConstants.signUp}`}</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    title={AppConstants.proceed}
                    handleButtonPress={handleButtonPress}
                />
            </View>
        </View>
    )
}

export default Login
