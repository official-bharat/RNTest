import React from 'react';
import {View, Text} from 'react-native';
import codePush from 'react-native-code-push';
const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

const App = () => {
  React.useEffect(() => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Text style={{color: '#fff'}}>Hello World My Name is Bharat</Text>
    </View>
  );
};

export default codePush(codePushOptions)(App);
