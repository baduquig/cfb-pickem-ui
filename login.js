const registerLink = document.getElementById('login-new-user');
const loginEndpoint = 'http://gbaduqui.pythonanywhere.com/validate?';

let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('pw');
let signinButton = document.getElementById('sign-in');

checkInputsPopulated = () => {
    let usernamePopulated = usernameInput.value.length > 0;
    let passwordPopulated = passwordInput.value.length > 0;

    if ((usernamePopulated) && (passwordPopulated)) {
        signinButton.style.visibility = 'visible';
    } else {
        signinButton.style.visibility = 'hidden';
    }
}

usernameInput.addEventListener('input', () => {
    checkInputsPopulated();
});

passwordInput.addEventListener('input', () => {
    checkInputsPopulated();
});

signinButton.addEventListener('click', () => {
    if ((usernamePopulated) && (passwordPopulated)) {
        const userID = '';
        const parameters = `username=${usernameInput.value}&pw=${passwordInput.value}`
        const url = loginEndpoint + parameters;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(response.message);
                }
                return response.json();
            })
            .then(data => {
                console.log(response.message);
                userID = data[0];
            })
            .catch(error => {
                console.log(error);
            });
    }    
});

signinButton.style.visibility = 'hidden';