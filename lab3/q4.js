function mergeUserData(userDetails,userAddress,userPreferences){
    return{
        ...userDetails,
        ...userAddress,
        ...userPreferences
    }
}
const userDetails={
    name:"John",
    age:30
}
const userAddress={
    street:"123 Main St",
    city:"hightown",
}
const userPreferences={
    favoriteColor:"blue",
    language:"english"
}
const userData=mergeUserData(userDetails,userAddress,userPreferences)

console.log(userData)