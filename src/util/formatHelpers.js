const floatToStringBR = n => parseFloat(n).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default (value) => {
  if (typeof (value) === 'number') {
    return `R$ ${floatToStringBR(value)}`;
  }

  return `R$ ${value}`;
};
