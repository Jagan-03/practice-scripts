let createPizzaDough = () => {
    setTimeout(() => {
        rollPizzaBase();
    }, 2000);
    console.log("Pizza dough is ready");
}
let rollPizzaBase = () => {
    setTimeout(() => {
        addSauce();
    }, 1000);
    console.log("Pizza base is ready")
}
let addSauce = () => {
    setTimeout(() => {
        addToppings();
    }, 1000);
    console.log("Sauce added");
}
let addToppings = () => {
    setTimeout(() => {
        backPizza();
    }, 4000);
    console.log("Toppings added");
}
let backPizza = () => {
    console.log("Pizza is baked and Deleivered successfully");
}

setTimeout(() => {
    createPizzaDough();
}, 3000)

//Output

// Pizza dough is ready
// Pizza base is ready
// Sauce added
// Toppings added
// Pizza is baked and Deleivered successfully