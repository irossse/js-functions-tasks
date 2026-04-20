import _, { sortBy } from 'lodash';

// BEGIN
const takeOldest = (array, num = 1) =>{
    const newArray = _.sortBy(array, (a)=> Date.parse(a.birthday))
    return newArray.slice(0, num)

}

export default takeOldest

// END