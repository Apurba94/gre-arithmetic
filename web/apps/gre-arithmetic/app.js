/* Arithmetic Drill: fractions, percents and order of operations, generated with worked solutions. */
(function () {
  'use strict';
  const NAMES = SK.QUANT_TOPICS.arithmetic;
  const FACTS = [['1/2', '0.5', '50%'], ['1/3', '0.333…', '33⅓%'], ['1/4', '0.25', '25%'], ['1/5', '0.2', '20%'], ['1/6', '0.1666…', '16⅔%'], ['1/8', '0.125', '12.5%'], ['3/8', '0.375', '37.5%'], ['5/8', '0.625', '62.5%'], ['1/9', '0.111…', '11.1%'], ['1/12', '0.0833…', '8⅓%']];
  const App = {
    about: 'The arithmetic under most GRE questions: adding fractions, finding a percent of a number, percent change, and the order of operations. Questions are generated, each with a worked solution and the common wrong answers among the choices.',
    how: ['Start a set in **Practice**.', 'Memorize the fraction, decimal and percent equivalents in **Equivalents**: they save time on test day.', 'For percent change, always divide by the original value.'],
    tabs: [
      SK.quantTab('practice', 'Practice', NAMES),
      { id: 'eq', label: 'Equivalents', render(el) { el.appendChild(SK.card('Fractions, decimals and percents', SK.table(['Fraction', 'Decimal', 'Percent'], FACTS, false))); } },
    ],
    checks: {
      'generated sets are valid and every equivalent is right': (data, assert) => {
        for (let s = 1; s < 40; s++) for (const q of SK.makeQuant(NAMES, 10, s)) { assert.deepEqual(SK.validateItem(q), []); assert.ok(SK.isCorrect(q, q.answer)); }
        for (const [f, d] of FACTS) assert.ok(Math.abs(SK.Frac.parse(f).value() - parseFloat(d)) < 0.001, f);
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
