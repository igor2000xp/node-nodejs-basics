export const parseArgs = () => {
    // Write your code here
  let newArr = process.argv.slice(2).join(' ')
    .split('--')
    .filter((el) => el !== '')
    .reduce((prev, curr) => {
      curr.trim();
      let b = curr.split(' ');
      return `${prev.trim()}, ${b[0]} is ${b[1]}`;
  });

  console.log(newArr);
};

parseArgs();
