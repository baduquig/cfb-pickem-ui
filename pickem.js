const currentTimestamp = new Date();
const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
const weekDropdown = document.getElementById('pickem-week');
const gameWeeks = [];
const nextGameday = new Date('2023-08-26');
let currentWeek = 0;
let weekOptions = '';

const setWeekdropdown = () => {
    // Set Week Dropdown //
    for (i = 0; i < 15; i ++) {
        weekOptions += '<option value="' + i + '">' + i + '</option>';
    }
    weekDropdown.innerHTML = weekOptions;
    while (nextGameday < currentTimestamp) {
        nextGameday.setDate(nextGameday.getDate() + 7);
        currentWeek ++;
        weekDropdown.value = currentWeek;
    }
}

// Instantiage All Data //
fetch('http://gbaduqui.pythonanywhere.com/alldata')
    .then(response => {
        if (!response.ok) {
            console.log('Error occurred while retrieving data');
        }
        return response.json();
    })
    .then(data => {
        /*******************/
        const allData = data;
        const userPicks = allData.filter(pick => {
            return pick.userID == id
        });
        /*******************/
        console.log(allData);
        console.log(userPicks);
    })
    .catch(error => {
        console.log(error);
    });

// Set Week Dropdown //
setWeekdropdown();