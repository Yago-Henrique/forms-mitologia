const mitologias = [
    {
        nome:"Zeus",
        mitologia:"Grega"
    },
    {
        nome:"Odin",
        mitologia:"Nórdica"
    },
    {
        nome:"Anúbis",
        mitologia:"Egípcia"
    }
]

const formulario = document.getElementById("formMitologia")
const campoNome = document.getElementById("nome")
const campoMitologia = document.getElementById("mitologia")
const corpoTabela = document.getElementById("corpoTabela")

function exibir(){
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < mitologias.length; posicao++){

        const item = mitologias[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${item.nome}</td>
                <td>${item.mitologia}</td>
            </tr>
       
        `
       
    }
}

exibir();

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const item = {
        nome: campoNome.value,
        mitologia: campoMitologia.value
    }

    mitologias.push(item)

    exibir()

} )