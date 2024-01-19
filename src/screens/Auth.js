import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { Login, SignUp } from '../components'
import { updateInfoAction } from '../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'

const AuthScreen = () => {
    const dispatch = useDispatch()
    const { activePage } = useSelector((state) => state.$auth)

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
                                return <Login navigateToSignupPage={() => dispatch(updateInfoAction('signUp', 'activePage'))} />
                            case 'signUp':
                                return <SignUp onPressBack={() => dispatch(updateInfoAction('login', 'activePage'))} />
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
