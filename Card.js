import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import IconLabel from './IconLabel';

const iconColor = '#6c5ce7';
const RestaurantCard = ({ info }) => {
  const { name, categories, availability, distance, image } = info;

  return (
    <View style={styles.container}>
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View style={styles.cardContainer}>
          <Image style={styles.imageStyle} source={image} />
          <View style={styles.infoStyle}>
            <Text style={styles.titleStyle} >{name}</Text>
            <Text style={styles.categoryStyle}>{categories}</Text>
            <View style={styles.iconLabelStyle}>
              <IconLabel name="ios-time" label={availability} color={iconColor} />
              <IconLabel name="ios-pin" label={distance} color={iconColor} />
            </View>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: radius,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#B9CAF0',
    height: 200,
    borderRadius: radius,
    elevation: 9,
  },
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 3,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 4,
  },
  topShadow: {
    shadowOffset:{
        width: -6,
        height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
    elevation: 3,
},
bottomShadow:{
    shadowOffset:{
        width: 6,
        height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
    elevation: 3,
},
});

export default RestaurantCard;

//onPress={() => navigation.navigate("Info")}
/*

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
*/