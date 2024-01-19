import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { AppConstants, AppImages } from '../constants'
import { authScreenStyle } from '../styles/styles'
import { AuthHeader, Button, Input } from '.'

const SignUp = ({ handleButtonPress }) => {

    const [form, setForm] = useState({ email: '', password: '' })
    const [termsCondition, setTermsCondition] = useState(false)
    const [allowNotification, setAllowNotification] = useState(false)

    return (
        <View style={authScreenStyle.container}>
            <AuthHeader
                icon={AppImages.Logo}
                title={AppConstants.createAnAccount}
                content={AppConstants.content}
            />
            <Input
                value={form.email}
                icon={AppImages.User}
                placeholder={AppConstants.name}
                containerStyle={{ marginBottom: 22 }} />
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
            <View style={authScreenStyle.content}>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={[authScreenStyle.checkBoxRow, { marginTop: 20, width: '58%' }]}
                    onPress={() => setTermsCondition(!termsCondition)}>
                    {
                        termsCondition ?
                            <Image source={AppImages.Checkbox} style={{ height: 20, width: 20 }} resizeMode='contain' />
                            :
                            <View style={{
                                height: 20,
                                width: 20,
                                borderWidth: 1,
                                borderRadius: 4
                            }} />
                    }
                    <Text style={authScreenStyle.rememberMeTextStyle}>{AppConstants.agreeTermsCondition}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={.7}
                    style={[authScreenStyle.checkBoxRow, { marginTop: 20, width: '38%' }]}
                    onPress={() => setAllowNotification(!allowNotification)}>
                    {
                        allowNotification ?
                            <Image source={AppImages.Checkbox} style={{ height: 20, width: 20 }} resizeMode='contain' />
                            :
                            <View style={{
                                height: 20,
                                width: 20,
                                borderWidth: 1,
                                borderRadius: 4
                            }} />
                    }
                    <Text style={authScreenStyle.rememberMeTextStyle}>{AppConstants.allowNotification}</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                bottom: 40,
                position: 'absolute',
                width: '100%'
            }}>
                <Button
                    title={AppConstants.proceed}
                    handleButtonPress={handleButtonPress}
                />
            </View>
        </View>
    )
}

export default SignUp
