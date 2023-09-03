const currentTimestamp = new Date();
const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
const allData = [];
const weekDropdown = document.getElementById('pickem-week');
const userDropdown = document.getElementById('pickem-user');
const gameWeeks = [];
const nextGameday = new Date('2023-08-26');
let currentWeek = 0;
let weekOptions = '';
let userOptions = '';

const setWeekdropdown = () => {
    // Set Week Dropdown //
    for (let i = 0; i < 15; i ++) {
        weekOptions += '<option value="' + i + '">' + i + '</option>';
    }
    weekDropdown.innerHTML = weekOptions;
    while (nextGameday < currentTimestamp) {
        nextGameday.setDate(nextGameday.getDate() + 7);
        currentWeek ++;
        weekDropdown.value = currentWeek;
    }
}

const setUserDropdown = () => {
    const distinctUsersSet = new Set();
    for (let j = 0; j < allData.length; j++) {
        distinctUsersSet.add({
            id: allData[j].userID,
            userName: allData[j].userName
        });
    }
    for (let user of distinctUsersSet) {
        userOptions += '<option value="' + user.id + '">' + user.userName + '</option>';
    }
    userDropdown.innerHTML = userOptions;    
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
        allData = data;
        /*******************
        const userPicks = allData.filter(pick => {
            return pick.userID == id
        });
        console.log(userPicks);
        /*******************/
        console.log(allData);
        setWeekdropdown();
        setUserDropdown();
    })
    .catch(error => {
        console.log(error);
    });

