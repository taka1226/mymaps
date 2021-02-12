import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },

    textInput: {
        flex: 3,
        backgroundColor: '#FFF',
        marginRight: 5
    },
    button: {
        flex: 1,
        backgroundColor: '#008080',
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '500',
    }
})

export default class TodoInput extends Component {
    
    render(){
        const {
            onPress,
        } = this.props;
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => onPress(text)}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>追加</Text>
                </TouchableOpacity>
            </View>
        )
    }
}