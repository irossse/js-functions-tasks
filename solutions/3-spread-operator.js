// BEGIN
const convert = (...array) =>{
    let res = []
    for (let i =0; i<array.length; i+=1){
        let date = new Date(array[i][0], array[i][1], array[i][2])
        res.push(date.toDateString())
    }
    return res
}

export default convert
// END