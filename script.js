let btnCalcular = document.getElementById("button"),
    inputSalario = document.getElementById("salario"),
    output = document.getElementById("output"),
    salario = 0,
    INSS = [],
    IRRF = []

    
btnCalcular.addEventListener("click",() => calcular())

function calcular(){
  salario = +inputSalario.value
  INSS = calcularINSS(salario)
  console.log(INSS)
}

function calcularINSS(salario){
  let descontoINSS = 0,
      percent = 0
  descontoINSS += salario > 0 && salario <= 1100 ? salario * 0.075 : 1100 * 0.075
  descontoINSS += salario > 1100 && salario <= 2203.48 ? (salario-1100) * 0.09 : salario > 2203.48 ? (2203.48-1100) * 0.09 : 0
  descontoINSS += salario > 2203.48 && salario <= 3305.22 ? (salario-2203.48) * 0.12 : salario > 3305.22 ? (3305.22 - 2203.48) * 0.12 : 0
  descontoINSS += salario > 3305.22 && salario <= 6433.57 ? (salario-3305.22) * 0.14 : salario > 6433.57 ? (6433.57 - 3305.22) * 0.14 : 0
  descontoINSS = Math.round(descontoINSS*100)/100
  percent = Math.round(descontoINSS / salario * 10000)/100
  return [descontoINSS,percent]
  //output.innerHTML = "total:" + descontoInss + "=" + percent + "% do salario"
}

function calcularIRRF(salario, dependentes){
  let descontoIRRF = 0,
      percent = 0
  descontoIRRF += salario >= 1.903,99 && salario <= 2.826,65 ? salario * 0.075 : salario > 2.826,65 ? (2.826,65 - 1.903,99) * 0.075 : 0
  descontoIRRF += salario > 2.826,65 && salario <= 3.751,05 ? salario * 0.15 : salario > 3.751,05 ? (3.751,05 - 2.826,65) * 0.15 : 0
  descontoIRRF += salario > 3.751,05 && salario <= 3.751,05 ? salario * 0.15 : salario > 3.751,05 ? (3.751,05 - 2.826,65) * 0.15 : 0
}



