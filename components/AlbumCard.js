import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";

import { SubInfo, EurPrice, AlbumTitle } from "./SubInfo";

const AlbumCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.font,
        ...SHADOWS.dark,
        paddingTop: 50,
        alignItems: "center",
      }}
    >
      <SubInfo />
      <View style={{ width: 350, height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            borderColor: "#fff",
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <AlbumTitle
          title={data.name}
          subTitle={data.seller}
          titleSize={SIZES.font}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EurPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default AlbumCard;
