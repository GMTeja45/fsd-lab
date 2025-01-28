const person={
    name:"John",
    address:{
        street:"123 Main St",
        city:"hightown",
    }
}
let {name, address:{street,city}}=person
console.log(name)
console.log(street)
console.log(city)
