import { StyleSheet } from 'react-native'
import { AppColors } from '../constants';

const authScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 28,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '20%',
        justifyContent: 'space-between'
    },
    checkBoxRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: AppColors.ED_color,
        height: 1,
        width: '46%'
    },
    orTextStyle: {
        fontSize: 12,
        color: AppColors.appThemeColor,
        fontWeight: '400'
    },
    dontHaveAcntTextStyle: {
        fontSize: 14,
        color: AppColors.Eight_Zero,
        fontWeight: '500'
    },
    signUpTextStyle: {
        fontSize: 14,
        color: AppColors.appThemeColor,
        fontWeight: '500'
    },
    rememberMeTextStyle: {
        fontSize: 12,
        color: AppColors.Three_three,
        fontWeight: '500',
        marginLeft: 10
    },
    forgotPassTextStyle: {
        fontSize: 12,
        color: AppColors.appThemeColor,
        fontWeight: '500',
    },
    socialIcon: {
        height: 50,
        width: 50,
        margin: 12
    },
    socialMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        top: 50
    },
    socialIconView: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    dontHaveAccntView: {
        flexDirection: 'row',
        borderColor: '#E4E6E8',
        height: 68,
        paddingHorizontal: 28,
        alignSelf: 'center'
    },
});

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(231,242,254)'
    },
    profileImageView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: .4,
        marginTop: 40
    },
    userNameStyle: {
        fontSize: 18,
        fontWeight: '500',
        color: AppColors.three_Three,
        top: 10
    },
    emailTextStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: AppColors.B_Three,
        top: 15
    },
    sectionView: {
        height: 58,
        width: '90%',
        borderWidth: 1,
        borderColor: AppColors.E_five,
        borderRadius: 12,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        marginVertical: 10
    },
    sectionTextStyle: {
        fontSize: 16,
        fontWeight: '400',
        color: AppColors.three_Three,
        left: 10
    }
});

export {
    authScreenStyle,
    profileStyle
}