const flowers = [
   {

    id: 1,
    color: "White",
    species: "Rose",
    price: .90    
},
{
    id: 2,
    color: "Red",
    species: "Tulip",
    price: 1.10
}
]
const calcId = (arr) => {
    const lastIndex = arr.length - 1
    if (lastIndex === -1) {
        const newId = 1
        return newId
    }
    const lastItemId = arr[lastIndex].id
    const newId = lastItemId + 1
    return newId
}            
const addFlower = (flowerObject) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
}
const bluesy = {
    
    color: "Blue",
    species: "Bluesy",
    price: 1.05
}
const bluesyid = calcId(flowers)
bluesy.id = bluesyid
flowers.push(bluesy) 

console.log(flowers)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    
    for (const flower of flowers) {
        if (flower.price > 1) 
        expensiveFlowers.push(flower)
     
     }
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
           
    return expensiveFlowers  // Do not change this code
}

console.log(findExpensiveFlowers())



// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

// var currentdate = new Date();
// var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
//     + "/" + currentdate.getFullYear() + " @ "
//     + currentdate.getHours() + ":"
//     + currentdate.getMinutes();




  
