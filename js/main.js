const foodArr = [];

class Nutrient {
    constructor( food, carb, fat, protein ){
        this.food = food;
        this.carb = carb;
        this.fat = fat;
        this.protein = protein;
    }
}

submit.addEventListener('click', () => {
    let nut1 = new Nutrient ( food.value, carb.value, fat.value, protein.value);
    console.log(nut1);
    foodArr.push(nut1);
    console.log(foodArr);

    food.value = "";
    carb.value = "";
    fat.value = "";
    protein.value = "";
})

// output.innerHTML = ;

