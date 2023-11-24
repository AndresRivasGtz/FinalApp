import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import logo from './assets/logo.jpg'

function Roles({navigation}) {
  return(
    <View style={styles.container}>
      <Image style={{}} source={logo}/>
      <Text style={{ fontWeight: 800, fontSize:50}}>
        ¡Bienvenido!
      </Text>
      <View>
        <Button
          title='Profesor'
          onPress={() => navigation.navigate("Teacher")}
        />
        <Button
          title='Estudiante'
          onPress={() => navigation.navigate("Student")}
        />
      </View>
      
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    title: {
      fontSize: 40,
      color: '#fff',
    },
});

export default Roles;