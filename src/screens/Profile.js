import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native'
import { AppConstants, AppImages } from '../constants'
import { profileStyle } from '../styles/styles'
import { BottomTab } from '../components'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation()

    const ProfileSection = ({ icon, title, shadowIcon }) => {
        return (
            <TouchableOpacity
                activeOpacity={.7}
                onPress={() => navigation.navigate('Auth')}
                style={profileStyle.sectionView}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20
                }}>
                    {
                        shadowIcon &&
                        <View style={{
                            position: 'absolute',
                        }}>
                            <Image source={AppImages.Shadow} style={{ height: 68, width: 58 }} resizeMode='contain' />
                        </View>
                    }

                    <Image source={icon} style={{ height: 28, width: 28 }} resizeMode='contain' />
                    <Text style={profileStyle.sectionTextStyle}>{title}</Text>
                </View>
                <Image source={AppImages.RightIcon} style={{ height: 24, width: 24 }} resizeMode='contain' />
            </TouchableOpacity>
        )
    }

    return (
        <ImageBackground
            source={AppImages.BG}
            style={profileStyle.container}
        >
            <View style={profileStyle.profileImageView}>
                <View>
                    <TouchableOpacity
                        activeOpacity={.7}
                        style={{
                            position: 'absolute',
                            zIndex: 999999,
                            right: 0,
                            bottom: 0
                        }}>
                        <Image source={AppImages.Camera} style={{ height: 38, width: 38 }} resizeMode='contain' />
                    </TouchableOpacity>
                    <Image source={AppImages.Profile} style={{ height: 105, width: 105 }} resizeMode='contain' />
                </View>
                <Text style={profileStyle.userNameStyle}>Miriam de Jesús</Text>
                <Text style={profileStyle.emailTextStyle}>h.mariano@gmail.com</Text>
            </View>
            <ProfileSection icon={AppImages.ProfileUser} title={AppConstants.accntInfo} shadowIcon={true} />
            <ProfileSection icon={AppImages.Shield} title={AppConstants.googleBusinessProfile} shadowIcon={false} />
            <ProfileSection icon={AppImages.People} title={AppConstants.teamMembers} shadowIcon={false} />
            <BottomTab />
        </ImageBackground>
    )
}

export default Profile
