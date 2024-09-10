// arrays, objetos
let metas = ["mayk", "alô"]

console.log(metas[1] + ", " + metas[0])

// ---------------------------
let meta = {
    value: "ler um livro por mês",
    address: 2,
    checked: true,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.log(meta.value)
// console.log()
// meta.isChecked()

// function // arrow function
const criarMeta = () => {}

// named function
// function criarMeta() {}