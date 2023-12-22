let email = "jao@hcode.com.br";

email = "glaucio@hcode.com.br"

console.log("O seu email é: " + email);
console.log(`O seu email é:  ${email}`);

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário!');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
        
    }

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log (jsonParse.password);


})
