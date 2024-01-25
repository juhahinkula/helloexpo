import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAdd = () => {
    setMessages([...messages, message]);
    setMessage('');
  }

  const itemSeparator = () => {
    return(<View style={{backgroundColor: 'black', height: 1}}></View>);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput 
          placeholder='Syötä tekstiä' 
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <Button title="Add Message" onPress={handleAdd} />
      </View>
      <View style = {{ flex: 7 }}>
        <FlatList 
          data={messages}
          ItemSeparatorComponent={itemSeparator}
          renderItem={({item}) => 
            <View style={styles.listItem}>
              <Text>{item}</Text>
            </View>
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    padding: 5,
    width: 300,
  }
});
