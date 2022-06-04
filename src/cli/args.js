export const parseArgs = () => {
    // Write your code here
  let newArr = process.argv.reduce((prev, curr, currIndex) => {
    return currIndex > 1 ? prev + curr   + ' ' : '';
  }).split('--').filter((el) => el !== '');
  console.log(newArr);
  let result = newArr.reduce((prev, curr) => {
    curr.trim();
    let b = curr.split(' ');
    return `${prev.trim()}, ${b[0]} is ${b[1]}`;
  })
  console.log(result);

};

parseArgs();
