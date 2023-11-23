export default function getAlumnos(){
    return [
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
            name: 'Super shy',
            categories: 'Contaduría',
            availability: '1:00 PM',
            distance: '3 km',
            image: require('./assets/pexels-moose-photos-556068.jpg'),
            id: 3,
          },
    ]
}