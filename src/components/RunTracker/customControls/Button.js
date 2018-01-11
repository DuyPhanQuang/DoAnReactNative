import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({
            content, style, onPress, disable
        }) => (
                <TouchableOpacity
                  disabled={disable}
                  style={[styles.container, style]}
                  onPress={onPress}
                >
                    <Text style={styles.content}>{content}</Text>
                </TouchableOpacity>
            );

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    content: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});

export default Button;
