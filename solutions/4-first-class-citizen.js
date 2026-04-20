const run = (text) => {
    // BEGIN
    const takeLast = (str, number) =>{
      if (str.length<number){
        return null
      }
      let cout = 0
      let res = []
      let array = str.split('')
      for (let i = array.length-1 ; i>=0; i-=1){
        cout+=1
        if (cout<=number){
          res.push(array[i])
        }
        else{
          return res.join('')
        }
      }
        return res.join('')
      
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;