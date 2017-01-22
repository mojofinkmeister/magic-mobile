import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native'
import Button from './playerButton.js'

import Icon from 'react-native-vector-icons/FontAwesome';
import FounIcon from 'react-native-vector-icons/Foundation';


export default class Hold extends Component {



    render() {
        let playerButtons = () => {
            let allPlayers = this.props.data.map((_player, index) => {
                return (
                    <Button onSelectPlayer={this.props.onSelectPlayer} data={this.props.data} key={index} id={index} player={_player} />
                )
            })
            return allPlayers;
        }
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={styles.playerContainer}>
                    <ScrollView horizontal={true}>
                        {playerButtons()}
                    </ScrollView>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    playerContainer: {
        flex: 1.75,
        backgroundColor: '#757474',
        flexDirection: 'row',
    },
});