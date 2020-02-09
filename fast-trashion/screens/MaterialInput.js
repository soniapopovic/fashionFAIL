import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	TextInput,
	Text,
	Picker,
	Button
} from 'react-native';

export default function MaterialInputScreen() {
	var items = [
		'jeans',
		'leggings',
		'shorts',
		'shirt',
		'sweater',
		'hoodie',
		'sweatshirt',
		'long-sleeve shirt',
		'winter jacket',
		'jacket'
	];

	var materialItems = [
		'Polyester',
		'Cotton',
		'Nylon',
		'Acrylic',
		'Spandex',
		'Rayon',
		'Acetate',
		'Wool',
		'Leather',
		'Fur',
		'Silk',
		'Alpaca',
		'Cashmere'
	];

	const [item, setItem] = useState('shirt');
	const [percentages, setPercentages] = useState({ Wool: 0 });
	const [material, setMaterials] = useState(['Wool']);
	const [selectedMaterial, setSelectedMaterial] = useState('Polyester');

	return (
		<ScrollView style={styles.container}>
			<Picker
				selectedValue={item}
				style={styles.dropdown}
				onValueChange={itemValue => setItem(itemValue)}
			>
				{items.map(item => (
					<Picker.Item key={item} label={item} value={item} />
				))}
			</Picker>

			{material.map(mater => (
				<View style={styles.inputItem}>
					<TextInput
						style={styles.input}
						placeholder="%"
						onChangeText={text => {
							const newPercentages = {
								mater: Number(text),
								...percentages
							};
							setPercentages(newPercentages);
						}}
					/>
					<Text style={styles.inputItemLabel}>{mater}</Text>
				</View>
			))}

			<View style={styles.inputItem}>
				<Picker
					selectedValue={selectedMaterial}
					style={styles.dropdown}
					onValueChange={material => setSelectedMaterial(material)}
				>
					{materialItems.map(
						materialItem =>
							!material.includes(materialItem) && (
								<Picker.Item
									key={materialItem}
									label={materialItem}
									value={materialItem}
								/>
							)
					)}
				</Picker>
				<Button
					style={styles.addButton}
					title="Add"
					onPress={() => {
						setMaterials([...material, selectedMaterial]);
						const remaining = materialItems.filter(e => !material.includes(e));
						setSelectedMaterial(remaining[0]);
					}}
				/>
			</View>
			<Button style={styles.submitButton} title="Submit" onPress={{}} />
		</ScrollView>
	);
}

MaterialInputScreen.navigationOptions = {
	title: 'Material Inputs'
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		paddingHorizontal: 15,
		backgroundColor: '#E8FAFE'
	},
	dropdown: {
		paddingVertical: 10,
		paddingLeft: 10,
		marginVertical: 20,
		width: 200,
		borderRadius: 10
	},
	input: {
		height: 40,
		width: 75,
		borderColor: '#bebebe',
		borderWidth: 1,
		backgroundColor: 'white',
		borderRadius: 10,
		fontSize: 22,
		paddingLeft: 10
	},
	inputItem: {
		flexDirection: 'row',
		marginVertical: 5
	},
	inputItemLabel: {
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 22
	},
	addButton: {
		textAlignVertical: 'center',
		height: 10,
		width: 100
	}
});
