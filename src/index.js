module.exports = function toReadable(num) {
  const a = [null,'one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  const b = [null, null, 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if (num === 0) {
    return 'zero';
  }
  if ((num = num.toString()).length > 3) return 'overflow';
  const n = ('000' + num).substr(-3).match(/^(\d{1})(\d{2})$/);
  if (!n) return;
  let str = '';
  str += (n[1] !== '0') ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'hundred ' : '';
  str += (n[2] !== '0') ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) : '';
  return str.replace(/null/g, '').trim();
}