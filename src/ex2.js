// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   Button,
//   Alert,
//   TouchableNativeFeedback,
// } from 'react-native';

// class Ex2 extends Component {
//   constructor() {
//     super();
//     //Array of Item to add
//     this.items = [
//       'Goa',
//       'Gujrat',
//       'Madhya Pradesh',
//       'Assam',
//       'Gujrat',
//       'Karnataka',
//       'Jharkhand',
//       'Himachal Pradesh',
//       'Manipur',
//       'Meghalaya',
//       'Mizoram',
//       'Uttarakhand',
//       'West Bengal',
//       'Tamil Nadu ',
//       'Punjab',
//       'Rajasthan',
//       'Bihar',
//       'Andhra Pradesh',
//       'Arunachal Pradesh',
//     ];
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView>
//           {/*Loop of JS which is like foreach loop*/}
//           {this.items.map((item, key) => (
//             //key is the index of the array
//             //item is the single item of the array
//             <View key={key} style={styles.item}>
//               <Text style={styles.text}>
//                 {key}. {item}
//               </Text>
//               <View style={styles.separator} />
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     flexDirection: 'row',
//   },
//   separator: {
//     height: 1,
//     backgroundColor: '#707080',
//     width: '100%',
//   },
//   text: {
//     fontSize: 16,
//     color: '#606070',
//     padding: 10,
//   },
// });

import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

// export default Ex2;
