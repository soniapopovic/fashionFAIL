//import React from 'react';

//materials that are labeled as synthetic
var synthetics = ["polyester", "nylon", "acrylic", "spandex", "rayon", "acetate"];


//materials that are made from animals
var animalMaterials = ["wool", "leather", "fur", "silk", "alpaca", "cashmere"];

//clothing items supported by the API
var items = ["jeans", "leggings", "shorts", "shirt", "sweater", "hoodie",
             "sweatshirt", "long-sleeve shirt", "winter jacket", "jacket"];

//the corresponding weights of the clothing items
var itemWeights = [1, .375, .55, .33, .77, .99, .88, .55, 1.98, 1.5];



//creates the output message describing the carbon footprint of the specific clothing and material 
function outputMesssages(input1) {

    //the input string of clothing type and fabric makeup
    var arr = input1.split(" ");

    var clothingType;
    var clothingTypeWeight;


    //checks whether the type of item is one that is supported by the API
    if(!items.includes(arr[0])) {
        var message = document.getElementById("message");
        message.innerHTML = "";

        //TODO something else prob goes here
        throw "is not supported by this app";

    } else {
        //sets the type of clothng and its weight
        clothingType = arr[0];
        var idx = items.indexOf(clothingType);
        clothingTypeWeight = items[idx];

        //removes the first element
        arr.shift();
    }


    var outputMessage;

    for (i = 0; i < arr.length; i++) {
        //checks whether the next element is a digit
        if (isNaN(arr[i])) {
            //TODO: check whether this is the correct thing to do!
            continue;
        } else {
            //check if it's included in the synthetic materials
            if (synthetics.includes(arr[i+1])) {
                if (arr[i+1] === "polyester") {
                    outputMessage.concat("Your " + clothingType + " released " + 15.5*clothingTypeWeight*arr[i] + "lbs of CO2 into the atmosphere.");
                } else if (arr[i+1] === "nylon") {

                    //TODO: maybe change this message so it isn't as vague.
                    outputMessage.concat("You have to keep this " + clothingType + " 62.5 times longer than linen fabric if you wanted to neutralize the carbon footprint choice of the nylon over time.");
                } else {
                    outputMessage.concat("Your " + clothingType + " is not biodegradable and relies on fossil fuel extraction.");
                }

                //check whether it's an animal product
            } else if (animalMaterials.includes(arr+1)) {
                if (arr[i+1] === "wool") {
                    outputMessage.concat("Your " + clothingType + " released " + 23.5*clothingTypeWeight*arr[i] + "lbs of CO2 into the atmosphere.");
                } else if (arr[i+1] === "leather") {
                    outputMessage.concat("Your " + clothingType + " was responsible for releasing 112kg of CO2 into the environment through its production.");
                } else {
                    outputMessage.concat("Your " + clothingType + " is responsible for a large amount of methane output.");

                }

                //check whether it's cotton
            } else if (arr[i+1] === "cotton") {
                var waterUsage = arr[i]*5000*clothingTypeWeight; 

               outputMessage.concat("Your " + clothingType + " used " + waterUsage + " liters of water in its production.\n");
               outputMessage.concat("That's enough water to last a person __" + " years.\n");
            


               //if it's not one of these types then it is not as bad for the environment!
            } else {
                outputMessage.concat("Your " + clothingType + " contributes a relatively small carbon footprint!");
            }
        }
    }

    return outputMessage;


}