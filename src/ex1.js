import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';

class Ex1 extends Component{
    render(){
        return ( 
            <View style={{flex: 1}}>
                <View style={{flex: 1.4, backgroundColor: 'powderblue', justifyContent: "flex-end", alignItems: "flex-end"}}>
                    <Text style={{fontSize:70}}>0</Text>
                </View>
                <View style={{flex: 1.2, flexDirection: 'row', backgroundColor: 'skyblue'}}>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={[styles.borders1,]}>
                            <Text style={styles.fontSizeText} 
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >Clear
                            </Text>

                        </View>

                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders3}>
                            <Text style={styles.fontSizeText}>/</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >1
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >2
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >3
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders3}>
                            <Text style={styles.fontSizeText}>-</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >4
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >5
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >6
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders3}>
                            <Text style={styles.fontSizeText}>+</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue', flexDirection: 'row'}}>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >7
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >8
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders2}>
                            <Text style={styles.fontSizeText}
                                onPress={() => Alert.alert('Simple Button pressed')}
                            >9
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={TouchableNativeFeedback.SelectableBackground()}>

                        <View style={styles.borders3}>
                            <Text style={styles.fontSizeText}>=</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    borders1: {
        flex: 3,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 0.5,
        justifyContent: "center", 
        alignItems: "center"
    },
    borders2: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 0.5,
        justifyContent: "center", 
        alignItems: "center"
    },
    borders3: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 0.5,
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: 'red'
    },
    fontSizeText: {
        fontSize:70,
    }
});

export default Ex1;
