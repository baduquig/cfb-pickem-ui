const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('pw');
const signinButton = document.getElementById('sign-in');
const usernamePopulated = usernameInput.value.trim() !== '';
const passwordPopulated = passwordInput.value.trim() !== '';
const registerLink = document.getElementById('login-new-user');
const loginEndpoint = 'http://gbaduqui.pythonanywhere.com/validate?';

usernameInput.addEventListener('input', () => {
    if ((usernamePopulated) && (passwordPopulated)) {
        signinButton.style.display = 'block';
    } else {
        signinButton.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    if ((usernamePopulated) && (passwordPopulated)) {
        signinButton.style.display = 'block';
    } else {
        signinButton.style.display = 'none';
    }
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

signinButton.style.display = 'none';