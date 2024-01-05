
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    // Write a for loop to iterate the flowers array. Within the for loop, write an if statement to push flowers less than $2 into the filteredFlowers array 
    for (const flower of flowers) {
        if (flower.price < 2.00) {
            filteredFlowers.push(flower)
        }
    }


    return filteredFlowers  // Do not modify
}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify
    /* Write a for loop to iterate the flowers array. Inside the for loop, use an if statement to check to see if the flower grows in zones 3 AND 8.
    If so, the flower will be pushed to filteredFlowers.*/
    for (const flower of flowers) {
      if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
        filteredFlowers.push(flower)
      }
    }
    




    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
     /* Write a for loop to iterate the flowers array. Write a nested for loop to iterate the colors array.
    Inside the nested loop, write an if statement that pushes flowers that come in the color Orange*/
    for (const flower of flowers) {
        for (const color of flower.colors) {
            if (color === "Orange") {
                filteredFlowers.push(flower)
            }
        } 
    }





    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/

/* Display flower name, all possible colors, and all USDA Zones of each flower in the provided format. All elements within the article tags are indented.
Since flowersHTMLString is defined with a let declaration, and all flowers will be listed, template literals will be added to flowersHTMLString. */
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    /* Create a for loop to iterate through the flowers array to retrieve each name, and in the same for loop, add to the opening article tag, start a new line, indent, and insert the name of the flower. Create two extra lines to fit the provided format.
    Within that for loop, create two nested loops for both colors and USDA Zones, as both are arrays. The h2 elements are stagnant, so a loop will not be needed to insert the attributes.
    For both of the loops, add to flowersHTMLString in the following format: <element>${keyvalue}</element>
    Outside of the nested for loop, add the closing tag of article to flowersHTMLString.
    Be sure to add \n where needed to fit the provided format!!!
    */
    for (const flower of flowers) {
        flowersHTMLString += `<article>\n  <h1>${flower.type}</h1>\n\n  <h2>Colors</h2>\n`
        for (const color of flower.colors) {
            flowersHTMLString += `  <section>${color}</section>\n`
        }
        flowersHTMLString += `\n  <h2>USDA Zones</h2>\n`
        for (const zone of flower.usdaZones) {
            flowersHTMLString += `  <div>${zone}</div>\n`
        }
        flowersHTMLString += `</article>\n\n`
    }

    return flowersHTMLString  // Do not modify
}

// console.log(flowersAsHTML())








































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

