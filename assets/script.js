// Selecting Elements
const popUp = document.querySelector('.popup')
const chartBars = document.querySelectorAll('.chart div')
const chartLabels = document.querySelectorAll('.labels span') 

// Calling the JSON file
fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        chartBars.forEach((bar, index) => {
            bar.addEventListener('mouseover', () => {
                showPopup(bar, data[index].amount);
            })

            bar.addEventListener('mouseout', () => {
                hidePopup();
            })
        });

        chartLabels.forEach((label, index) => {
            const day = data[index].day
            label.textContent = day
        })
    })
    .catch(error => {
        console.error("Couldn't reload the JSON file: ", error)
    });

// "hover" function
function showPopup(e, amount) {
    const popup = document.getElementById('popup');
    const barraRect = e.getBoundingClientRect();

    popup.style.display = 'block';
    popup.style.top = barraRect.top - 40 + 'px';
    popup.style.left = barraRect.left + 'px';
    popup.textContent = `$${amount}`;
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
