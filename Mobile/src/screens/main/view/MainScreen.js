import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Expo from 'expo';
import { connect } from 'react-redux';
import { Screen } from '../../../components';
import Commons from '../../../assets/themes/Commons';
import { ADD_METERS } from '../../../actions/types';
import Utils from '../../../utilities/Utils';
import { LOCATION_TRACKING_INTERVAL } from '../../../constants';


@connect((store) => ({
    user: store.user,
}))
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCoords: null,
        };
    }

    componentDidMount = async () => {
        //todo create locationTrackerInterval only once when user is logged in.
        this.locationTrackerInterval = await setInterval(async () => {
            const oldCoords = this.state.currentCoords;
            const newCoords = await Expo.Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            if (oldCoords !== null) {
                this.props.dispatch({
                    type: ADD_METERS,
                    payload: Utils.measureDistance(oldCoords, newCoords)
                });
            }
            this.setState({ currentCoords: newCoords });
        }, LOCATION_TRACKING_INTERVAL);
    };

    componentWillUnmount() {
        clearInterval(this.locationTrackerInterval);
    }

    render() {
        return (
            <Screen title="Account">
                <View style={Commons.viewCenter}>
                    <Ionicons name="ios-contact" size={128} color="green" />
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons
                            name="ios-flag"
                            size={48}
                            color="red"
                            style={{ paddingHorizontal: 10 }}
                        />
                        <Text style={{ fontSize: 32 }}>{this.props.user.username}</Text>
                    </View>
                    <Text style={{ fontSize: 24 }}>#51</Text>
                    <View style={styles.distanceContainer}>
                        <Text style={{ fontSize: 32 }}>
                            {`Distance: ${this.props.user.distance} m`}
                        </Text>
                    </View>
                </View>
            </Screen>
        );
    }
}
const styles = StyleSheet.create({
    distanceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
