import role from "./Roles";
import Teacher from "./Teacher";
import Info from "./Info";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Roles"
          component={role}
        />
        <Stack.Screen
          name="Teacher"
          component={Teacher}
          options={{ title: 'Profesor'}}
        />
        <Stack.Screen
          name="Info"
          component={Info}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
/*

        <Stack.Screen
          name="Student"
          component={Student}
          options={{ title: 'Alumno'}}
        />
        
*/