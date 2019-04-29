const floatToStringBR = (n) => {
    return parseFloat(n).toLocaleString('pt-BR', {minimumFractionDigits: 2,maximumFractionDigits: 2})
}

export const currencyValue = (value) => {
    if(typeof(value) == "number") {
        return "R$ " + floatToStringBR(value)
    }

    return "R$ " + value
}
