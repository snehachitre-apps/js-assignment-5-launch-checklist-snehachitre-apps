// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();
    // console.log(listedPlanetsResponse);

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        let pickedPlanet = pickPlanet(listedPlanets);
        // console.log(pickedPlanet);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    })
    
    window.addEventListener("DOMContentLoaded", () => {
     console.log("DOM fully loaded and parsed");
   });
   
   let form = document.querySelector("form");
   
   form.addEventListener("submit", function(event) {
       

      let pilot = document.querySelector("input[name=pilotName]").value;
      console.log(pilot);
      let copilot = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;
      let list= document.getElementById("faultyItems");

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
     
    
    event.preventDefault();

   });

   
 });
 
 
     
         

 
 
 