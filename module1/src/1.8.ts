//destructuring
{
const user = {
    id: 345,
    name: {
        firstName: 'Sadia',
        middleName: 'Siddika',
        lastName: 'Prova'
    },
    contactNo: '01700000000',
    address: 'Uganda',
};

const {
    contactNo,
    name:{ middleName},
} = user;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'pihu'];

// const [a, b, c] = myFriends;
// const [,, c] = myFriends;
const [,, c, ...rest] = myFriends;

}