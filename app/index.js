import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { Themes } from "../constants/Theme";
import { Icons } from "../constants/Icons";
import { Images } from "../constants/Images";

import { Welcome, Popular, NearBy, ScreenHeaderButton, IconButton } from "../components";

const Home = () => {
  // defining router
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: Themes.COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                // giving background color to the mobile app header that covers network terminals etc
                headerStyle: { backgroundColor: Themes.COLORS.rose },
                headerShadowVisible: false,
                
                // app navigation icon
                headerLeft: () => (
                    <IconButton iconUrl="menu" dimension="90%" size={30} color={Themes.COLORS.lightWhite}  />
                ),
                
                // user profile image
                headerRight: () => (
                    <ScreenHeaderButton iconUrl={Images.godwin} dimension="100%" />
                ),
                headerTitle: ""
            }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: Themes.SIZES.medium}}>
                    <Welcome />
                    <Popular />
                    <NearBy />
                </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
 
export default Home;
