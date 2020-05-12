import React from 'react';
import UsersList from './UsersList';

const Users = () => {
    const USERS = [{id: 'u1',
    name: 'Aleksi Merilahti',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT40NGsjUS4PhAKja7UAYMb5Z2jAaQ5nU_eB1cN8zP7ZOy4LgaM',
    places: 3
}
];

return <UsersList items={USERS} />
};


export default Users;