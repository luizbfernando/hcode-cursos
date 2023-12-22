let email = "jao@hcode.com.br";

email = "glaucio@hcode.com.br"

console.log("O seu email é: " + email);
console.log(`O seu email é:  ${email}`);

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário!');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    console.log('Formulário enviado, aqui vai o Ajax.');
})
