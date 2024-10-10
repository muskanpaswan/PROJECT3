function InsertArray(array,variable){
    let newArray = [variable];
    for (let i =0; i<array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}
console.log(InsertArray([1,2,3,4,5],6))