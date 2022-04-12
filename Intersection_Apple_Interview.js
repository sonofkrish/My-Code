const a = [1, 2, 3, 2, 3, 3, 4, 6, 89];
const b = [3, 6, 78, 2, 1, 2, 6];
// output: 1,2,2,3,6

const intersection = (a, b) =>
  a
    .reduce((acc, val) => {
      const i = b.indexOf(val);
      if (i !== -1) {
        acc.push(val);
        b.splice(i, 1);
      }
      return acc;
    }, [])
    .sort((a, b) => a - b);

const result = a.length > b.length ? intersection(a, b) : intersection(b, a);
