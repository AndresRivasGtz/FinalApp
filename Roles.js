import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function Roles({navigation}) {
  return(
    <View style={styles.container}>
      <Text>
        ¡Bienvenido!
      </Text>

      <Button
        title='Profesor'
        onPress={() => navigation.navigate("Teacher")}
      />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 40,
      color: '#fff',
    },
});

export default Roles;

/*
      <Button
        title='Alumno'
        onPress={() => navigation.navigate("Student")}
      />
*/