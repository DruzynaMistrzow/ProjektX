import React, { Component } from 'react';
import { MapView, Location } from 'expo';
import { Screen } from '../../../components';


export default class MapScreen extends Component {
    state = {
        mapRegion: null,
        locationResult: null,
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        const location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.01
            }
        });
    };

    render() {
        return (
            <Screen title="Map">
                {this.state.mapRegion &&
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.mapRegion}
                    showsUserLocation
                    provider="google"
                />}
            </Screen>

        );
    }
}
