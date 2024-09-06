import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, ImageBackground, ScrollView, VStack } from '@gluestack-ui/themed';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

import { WindowConstant } from '../utilities/Theme';
import Form from '../components/login/Form';
import { Image } from 'expo-image';
import useDetectInternet from '../components/global/detectInternet';

export default function Login() {
  useDetectInternet();
  return (
    <Box flex={1}>
      <ExpoStatusBar style="light" />
      <ScrollView bgColor="white">
        <Box height={WindowConstant.height / 3}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/bg1.jpg')}
          />
        </Box>
        <VStack
          borderTopRightRadius={40}
          borderTopLeftRadius={40}
          zIndex={20}
          transform={[{ translateY: -40 }]}
          minHeight={WindowConstant.height / 1.5}
          backgroundColor="white"
        >
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            contentFit="contain"
          />
          <Form />
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    height: 110,
    width: '65%',
    marginTop: 10,
    alignSelf: 'center',
  },
});
