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
   color: "Blue",
   species: "Bluesy",
   price: 1.05
}

const bluesyid = (newId)
const bluesy.id = bluesyid
flowers.push(bluesy)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

