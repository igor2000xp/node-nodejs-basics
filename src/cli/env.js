export const parseEnv = () => {
  // Write your code here
  // process.env['RSS_name1'] = 'value1';
  // process.env['RSS_name2'] = 'value2';

  let rssArrayOfObjects = Object.entries(process.env);
  rssArrayOfObjects = rssArrayOfObjects.filter((el) => {
    return el[0].indexOf('RSS_') + 1 > 0;
  });
  let rssString = [];
  rssArrayOfObjects.forEach((el) => {
    rssString.push(`${el[0]}=${el[1]}`);
  });
  rssString = rssString.join('; ')
  console.log(rssString);
};

// RSS_name1=value1 RSS_name2=value2 node ./src/cli/env.js

parseEnv();
