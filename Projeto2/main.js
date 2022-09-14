const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';
const atividades = []; /*adicionar no array atividades digitadas*/
const notas = []; /*adicionar em array notas digitadas*/
//Estilização para usar na função atualizaMdiaFinal
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

/*variavel no escopo global para que não seja resetada quando submeter*/
let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

/*adicionar as funções dentro do addEventListenner mas criá-las fora dele*/
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

//Para validar se o nome da atividade já foi utilizado
//se o nome ja existir no array executar o código seguinte
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        /*adicionando(push) aos arrays(ativ. notas) o valor digitados nos campos(inputNomeAtividade.value)*/
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

// adicionar linha numa tabela por exemplo ====
/*criei variável para a linha adicionada e inseri a abertura da tag linha como valor*/
    let linha = '<tr>'; 
/*adicionei os valores das colunas */
    linha += `<td>${inputNomeAtividade.value}</td>`; 
    linha += `<td>${inputNotaAtividade.value}</td>`;
/*operador ternário com if e else se foi aprovado ou não */
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; 
    linha += `</tr>`;

    linhas += linha
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = ''; 
}

function atualizaTabela() {
 /*criar constante para adicionar a linha acima, no corpo da tabela, usar o querySelector porque tbody contem varias tags dentro innerHTML adiciona o comando no conteúdo */
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
//O Resultado da função calculaMediaFinal será o valor dessa função
    const mediaFinal = calculaMediaFinal()

//adicionar ao conteúdo HTML o resultado das função calculaMediaFinal que está atribuído à variavel mediaFinal
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
//na array começando no 0 até que i seja menor que a qantidade de notas incrementar 1 no i
    for(let i = 0; i < notas.length; i++){
    //soma das notas vai receber o valor dela mais a qtd de notas digitadas    
        somaDasNotas += notas[i];
    }
//O retorno será a soma das notas dividido pela qtd de notas digitadas
    const media = somaDasNotas / notas.length; 
    return somaDasNotas / notas.length
}

