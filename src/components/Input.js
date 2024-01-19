import React from 'react'
import { View, StyleSheet, TextInput, Text, Image } from 'react-native'
import { AppColors } from '../constants'


const Input = ({ label, placeholder, icon, containerStyle, error, ...props }) => {
    return (
        <View style={[styles.mainView, { height: error ? 90 : undefined }]}>
            <View style={[styles.container, containerStyle]}>
                <Image source={icon} style={styles.inputIcon} resizeMode='contain' />
                <TextInput
                    style={[styles.input]}
                    placeholder={placeholder}
                    placeholderTextColor={'#8083A3'}
                    {...props} />
            </View>
            <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '93%',
        alignSelf: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 58,
        width: '100%',
        borderWidth: 1,
        borderColor: AppColors.F_Eight,
        borderRadius: 12,
        backgroundColor: AppColors.F_Eight,
        padding: 12,
    },
    input: {
        height: 58,
        width: '90%',
        fontSize: 14,
        marginLeft: 10,
        color: '#333',
        fontWeight: '500'
    },
    inputIcon: {
        height: 24,
        width: 24
    },
    errorTextStyle: {
        color: AppColors.red,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10
    }
})

export default Input
