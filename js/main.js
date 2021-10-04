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
    
    // CARB
    let carbLargest = 0;
    let carbMax;
    for(let i = 0; i < foodArr.length; i++) {
        if(foodArr[i].carb > carbLargest) {
            carbLargest = foodArr[i].carb;
            carbMax = foodArr[i].food;
        }
    }
    console.log(carbLargest);
    console.log(carbMax);

    // FAT
    let fatLargest = 0;
    let fatMax;
    for(let i = 0; i < foodArr.length; i++) {
        if(foodArr[i].fat > fatLargest) {
            fatLargest = foodArr[i].fat;
            fatMax = foodArr[i].food;
        }
    }
    console.log(fatLargest);
    console.log(fatMax);

    // PROTEIN
    let proLargest = 0;
    let proMax;
    for(let i = 0; i < foodArr.length; i++) {
        if(foodArr[i].protein > proLargest) {
            proLargest = foodArr[i].protein;
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

    output.innerHTML = ` 
        ${ carbMax } has highest carb<br>
        ${ fatMax } has highest fat<br>
        ${ proMax } has highest protein`
        
})

