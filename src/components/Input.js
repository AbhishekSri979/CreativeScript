import React from 'react'
import { View, StyleSheet, TextInput, Text, Image } from 'react-native'
import { AppColors, AppImages } from '../constants'


const Input = ({ label, placeholder, icon, containerStyle, ...props }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image source={icon} style={styles.inputIcon} resizeMode='contain' />
            <TextInput
                style={[styles.input]}
                placeholder={placeholder}
                placeholderTextColor={'#8083A3'}
                {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        height: 58,
        width: '93%',
        borderWidth: 1,
        borderColor: AppColors.F_Eight,
        borderRadius: 12,
        backgroundColor: AppColors.F_Eight,
        padding: 12,
        alignSelf: 'center'
    },
    input: {
        height: 58,
        width: '90%',
        fontSize: 12,
        marginLeft: 10
    },
    inputIcon: {
        height: 24,
        width: 24
    }
})

export default Input
