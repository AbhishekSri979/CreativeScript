import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Login, SignUp } from '../components'

const AuthScreen = () => {
    const [activePage, setActivePage] = useState('login')
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={false}
                style={styles.content}>
                {
                    (page => {
                        switch (page) {
                            case 'login':
                                return <Login navigateToSignupPage={() => setActivePage('signUp')} />
                            case 'signUp':
                                return <SignUp onPressBack={() => setActivePage('login')} />
                            default:
                                return null
                        }
                    })(activePage)
                }
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        backgroundColor: '#FFF',
        flex: 1,
        marginTop: 20
    },
})

export default AuthScreen
