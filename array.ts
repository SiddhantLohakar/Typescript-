// There are different types to create array in typescript

// 1. Single datatype Array
    let Number:number[] = [1, 2, 3, 4, 5]

    // Number.push("pikachu") // error since "Number" accepts only numbers


// 2. Multiple Datatype Array
    let multiple: (string | number)[] = [12, "Siddhant", 45];
    // multiple.push(true) // Cant push a boolean value inside multiple it accepts only string and number


// 3. Tuple 
    let tuple:[number, string] = [12, "Pikachu"];
    tuple.push("Lost")



