import { View, StyleSheet, Text, Image } from 'react-native'
import { AppColors } from '../constants'

const AuthHeader = ({ icon, title, content }) => {

    return (
        <View style={styles.logoContainer}>
            <Image source={icon} style={styles.logoStyle} resizeMode='contain' />
            <Text style={styles.labelTextStyle}>{title}</Text>
            <Text style={styles.contentTextStyle}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 25
    },
    logoStyle: {
        height: 74,
        width: 74
    },
    labelTextStyle: {
        fontSize: 24,
        color: AppColors.appThemeColor,
        fontWeight: '600',
        marginTop: 15
    },
    contentTextStyle: {
        fontSize: 14,
        color: AppColors.grey,
        fontWeight: '400',
        marginTop: 15
    }
})

export default AuthHeader
