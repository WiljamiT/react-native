import { View, Text, Image, TextInput } from 'react-native';

import { COLORS, SIZES, FONTS, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{ 
          color: COLORS.white,
          fontSize: SIZES.extraLarge
        }}>React-Native UI</Text>
        <View style={{ width: 45, height: 45 }}>
          <Image 
            source={assets.person06}
            resizeMode="cover"
            style={{ width: "100%", height: "100%", borderRadius: 50, borderWidth: 2, borderColor: "#fff" }}
          />

          <Image 
            source={assets.badge}
            resizeMode="contain"
            style={{ position: 'absolute', width: 25, height: 25, bottom: 0, right: 0 }}
          />

        </View>
      </View>

      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.small, color: COLORS.white }}>
          Hei, käyttäjä #394!
        </Text>

        <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2 }}>
          Selaa tai etsi levyjä
        </Text>

      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small -2
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            placeholder="Etsi"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader