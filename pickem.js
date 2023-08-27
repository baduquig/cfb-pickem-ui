const currentTimestamp = new Date();
const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
const gameWeeks = [];
const firstGameday = new Date('2023-08-26');

for (i = 0; i < 16; i++) {
    //const nextDate = firstGameday + (7 * i);
    const nextDate = firstGameday.setDate(firstGameday.getDate() + (7 * i));
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