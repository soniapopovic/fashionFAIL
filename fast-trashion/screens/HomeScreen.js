import * as WebBrowser from 'expo-web-browser';
import React, { useRef, useState, useEffect } from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import CameraInput from '../CameraInput.js';
import * as Permissions from 'expo-permissions';

export default function HomeScreen() {
	const [status, setStatus] = useState(false);

	useEffect(() => {
		Permissions.askAsync(Permissions.CAMERA).then(({ status }) => {
			setStatus(status === 'granted');
		});
	}, []);

	// const inputRef = useRef(null);

	// var statusGranted;
	// Permissions.askAsync(Permissions.CAMERA).then(({status})=>{statusGranted=(status==="granted")}).then(console.log(statusGranted));

	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.contentContainer}
				contentContainerStyle={styles.contentContainer}
			>
				<View allow="microphone; camera;">
					{/* <input ref={inputRef} type="text" /> */}
					<CameraInput />
				</View>
			</ScrollView>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	contentContainer: {
		paddingTop: 0
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50
	},
	homeScreenFilename: {
		marginVertical: 7
	},
	codeHighlightText: {
		color: 'rgba(96,100,109, 0.8)'
	},
	codeHighlightContainer: {
		backgroundColor: 'rgba(0,0,0,0.05)',
		borderRadius: 3,
		paddingHorizontal: 4
	},
	getStartedText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign: 'center'
	},
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3
			},
			android: {
				elevation: 20
			}
		}),
		alignItems: 'center',
		backgroundColor: '#fbfbfb',
		paddingVertical: 20
	},
	tabBarInfoText: {
		fontSize: 17,
		color: 'rgba(96,100,109, 1)',
		textAlign: 'center'
	},
	navigationFilename: {
		marginTop: 5
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},
	helpLink: {
		paddingVertical: 15
	}
});
