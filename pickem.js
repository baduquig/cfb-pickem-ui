const currentTimestamp = new Date();

// Instantiage All Data //
fetch('http://gbaduqui.pythonanywhere.com/alldata')
    .then(response => {
        if (!response.ok) {
            console.log('Error occurred while retrieving data');
        }
        return response.json();
    })
    .then(data => {
        const allData = data;
        console.log(allData);
    })
    .catch(error => {
        console.log(error);
    });