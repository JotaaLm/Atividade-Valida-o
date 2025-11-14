const assert = require('assert');
const { isPositive } = require('./validatePositiveAmount');

assert.strictEqual(isPositive(10), true);
assert.strictEqual(isPositive(0), false);

let negErr = null;
try { isPositive(-1); } catch (e) { negErr = e; }
assert.ok(negErr instanceof Error);
assert.strictEqual(negErr.message, 'Valor inválido');

const invalids = ['abc', true, null, undefined, NaN, Infinity, -Infinity, {}, []];
for (const v of invalids) {
  let err = null;
  try { isPositive(v); } catch (e) { err = e; }
  assert.ok(err instanceof Error);
  assert.strictEqual(err.message, 'A entrada deve ser um número');
}

console.log('Todos os testes passaram ✅');