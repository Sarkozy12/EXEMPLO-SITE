alert("Cálculo de Aumento de Salário por Porcentagem")

let salario = Number(prompt("Digite o valor do salário: "))
let porc = Number(prompt("Digite a porcentagem de aumento (utilizando um número inteiro e sem o símbolo '%')"))

let salarioFinal = salario * (1+(porc/100))

document.write(salarioFinal)