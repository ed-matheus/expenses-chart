// Selecting Elements
const chartBars = document.querySelectorAll('.chart div')

// Calling the JSON file
fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        chartBars.forEach(div => {
            console.log(div)
            // div.addEventListener('mouseover', hiddenData())
        });
    })
    .catch(error => {
        console.error("Couldn't reload the JSON file: ", error)
    });

// "hover" function
/*
function hiddenData() {

}
*/