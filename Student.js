import Card from './Card';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import bckgnd from './assets/abstract-shape.png';

const profes = [
    {
        name: 'José García',
        categories: 'Dr. Ciencias Religiosas',
        availability: '8:30 PM',
        distance: '3.7 km',
        image: require('./assets/prof1.png'),
        id: 1,
    },
    {
        name: 'Pedro Armendáriz',
        categories: 'Mtro. Inteligencia Artificial',
        availability: '10:00 AM',
        distance: '4.1 km',
        image: require('./assets/prof2.jpg'),
        id: 2,
    },
    {
        name: 'Arnol Schnitzel',
        categories: 'Prof. Aleman',
        availability: '1:00 PM',
        distance: '3 km',
        image: require('./assets/prof3.jpg'),
        id: 3,
    },
];

function Student({ navigation }){
    useEffect(() => {
        console.log(profes);
    }, []);

    const getProfe = async () => {
        try {
          const response = await fetch('https://randomuser.me/api/');
          const json = await response.json();
          profes=json.results[0];
          console.log(profes);
        } catch (error){
          console.error(error);
        }
    }

    return(
        <View style= {styles.container}>
            <ImageBackground source={bckgnd}  resizeMode='contain'>
                <FlatList
                    data={profes}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Info", {nom: item.name, img: item.image, role: false})}>
                                <Card info={item}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(prof) => prof.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <StatusBar style='auto'/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    image: {
        flex: 1,
    },
});

export default Student;