import React, { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { Login, SignUp } from '../components'

const AuthScreen = () => {
    const [activePage, setActivePage] = useState('login')
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={false}
                style={styles.content}>
                {
                    (page => {
                        switch (page) {
                            case 'login':
                                return <Login handleButtonPress={() => setActivePage('signUp')} />
                            case 'signUp':
                                return <SignUp handleButtonPress={() => setActivePage('login')} />
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
