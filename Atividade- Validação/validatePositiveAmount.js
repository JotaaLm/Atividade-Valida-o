function isPositive(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error('A entrada deve ser um número');
  }
  if (value === 0) return false;
  if (value < 0) {
    throw new Error('Valor inválido');
  }
  return true;
}

module.exports = { isPositive };