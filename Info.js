import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import bckgnd from './assets/abstract-shape(2).png';
import pfp from './assets/icon.png';

function Info({ navigation, route }){
    const nom = 'peepeepoopoo';

    return(
        <ImageBackground source={bckgnd} resizeMode='contain' style={styles.image}>
            <View style={styles.container}>
            <Image style={styles.pfp}
                source={pfp}
            />
            <View style={styles.textos}>
            <Text>
                {'\nNombre:\n\t'}
                {route.params.nom}
            </Text>
            <Text>
                {'\nEmail:\n\tcorreo@mail.com'}
            </Text>
            <Text>
                {'\nTelefono:\n\t55-0000-1111'}
            </Text>
            <Text>
                {'\nNacimiento:\n\t08-03-2000'}
            </Text></View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
    },
    pfp: {
        height: 50,
        width: 50,
    },
    textos: {
        fontWeight: 24,
    },
});

export default Info;