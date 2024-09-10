const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3L de água todos os dias.",
    checked: false
}

let metas = [ meta ]

const cadastrarMeta = async() => {
    const meta = await input({ message: "Digite a meta:"})

    if(meta.length == 0) {
        console.log("A meta não foi cadastrada pois se encontra vazia.")
        return
    }

    metas.push({ value: meta, checked: false })

}

const listarMetas = async() => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o Espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        choices: [...metas], // pega o que está na lista metas e joga aí como um novo array
        instructions: false,

})

    if(respostas.length == 0) {
        console.log("Nenhuma meta foi selecionada!")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })


    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("Meta(s) marcada(s) como concluída(s)!")

}


const start = async() => {

    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]

        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "sair":
                console.log("Até a próxima!")
                return

        }
    }
}

start()