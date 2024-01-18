import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, Text, Pressable, Image, SafeAreaView } from 'react-native'
import { AuthHeader, Login, SignUp } from '../components'
import { AppColors, AppConstants, AppImages } from '../constants'

const AuthScreen = () => {

    const [activePage, setActivePage] = useState('login')


    return (
        <View style={styles.container}>
            <AuthHeader
                icon={AppImages.Logo}
                title={AppConstants.signIn}
                content={AppConstants.content}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={false}
                style={styles.content}>
                {
                    (page => {
                        switch (page) {
                            case 'login':
                                return <Login />
                            default:
                                return null
                        }
                    })(activePage)
                }
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: '#FFF',
        flex: 1,
        marginTop: 20
    },
})

export default AuthScreen
