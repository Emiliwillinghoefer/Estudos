let listaFuncionarios = ['José', 'Ana', 'Luiza']
let listaIdades = [22,19,33]
//função nativa slice:

const listaDeNomes = ['Emili', 'Angelo', 'Murilo', 'Zeli', 'Sandro','Blue']

const corte = listaDeNomes.slice(1,listaDeNomes.length/2)

console.log(`Lista de nomes: ${corte}`)

//Length pega o tamanho da nossa lista, sempre um numero.
// Slice corta/ divide nossa lista.
/*------------------------------------------------------------------ */
// FUNÇÃO SPLICE

const listagem = ['a', 'b', 'c', 'd', 'e', 'f']

listagem.splice(3,0,'ab') // colocar o AB entre as letras a e b

// Formado por 3 parametros, o primeiro onde vou inserir, o segundo segundo caso que
//queira substituir algo e o terceiro é o que está acrescentando dentro do array


console.log(listagem)