import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class ButtonSelector extends Component {
    state = {
        index: 0
    };

    updateIndex = (index) => {
        this.setState({ index });
        this.props.onSelect(index);
    };

    render() {
        return (
            <View style={styles.container}>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={this.state.index}
                    buttons={this.props.buttons}
                    textStyle={{ fontSize: 24 }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
