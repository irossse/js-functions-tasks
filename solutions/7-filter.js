// BEGIN
const getGirlFriends = (users) =>{
    const friend = (users.map((user)=>user.friends)).flat()
    const friengGirl = friend.filter((user)=>user.gender === 'female')
    return friengGirl
}

export default getGirlFriends
// END