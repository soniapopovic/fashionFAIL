import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import AppNavigator from './navigation/AppNavigator';

const snap = async (cameraRef, setPhoto) => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setPhoto(photo)
    }
  };

function CameraInput(props) {
    const [hasPermission, setHasPermission] = useState('granted');
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState()
    const [photo, setPhoto] = useState()

    // useEffect(() => {
    //     (async () => {
    //     const { status } = await Camera.requestPermissionsAsync();
    //     setHasPermission(status === 'granted');
    //     })();
    // }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1,
                            height: 400 }} ref={ref => {
                setCameraRef(ref);
            }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <Button title='Take a picture' onPress={() => snap(cameraRef, setPhoto)}/>
        </View>
        
    );
}

export default CameraInput;