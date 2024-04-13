const vagas = []


function listarVagas() {
    if (vagas.length === 0) {
        alert(`Nenhuma vaga registrada!`)
        return
    }
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga,indice){
    textoFinal += indice + `.`
    textoFinal += vaga.nomeVaga
    textoFinal += ` (`+ vaga.candidatos.length + ` candidatos)\n`
        return textoFinal
    }, ``) // Começar por string

    alert(vagasEmTexto)
}

function criarVaga() {
    const nomeVaga = prompt(`Digite o nome da vaga`)
    const descricao = prompt (`Digite a descrição da vaga`)
    const dataLimite = prompt(`Digite a data Limite`)

    const confirmacao = confirm(`
    Deseja confirmar as informações?
    Nome da vaga: ${nomeVaga}
    Descrição: ${descricao}
    Data Limite: ${dataLimite}`)

    if (confirmacao) {
        const criarVaga = {
            nomeVaga: nomeVaga,
            descricao: descricao,
            dataLimite: dataLimite,
            candidatos: [],
            candidatosNome: []
        } // O programa precisa armazenar as informações da nova vaga de emprego fornecida pelo usuário de alguma forma
       // para que possa ser usado postariormente, como na listagem de vagas disponíveis, visualizações de uma vaga espe
        //cífica etc. Ao criar um objeto pra representar uma vaga de emprego, estamos organizando as informações de uma
        // forma estruturada e coesa, cada propriedade desse objeto corresponde a um aspectoe específico da vaga.
        vagas.push(criarVaga)
        alert(`Vaga criada com sucesso!`)
    } else {
        alert(`Informações descartadas`)
    }
}

function visualizarVaga() {
    const indice = parseInt(prompt(`Digite o índice da vaga`))
    const vaga = vagas[indice] // Víncular indice ao vaga
    if (isNaN(indice) || indice >= vagas.length || indice < 0 ) {
        alert(`Índice inválido`)
    } else {
        alert(`
        Esta é a vaga que você está visualizando:
        \n\nÍndice: ${indice}
        \nNome da vaga: ${vaga.nomeVaga}
        \nDescrição: ${vaga.descricao}
        \nData Limite: ${vaga.dataLimite}
        \nQuantidade de candidatos: ${vaga.candidatos}
        \nNome dos candidatos: ${vaga.candidatosNome}`)
    }
}

function inscreverCandidato() {
    const pedirNome = prompt(`Digite o nome do candidato`)
    const indice = parseInt(prompt(`Digite o índice da vaga`))
    if (isNaN(indice) || indice < 0 || indice >= vagas.length) {
        alert(`Índice inválido`);
        return;
    }
    const vaga = vagas[indice]

    const confirmacao = confirm(
        `Deseja cadastrar o candidato?
        \n\nÍndice da vaga: ${indice}
        \nNome do candidato: ${pedirNome}
        \nVaga: ${vaga.nomeVaga}`)

    if (confirmacao) {
        vaga.candidatos.push(pedirNome)
        alert(`Candidato cadastrado com sucesso!`)
    } else {
        alert(`Informações descartadas!`)
    }
}

function removerVaga() {
    const indice = parseInt(prompt(`Digite o índice da vaga que deseja excluir`))
    const vaga = vagas[indice]
    const confirmacao = confirm(`Essas são as informações das vagas:\n\n
    Índice: ${indice}
    \nNome da vaga: ${vaga.nomeVaga}
    \nDescrição: ${vaga.descricao}
    \nData Limite: ${vaga.dataLimite}
    \n\nDeseja excluir a vaga?`)

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert(`Vaga excluída com sucesso!`)
    } else {
        alert(`Informações descartadas!`)
    }
}

function exibirMenu() {
    const opcao = parseInt(prompt(`Digite uma das opções: \n\n1. Listar vagas\n2. Criar vagas\n3. Visualizar vaga
4. Inscrever candidato\n5. Remover vaga\n6. Sair `))

    return opcao
}

function executar() {
   let opcao = ``

    do {
        opcao = exibirMenu()


        switch (opcao) {
            case 1:
                listarVagas()
                break
            case 2:
                criarVaga()
                break
            case 3:
                visualizarVaga()
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                removerVaga()
                break
            case 6:
                alert(`Saindo...`)
                break
            default:
                alert(`Caractér inválido`)
        }

    } while (opcao !== 6)
}

executar()




