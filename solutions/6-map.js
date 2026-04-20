// BEGIN
const getChildren = (array) =>{
    const children = array.map((user) => user.children)
    return children.flat()
}
// END

export default getChildren