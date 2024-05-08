{


//spread operator
//rest operator
// destructuring



//learn spread operator

const bros1: string[] =[
    'Mir', 
    'Firoz', 
    'Mizan',
];
const bros2: string[] =['Tanmoy', 'Nahid', 'Rahat']

bros1.push(...bros2)

const mentors1 ={
    typescript: 'Mexba',
    redux: 'Mir',
    dbms: 'Mizan'
}
const mentors2 ={
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorList ={
    ...mentors1,
    ...mentors2
}
//Learn rest operator

const greetFriends = (friend1: string, friend2: string, friend3: string)=> {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
};


greetFriends('Abul', 'Kabul', 'Babul', 'ubul', 'chubul');



}