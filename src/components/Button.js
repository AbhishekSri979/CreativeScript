import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { AppColors } from '../constants'

const Button = ({ title }) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.contentTextStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.appThemeColor,
        borderRadius: 70,
        alignSelf: 'center'
    },
    contentTextStyle: {
        fontSize: 16,
        color: AppColors.white,
        fontWeight: '500',
    }
})

export default Button
