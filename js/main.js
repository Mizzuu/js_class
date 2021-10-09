const foodArr = [];

class Nutrient {
    constructor(food, carb, fat, protein) {
        this.food = food;
        this.carb = carb;
        this.fat = fat;
        this.protein = protein;
    }
}

function isEmpty(str) {
    return (!str || str.length === 0);
}

submit.addEventListener('click', () => {
    if (isEmpty(food.value) || isEmpty(carb.value) || isEmpty(fat.value) || isEmpty(protein.value)) {
        alert("All Input are mandatory! Food: " + food.value
            + " Carb: " + carb.value
            + " Fat: " + fat.value
            + " Protein: " + protein.value); return;
    }
    let nut1 = new Nutrient(food.value, carb.value, fat.value, protein.value);
    console.log(nut1);
    foodArr.push(nut1);
    console.log(foodArr);

    // CARB
    let carbLargest = 0;
    let carbMax;
    for (let i = 0; i < foodArr.length; i++) {
        let greatestCarb = parseInt(foodArr[i].carb);
        if (greatestCarb > carbLargest) {
            carbLargest = greatestCarb;
            carbMax = foodArr[i].food;
        }
    }
    console.log(carbLargest);
    console.log(carbMax);

    // FAT
    let fatLargest = 0;
    let fatMax;
    for (let i = 0; i < foodArr.length; i++) {
        let greatestFat = parseInt(foodArr[i].fat);
        if (greatestFat > fatLargest) {
            fatLargest = greatestFat;
            fatMax = foodArr[i].food;
        }
    }
    console.log(fatLargest);
    console.log(fatMax);

    // PROTEIN
    let proLargest = 0;
    let proMax;
    for (let i = 0; i < foodArr.length; i++) {
        if (foodArr[i].protein > proLargest) {
            let greatestPro = parseInt(foodArr[i].protein);
            proLargest = greatestPro;
            proMax = foodArr[i].food;
        }
    }
    console.log(proLargest);
    console.log(proMax);


    food.value = "";
    carb.value = "";
    fat.value = "";
    protein.value = "";
    food.focus();

    let foodList = "";
    for ( let i = 0; i < foodArr.length; i++) {
        foodList += foodArr[i].food + ", ";
    }
    among.innerHTML = `Among ${ foodList }...`;

    output.innerHTML = ` 
        ${carbMax} has highest carb<br>
        ${fatMax} has highest fat<br>
        ${proMax} has highest protein`

})

