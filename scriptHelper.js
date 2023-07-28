// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    // Here is the HTML formatting for our mission target div.

    let missionTarget= document.getElementById("missionTarget");    
    
    missionTarget.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
   
    if (testInput ==="")
        return "Empty";
    else if (isNaN(testInput))
       return "Not a Number";
    else 
       return "Is a Number";
    
    
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    

    if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty" )
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
      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("cdtus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus= document.getElementById("launchStatus");

      console.log(pilotStatus.innerHTML);
      console.log(launchStatus.innerHTML);

      pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
      console.log(pilotStatus.innerHTML);

      if (fuelLevel > 10000 && cargoLevel < 10000)
      {
          list.style.visibility = 'visible';
          fuelStatus.innerHTML = `Fuel level high enough for launch`;
          cargoStatus.innerHTML = `Cargo mass low enough for launch`;
          launchStatus.innerHTML=`Shuttle is Ready for Launch`;
          launchStatus.style.color="rgb(65, 159, 106)";
      }

      if (fuelLevel <= 10000)
        {
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML =`Cargo mass low enough for launch`;
            launchStatus.innerHTML=`Shuttle not ready for launch`;
            launchStatus.style.color="red";
        }
        if (cargoLevel >= 10000)
        {
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
            launchStatus.innerHTML=`Shuttle not ready for launch`;
            launchStatus.style.color="#C7254E";
        }
     
        



}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            
    
        return response.json();
        

     });
     

    return planetsReturned;
}

function pickPlanet(planets) {
    let index= Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
