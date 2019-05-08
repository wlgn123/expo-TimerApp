import React from 'react';
import PorpTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";

function Button({iconName, onPress}) {
	return(
		<TouchableOpacity onPressOut={onPress}>
			<FontAwesome name={iconName} size={80} color="white" />
		</TouchableOpacity>
	)
}

Button.PorpTypes = {
	iconName: PorpTypes.string.isRequired,
	onPress: PorpTypes.func.isRequired
}

export default Button