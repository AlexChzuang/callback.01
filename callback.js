function afterOnes(food, callback, time){
  let superFood
  setTimeout(()=>{
    superFood = 'beef' + food
    callback(superFood)
  },time)
  return superFood
}

const myDinner = afterOnes('noodle', reciver, 3000)
afterOnes('rice', reciver, 1000)
console.log(myDinner)


function eat(food){
  console.log('eat ' + food)
}

function reciver(myFood){
  eat(myFood)
}