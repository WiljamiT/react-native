import { useState } from 'react';
import { View, Text } from 'react-native';

import { EurPrice, AlbumTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false)
  return (
    <>
       <View style={{
        width: "100%", 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
      }}>
        <EurPrice price={data.price} />
      </View>
      <View style={{ 
        width: "100%", 
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <AlbumTitle 
          title={data.name}
          subTitle={data.seller}
          titleSize={SIZES.large}
          subTitleSize={SIZES.font}
        />

        
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5}}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold, 
          color: COLORS.primary,
        }}>Kuvaus</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular, 
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {text}
            {!readMore && '...'}
            <Text 
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold, 
                color: COLORS.secondary,
              }}
              onPress={() => {
                if(!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
              >
              {readMore ? ' Näytä Vähemmän' : ' Lue lisää'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc