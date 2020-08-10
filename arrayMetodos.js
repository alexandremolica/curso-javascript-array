const pilotos = ['vetel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() //remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('verstappen')// adiciona na ultima posicao
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('hamilton') //inclui como primeiro elemento
console.log(pilotos)

//splice pode adicionar e remover na lista
//adiciona
pilotos.splice(2,0,'bottas', 'massa') //adiciona dois elementos a partir do indice 2
console.log(pilotos)
//remove
pilotos.splice(3,1) //remove 1 elemento partindo do indice tres
console.log(pilotos)

//novo array
const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
