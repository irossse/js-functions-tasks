import _ from 'lodash';

// BEGIN
 const average =(...elements) =>{
    if (elements.length === 0){
        return null
    }
    let cout = 0
    let sum =0 
    for (const element of elements){
        sum +=element
        cout+=1
    }

    return sum/cout
}

export default average
// END