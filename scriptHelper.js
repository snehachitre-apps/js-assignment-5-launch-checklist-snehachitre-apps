// Write your helper functions here!
// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    // Here is the HTML formatting for our mission target div.
//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

function validateInput(testInput) {
   
    if (testInput ==="")
        return "Empty";
    else if (isNaN(testInput))
       return "Not a Number";
    else 
       return "Is a Number";
    
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot.value)==="Empty" || validateInput(copilot.value)==="Empty" || validateInput(fuelLevel.value)==="Empty" || validateInput(cargoLevel.value)==="Empty" )
    {
      alert("All the fields are required");
    }
    else if (validateInput(pilot)==="Is a Number")
      {
          alert("Pilot name should be a valid string.");
      }
      else if (validateInput(copilot)==="Is a Number")
      {
          alert("Co-Pilot name should be a valid string.");
      }
      else if (validateInput(fuelLevel)==="Not a Number")
      {
          alert("Fuel value should be a valid number.");
      }
      else if (validateInput(cargoLevel)==="Not a Number")
      {
          alert("Cargo Mass value should be a valid number.");
      }
    
}

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch().then( function(response) {
//         });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

// module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
