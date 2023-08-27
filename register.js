const registerEndpoint = 'http://gbaduqui.pythonanywhere.com/register?';

let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('pw');
let confirmPasswordInput = document.getElementById('confirm-pw');
let createButton = document.getElementById('create');

checkInputsPopulated = () => {
    let usernamePopulated = usernameInput.value.length > 0;
    let passwordPopulated = passwordInput.value.length > 0;
    let confirmPasswordPopulated = confirmPasswordInput.value.length > 0;

    if ((usernamePopulated) && (passwordPopulated) && (confirmPasswordPopulated) 
         && (passwordInput.value === confirmPasswordInput.value)) {
        createButton.style.visibility = 'visible';
        passwordInput.style.borderStyle = 'hidden';
        confirmPasswordInput.style.borderStyle = 'hidden';
    } else {
        createButton.style.visibility = 'hidden';
        passwordInput.style.borderColor = 'red';
        confirmPasswordInput.style.borderColor = 'red';
    }
}

usernameInput.addEventListener('input', () => {
    checkInputsPopulated();
});

passwordInput.addEventListener('input', () => {
    checkInputsPopulated();
});

confirmPasswordInput.addEventListener('input', () => {
    checkInputsPopulated();
});

createButton.addEventListener('click', () => {
    if ((usernamePopulated) && (passwordPopulated) &&(confirmPasswordInput) &&
        (passwordInput.value === confirmPasswordInput.value)) {
    
        const usernameValue = usernameInput.value;
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        const url = registerEndpoint + parameters;
        const newUser = {
            username: usernameValue,
            pw: passwordValue,
            confirm_pw: confirmPasswordValue
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => {
            if (!response.ok) {
                console.log(response.message);
            }
            return response.json();
        })
        .then(data => {
            console.log(response.message);
        })
        .catch(error => {
            console.log(error);
        });
    }
});


createButton.style.visibility = 'hidden';