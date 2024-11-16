import { Image, Linking, StyleSheet } from 'react-native';
import React from 'react';
import {
  Box,
  Button,
  ButtonText,
  Heading,
  HStack,
  ImageBackground,
} from '@gluestack-ui/themed';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MyContainer from '../components/global/MyContainer';
import { ColorConstant, WindowConstant } from '../utilities/Theme';
import { RootStackParamList } from '../base/NativeStack';
import MyButton from '../components/global/MyButton';
import MyIcon from '../components/global/MyIcon';

type navProps = NativeStackNavigationProp<RootStackParamList, 'welcome'>;
export default function WelcomeScreen() {
  const navigation = useNavigation<navProps>();

  return (
    <Box flex={1}>
      <ExpoStatusBar style="light" />
      <MyContainer
        padding
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Image source={require('../../assets/logo.jpg')} style={styles.image} />
        <Heading
          color={ColorConstant.primary}
        >{`Welcome to \nBabskonnect`}</Heading>
        <Box alignSelf="stretch">
          <HStack style={{ alignSelf: 'stretch' }}>
            <Button
              onPress={() => navigation.navigate('login')}
              flex={1}
              borderColor={ColorConstant.primary}
              variant="outline"
              borderWidth="$2"
              mr="$2"
            >
              <MyIcon name="log-in-outline" color={ColorConstant.primary} />
              <ButtonText color={ColorConstant.primary}>Login</ButtonText>
            </Button>
            <Button
              onPress={() => navigation.navigate('signup')}
              borderColor={ColorConstant.primary}
              flex={1}
              variant="outline"
              borderWidth="$2"
              mr="$2"
            >
              <MyIcon name="log-in-outline" color={ColorConstant.primary} />
              <ButtonText color={ColorConstant.primary}>Signup</ButtonText>
            </Button>
          </HStack>

          <HStack style={{ alignSelf: 'stretch', marginTop: 20 }}>
            <Button
              onPress={() => Linking.openURL('tel:+2348137000125')}
              flex={1}
              borderColor={ColorConstant.primary}
              variant="outline"
              borderWidth="$2"
              mr="$2"
            >
              <MyIcon name="call-outline" color={ColorConstant.primary} />

              <ButtonText color={ColorConstant.primary}>Call</ButtonText>
            </Button>
            <Button
              onPress={() => Linking.openURL('https://wa.me/+2348137000125')}
              borderColor={ColorConstant.primary}
              flex={1}
              variant="outline"
              borderWidth="$2"
              mr="$2"
            >
              <MyIcon name="logo-whatsapp" color={ColorConstant.primary} />
              <ButtonText color={ColorConstant.primary}>Whatsapp</ButtonText>
            </Button>
          </HStack>
        </Box>
      </MyContainer>
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: WindowConstant.width > 400 ? 300 : 200,
    marginTop: 20,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
