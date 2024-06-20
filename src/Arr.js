const arr = [];
function newArr() {
    arr.length = 0;
    const arrSize = 20 + Math.floor(Math.random()*80);


    for(var i=0; i<arrSize; i++) {
        arr.push(Math.floor(Math.random()*500));
    }
    console.log(arr);
    return arr;
}
newArr();

export default arr;
export {newArr};