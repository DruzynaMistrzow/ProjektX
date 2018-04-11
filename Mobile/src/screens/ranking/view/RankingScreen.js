import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Screen } from '../../../components';
import ButtonSelector from '../../../components/ButtonSelector';

const list = [
    {
        name: 'Amy Farha',
        rank: '1',
        points: '4444',
    },
    {
        name: 'Chris Jackson',
        rank: '2',
        points: '1111'
    },
];

export default class RankingScreen extends Component {

    onSelect=(index) => {
        console.log(`wcisnieto ${index}`);
    };

    render() {
        return (
            <Screen title="Ranking">
                <ButtonSelector
                    buttons={['Day', 'Week', 'Month', 'All']}
                    onSelect={this.onSelect}
                />
                <ScrollView>
                {list.map((item, index) => (
                        <ListItem
                            key={index}
                            title={item.name}
                            titleProps={{ numberOfLines: 1 }}
                            titleStyle={styles.listItemText}
                            rightTitle={item.points}
                            leftIcon={<Text>{`#${item.rank}`}</Text>}
                            containerStyle={styles.listItemContainer}
                            dividerStyle
                            hideChevron
                        />
                ))}
                </ScrollView>
            </Screen>
        );
    }
}

const styles = StyleSheet.create({
    listItemContainer: {
        marginTop: 10,
        marginHorizontal: '5%',
        borderRadius: 20,
        backgroundColor: '#f3ee41',

    },
    listItemText: {
      fontSize: 18,
    },
});
