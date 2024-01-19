import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AppColors, AppImages } from '../constants'

const BottomTab = ({ }) => {

    const tabArray = [
        { id: 1, icon: AppImages.Tab1 },
        { id: 2, icon: AppImages.Tab2 },
        { id: 3, icon: AppImages.Tab3 },
        { id: 4, icon: AppImages.Tab4 },
        { id: 5, icon: AppImages.Tab5 },
    ]

    return (

        <View style={styles.container}>
            {
                tabArray.map((item) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={.7}
                        >
                            <Image source={item.icon} style={{ height: item.id == 3 ? 70 : 24, width: item.id == 3 ? 70 : 24 }} resizeMode='contain' />
                        </TouchableOpacity>
                    )
                })
            }

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.white,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0
    },
    contentTextStyle: {
        fontSize: 16,
        color: AppColors.white,
        fontWeight: '500',
    }
})

export default BottomTab
