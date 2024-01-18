import { StyleSheet } from 'react-native'
import { AppColors } from '../constants';

const loginStyle = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1
    },
    content: {
        paddingHorizontal: 28,
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
        width: '30%'
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

export {
    loginStyle
}