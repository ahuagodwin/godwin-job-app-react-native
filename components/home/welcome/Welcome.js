import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { Icons } from '../../../constants/Icons'
import { Themes } from '../../../constants/Theme'
import styles from "./welcome.style"

const Welcome = () => {
    const router = useRouter();
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text style={styles.userName}>Hello Godwin</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>

        {/* a search input */}
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}></View>
        </View>

      </View>
    </>
  );
}

export default Welcome