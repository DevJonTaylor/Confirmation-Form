export default function (money, negativeWrapping = true) {
  if (isNaN(money)) return '$0.00';

  let parsed = parseFloat(money);
  let negative = parsed < 0;
  let split = parsed.toFixed(2).split('.');

  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (negative && negativeWrapping)
    return `($${split.join('.')})`.replace('-', '');

  return `$${split.join('.')}`;
}
