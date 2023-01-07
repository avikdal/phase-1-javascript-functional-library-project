function myEach(collection, callback){
    // Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection.
        if(Array.isArray(collection)){
            for(let i=0; i < collection.length; i++){
                callback(collection[i])
            }
        } else {
            let array = Object.values(collection)
            for(let i=0; i< array.length; i++){
                callback(array[i])
            }
        }
        return collection

}

function myMap(collection, callback){
    // Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
    let newCollection = []
    if(Array.isArray(collection)){
        for(let i=0; i < collection.length; i++){
            newCollection.push(callback(collection[i]))
        }
    } else {
        let array = Object.values(collection)
        for(let i=0; i< array.length; i++){
            newCollection.push(callback(array[i]))
        }
    }
    return newCollection
}

function myReduce(collection, callback, acc){
    console.log("this is first collection0", collection[0])
   
    if(collection instanceof Array){
        if(!acc){
            console.log("this is acc", acc)
            console.log("this is second collection 0", collection[0])
            acc = collection[0]
            console.log("this is second acc", acc)

            collection.slice(1)
        }
        for(let i = 0; i < collection.length; i++){
            acc = callback(acc, collection[i], collection)
        }
        return acc
    } else {
        let array = Object.values(collection)
        if(!acc){
            acc = array[0]
            array.slice(1)
        }
        for(let i = 0; i < array.length; i++){
            acc = callback(acc, array[i], array)
        }
        return acc
    }
    
}

function myFind(collection, predicate){
    // Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.
    console.log(collection)
    // console.log(predicate)
    let test = undefined
    // how do i change this if I have a matching value?
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(predicate === collection[i]){
                test = collection[i]
            }
        }
        return test 
    } else {
        let array = Object.values(collection)
        for(let i = 0; i < array.length; i++){
            if(predicate === collection[i]){
                test = collection[i]
            }
        }
        return test
    }
}
