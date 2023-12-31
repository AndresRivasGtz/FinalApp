import getAlumnos from './getAlumnos';
import Card from './Card';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import bckgnd from './assets/abstract-shape(1).png';
import { BackgroundImage } from 'react-native-elements/dist/config';

const alumnos = [
    {
        name: 'Pete Saguy',
        categories: 'Electrónica',
        availability: '8:30 PM',
        distance: '3.7 km',
        image: require('./assets/pexels-stefan-stefancik-91227.jpg'),
        id: 1,
    },
    {
        name: 'Elmo Lesto',
        categories: 'Física',
        availability: '10:00 AM',
        distance: '4.1 km',
        image: require('./assets/pexels-ekaterina-belinskaya-4923049.jpg'),
        id: 2,
    },
    {
        name: 'Jannet Sui',
        categories: 'Contaduría',
        availability: '1:00 PM',
        distance: '3 km',
        image: require('./assets/pexels-moose-photos-556068.jpg'),
        id: 3,
    },
];

function Teacher({ navigation }){
    useEffect(() => {
        console.log(alumnos);
    }, []);

    const getAlumno = async () => {
        try {
          const response = await fetch('https://randomuser.me/api/');
          const json = await response.json();
          alumnos=json.results[0];
          console.log(alumnos);
        } catch (error){
          console.error(error);
        }
    }

    return(
        
        <View style= {styles.container}>
            <BackgroundImage source={bckgnd}  resizeMode='contain'>
            <FlatList
                data={alumnos}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Info", {nom: item.name, img: item.image, role: true})}>
                            <Card info={item}/>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(alumn) => alumn.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style='auto'/>
            </BackgroundImage>
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
        backgroundColor: '#DEE9F7',
    },
});

export default Teacher;