
//Declarando uma função
function calculaTabuada() {

    //Obtendo o DOM do tbody da tabela
    let tabuada = document.querySelector("#tabuada tbody");

    //Convertendo o valor do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteúdo do tbody
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {
        //Calculando o resultado da linha atual
        let resultado = valorA * valorB;

        //Criando o template da linha atual
        let template =
            `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        
            `;

        //Criando o elento tr
        let tr = document.createElement('tr');
        //Inserindo a coluna na linha
        tr.innerHTML = template;
        //Inserindo a linha na tabela
        tabuada.append(tr);

    }//Fechando a função 

}

//Chamando a nossa função pela primeira vez
calculaTabuada();

document.querySelector("#valorA").addEventListener('change', calculaTabuada );
//Adicionando evento de alteração ao campo novo