import role from "./Roles";
import Teacher from "./Teacher";
import Student from "./Student";
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
          options={{ 
            title: 'Roles',
            headerTransparent: true,
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Teacher"
          component={Teacher}
          options={{ 
            title: 'Profesor',
            headerTransparent: true,
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Student"
          component={Student}
          options={{ 
            title: 'Alumno',
            headerTransparent: true,
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Info"
          component={Info}
          options={{ 
            title: 'Contacto',
            headerTransparent: true,
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;