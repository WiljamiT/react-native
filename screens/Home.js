import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'; 
// https://reactnative.dev/docs/flatlist
// https://reactnative.dev/docs/view
// https://reactnative.dev/docs/SafeAreaView
// https://reactnative.dev/docs/text

import { COLORS, ALBUMData, SIZES } from '../constants';
import { AlbumCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
  const [albumiData, setAlbumData] = useState(ALBUMData);

  const handleSearch = (value) => {
    if(!value.length) return setAlbumData(ALBUMData);

    const filteredData = ALBUMData.filter((item) => 
    item.name.toLowerCase().includes(value.toLowerCase()));
  
    if(filteredData.length) {
      setAlbumData(filteredData);
    } else {
      setAlbumData(ALBUMData);
    }
  }

  const Footer = () => {
    return (
      <View style={{
        height: 100,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: SIZES.small,
          textAlign: "center",
          color: COLORS.white,
          padding: 20
        }}>Portfolioon</Text>

        <Text style={{
          fontSize: SIZES.small,
          textAlign: "center",
          color: COLORS.gray,
          padding: 20
        }}>© | Wiljami Takkinen</Text>

        
        <Text style={{
          fontSize: SIZES.small,
          textAlign: "center",
          color: COLORS.white,
          padding: 20
        }}>Lähdekoodi</Text>
        
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
   
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList 
            data={albumiData}
            renderItem={({ item }) => <AlbumCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            ListFooterComponent={Footer}
          />
          
        </View>
        

        <View style={{ 
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View 
            style={{ 
              height: 300, 
              backgroundColor: COLORS.primary}} />
          
          <View 
            style={{ 
              flex: 1,
              backgroundColor: COLORS.white}} />
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Home