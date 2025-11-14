# Validação de Depósito — isPositive

ID: FIN-DEP-001  
Título: Validação de valores de depósito positivos antes da transação

## Visão Geral
Função para validar valores de depósito. Garante que só valores numéricos maiores que zero sejam aceitos antes de seguir com a transação.

## Regras de Validação
- Valor maior que zero → retorna `true`
- Valor igual a zero → retorna `false`
- Valor menor que zero → lança `Error('Valor inválido')`
- Entrada não numérica (`'abc'`, `true`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity`, objetos, arrays) → lança `Error('A entrada deve ser um número')`

Obs.: O critério 3 pedia “retornar false e lançar exceção” ao mesmo tempo. Optamos por lançar exceção (padrão mais seguro em fluxo financeiro). Se precisar alterar para apenas `false` nos negativos, é simples de ajustar.

## Assinatura
```js
function isPositive(value) => boolean | throws Error
```

## Uso
```js
const { isPositive } = require('./validatePositiveAmount');

try {
  if (isPositive(amount)) {
    // segue com depósito
  } else {
    // amount === 0, bloquear depósito
  }
} catch (e) {
  // tratar erro: 'Valor inválido' ou 'A entrada deve ser um número'
}
```

## Exemplos Rápidos
```js
isPositive(10);   // true
isPositive(0);    // false
isPositive(-5);   // Error('Valor inválido')
isPositive('10'); // Error('A entrada deve ser um número')
```

## Como Executar os Testes
- Ir para a pasta do projeto:
  - `cd "c:\Atividade- Validação"`
- Rodar os testes:
  - `npm run test`
  - Alternativa direta: `node validatePositiveAmount.test.js`
- Saída esperada:
  - `Todos os testes passaram ✅`

## Estrutura do Projeto