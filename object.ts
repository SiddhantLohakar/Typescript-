// There are multiple ways to define Objects in typescript

// 1. Inline defination
    let obj1:{brand:string, price:number} ={
        brand : "PUMA",
        price : 20000
    }
    console.log(obj1);

// 2. Defigning first and then Assigning
    let pokemon:{name:string, type:string, level:number}

    pokemon = {
        name : "Pikachu",
        type : "electric",
        level : 2
    }
    console.log(pokemon)

// 3. Creating a type
    type employee = {
        name : string,
        id : number,
        age : number
    }

    let e1 : employee = {
        name : "Siddhant",
        id : 23001074,
        age : 32
    }

    console.log(e1);

// 4. Creating an interface
    interface animal {
        names: string[],
        favourite_food : string[]
    }

    let a1 : animal = {
        names: ["Tommy", "Doggy"],
        favourite_food: ["Pedigree", "Milk", "meat"]
    }

    console.log(a1);