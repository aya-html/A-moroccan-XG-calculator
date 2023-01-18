// Attach event listener to form
document.getElementById("xg-form").addEventListener("submit", calculateXG);

function calculateXG(event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the data from the form inputs
    var locationX = document.getElementById("location_x").value;
    var locationY = document.getElementById("location_y").value;
    var bodyPart = document.getElementById("body_part").value;
    var assistType = document.getElementById("assist_type").value;

    // Process the data and calculate expected goals
    var expectedGoals = calculateExpectedGoals(locationX, locationY, bodyPart, assistType);
    console.log(expectedGoals);

    // Display the results
    var xgResult = document.getElementById("xg-result");
    xgResult.innerHTML = `Expected Goals: ${expectedGoals}`;
}



// Attach event listener to form
document.querySelector("#xg-form").addEventListener("submit", calculateXG);

function calculateXG(event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the data from the form inputs
    var locationX = document.querySelector("#location_x").value;
    var locationY = document.querySelector("#location_y").value;
    var bodyPart = document.querySelector("#body_part").value;
