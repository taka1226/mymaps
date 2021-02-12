// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// import React, { Component } from 'react';
// import {
//   FlatList,
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import TodoInput from './src/component/TodoInput';
// import TodoItem from './src/component/TodoItem';

// export default class App extends Component<{}> {
//   constructor(props){
//     super(props);

//     this.state = {
//       list: [],
//     };
//   }
//   onPress = (text) => {
//     const list = [].concat(this.state.list);
//     list.push({
//       key: Date.now(),
//       text:text,
//       done: false,
//     });

//     this.setState({
//       list,
//     });
//   }
//   render(){
//     const {
//       list,
//     } = this.state;
//     return (
//       <View style={styles.container}>
//         <View style={styles.main}>
//           <TodoInput onPress={this.onPress}/>
//           <View style={styles.todoListContainer}>
//             <FlatList
//               style={styles.todoList}
//               data={list}
//               renderItem={({item}) => <TodoItem {...item} />}
//             />
//           </View>
//         </View>
//       </View>
//     )
//   }
// }

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#333'
//   },
//   main: {
//     flex: 1,
//     maxWidth: 400,
//     alignItems: 'center',
//   }
// })
