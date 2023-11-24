import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View, Image, Button, ImageBackground } from 'react-native';
import bckgnd from './assets/abstract-shape(2).png';

function Info({ navigation, route }){

    return(
        <ImageBackground source={bckgnd} resizeMode='contain' style={styles.image}>
            <View style={styles.container}>
                <View style={styles.containerInside}>
                    <Image style={[styles.pfp]}
                        source={route.params.img}
                    />
                    <Text style={styles.title}>
                        {route.params.nom}
                    </Text>
                </View>
                <View style={styles.containerInside2}>
                    
                    <View style={styles.pastilla}>
                        <Text style={{fontWeight: '800'}}>
                            {'\nEmail:\n\tcorreo@mail.com'}
                        </Text>
                    </View>
                    <View style={styles.pastilla}>
                        <Text style={{fontWeight: '800'}}>
                            {'\nTelefono:\n\t55-0000-1111'}
                        </Text>
                    </View>
                    <View style={styles.pastilla}>
                        <Text style={{fontWeight: '800'}}>
                            {'\nNacimiento:\n\t08-03-2000'}
                        </Text>
                    </View>
                    {route.params.role ?
                        <View style={styles.barra}>
                            <Button
                                title='Aceptar'
                                onPress={() => console.log('Aceptado')}
                                color='#69EB5D'
                            />
                            <Button
                                title='Ignorar'
                                onPress={() => console.log('Ignorado')}
                                color='#BFBEAE'
                            />
                        </View>
                    : 
                        <View>
                        </View>
                    }
                </View>
            </View>
        </ImageBackground>
    );
}
    const deviceWidth = Math.round(Dimensions.get('window').width);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        },
        
        containerInside: {
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerInside2: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        image: {
            flex: 1,
        },
        title: {
            fontSize: 30,
            color: '#6C7A93',
            fontWeight: "600",
            marginTop: 10,
            marginTop: 10,
        },
        pfp: {
            height: 250,
            width: 250,
            borderRadius: 125,
        },
        textos: {
            fontWeight: 24,
        },
        pastilla: {
            backgroundColor: "#FFF",
            width: deviceWidth - (deviceWidth/3),
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
        },
        barra: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        }
    });

export default Info;