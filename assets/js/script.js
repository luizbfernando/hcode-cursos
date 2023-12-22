let email = "jao@hcode.com.br";

email = "glaucio@hcode.com.br"

console.log("O seu email é: " + email);
console.log(`O seu email é:  ${email}`);

document.querySelector('#form-login').addEventListener('submit', e => {
    console.log('Formulário enviado!');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
        
    }

    if(!json.email) {

        console.error("O campo e-mail deve ser preenchido");

    } else if (!json.password) {
        console.error("A senha deve ser preenchida");
    }


})
