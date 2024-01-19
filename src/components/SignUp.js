import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { AppConstants, AppImages } from '../constants'
import { authScreenStyle } from '../styles/styles'
import { AuthHeader, Button, Input } from '.'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { updateInfoAction } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'


const SignUp = ({ onPressBack }) => {

    const [form, setForm] = useState({ name: '', email: '', password: '', nameError: '', emailError: '', passwordError: '' })
    const [termsCondition, setTermsCondition] = useState(false)
    const [allowNotification, setAllowNotification] = useState(false)
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isFocused) {
            setForm({ name: '', email: '', password: '', nameError: '', emailError: '', passwordError: '' })
        }

    }, [isFocused])

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
        if (form.email.trim().length === 0 && form.password.trim().length === 0 && form.name.trim().length === 0) {
            isError = true
            setForm(state => ({
                ...state,
                ['emailError']: AppConstants.pleaseEnterEmail,
                ['passwordError']: AppConstants.pleaseEnterPassword,
                ['nameError']: AppConstants.pleaseENterName,
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

        if (form.name.trim().length === 0) {
            isError = true
            setForm(state => ({
                ...state,
                ['nameError']: AppConstants.pleaseENterName,
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
            // makePostRequest() 
            navigation.navigate('Profile')
            dispatch(updateInfoAction('login', 'activePage'))
        }
    }

    async function makePostRequest() {
        const url = "http://restapi.adequateshop.com/api/authaccount/registration";
        const headers = {
            "Content-Type": "application/json",
        };

        const requestBody = {
            name: form.name,
            email: form.email,
            password: form.password,
        };

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(requestBody),
        };

        try {
            const response = await fetch(url, requestOptions);
            console.log('response', response);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }



    return (
        <View style={authScreenStyle.container}>
            <TouchableOpacity style={{
                left: 10,
                top: 20,
                width: 40,
                padding: 10
            }}
                activeOpacity={.7}
                onPress={onPressBack}
            >
                <Image source={AppImages.Back} style={{ height: 20, width: 20 }} resizeMode='contain' />
            </TouchableOpacity>
            <AuthHeader
                icon={AppImages.Logo}
                title={AppConstants.createAnAccount}
                content={AppConstants.content}
            />
            <Input
                value={form.name}
                icon={AppImages.User}
                placeholder={AppConstants.name}
                onChangeText={handleInputField('name', 'nameError')}
                error={form.nameError}
            />
            <Input
                value={form.email}
                icon={AppImages.Email}
                placeholder={AppConstants.email}
                keyboardType='email-address'
                onChangeText={handleInputField('email', 'emailError')}
                error={form.emailError}

            />
            <Input
                value={form.password}
                icon={AppImages.Lock}
                placeholder={AppConstants.password}
                onChangeText={handleInputField('password', 'passwordError')}
                secureTextEntry
                error={form.passwordError}
            />
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
