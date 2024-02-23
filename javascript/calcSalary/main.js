function calcSalary(){
    let salary= prompt("maasinizi daxil edin")
    let tax = prompt("vergi faizini daxil edin")
    let  result =  salary - salary*tax/100
    console.log(result)
    return result;
}

calcSalary()

