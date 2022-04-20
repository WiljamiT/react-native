import React from 'react';
import { View, Text, Image } from 'react-native';

import { EurPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View style={{
      width: "100%", 
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,
    }}
    key={bid.id}
    >
      <Image 
        source={bid.image}
        resizeMode="cover"
        style={{ width: 48, height: 48, borderWidth: 1, borderColor: "#000", borderRadius: 50}}
      />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: SIZES.base,
        }}
      >

      
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small, 
          color: COLORS.primary
        }}>
          Tarjounnut:  {bid.name}
        </Text>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small - 2, 
          color: COLORS.secondary,
          marginTop: 3,
        }}>
          {bid.date}
        </Text>
      </View>

      <EurPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid