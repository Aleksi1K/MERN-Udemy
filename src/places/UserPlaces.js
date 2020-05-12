import React from 'react';

import PlaceList from './PlaceList'
import { useParams } from 'react-router-dom';


const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Linnanmäki',
        description:'Huvipuisto',
        imageUrl:'https://images.unsplash.com/photo-1557195218-99ce512183c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        ,
        address:'Tivolikuja 1, 00510 Helsinki',
        location:{
            lat: 60.1881704,
            lng: 24.9382416
       
    },

    creator: 'u1'
},
    {
        id:'p2',
        title:'Linnanmäki',
        description:'Huvipuisto',
        imageUrl:'https://images.unsplash.com/photo-1557195218-99ce512183c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        ,
        address:'Tivolikuja 1, 00510 Helsinki',
        location:{
            lat: 60.1881704,
            lng: 24.9382416
        },

        creator: 'u2'
    }
]

const UserPlaces = () => { // vaan tietyn käyttäjän paikat useParamsilla pääsee käsiksi App.js  <Route path='/:userId/places' exact> esim.
     const userId = useParams().userId;
     const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />
}


export default UserPlaces;