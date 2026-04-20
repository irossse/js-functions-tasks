// BEGIN
const proverkaNumber = (number) => {
    let cout = 0
    for (let i = 1; i<=number; i+=1){
        if (number%i===0){
            cout +=1
        }
    }
    if (cout === 2){
        return true
    }
    else{
        return false
    }
    

}

const sayPrimeOrNot = (number) =>{
    
    if (proverkaNumber(number)===true){
        console.log('yes')
    }
    else{
        console.log('no')
    }
}

export default sayPrimeOrNot
// END