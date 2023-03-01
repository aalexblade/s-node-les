// const Calc = require('calc-js').Calc;

// console.log(process.argv);
// const [, , a, b] = process.argv

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// ===============================================

// const path = require('path');

// console.log(path.resolve('dateUtils.js'));

// ===================================================

// const fs = require('fs');

// fs.readFile('./data.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.log(error);
//     };
//     console.log(data);
// });

// const fs = require('fs').promises;
// const path = require('path');

// (async () => {
//     try { 
//     const data = await fs.readFile('./data.txt', 'utf8')
//         console.log(data)

//         const newContent = `${data} school`
//         await fs.writeFile('./data1.txt', newContent, 'utf8');

//         // await fs.rename('./dataUtilsNewName.js', './tmp/dataUtilsNewName.js')

//         console.log(await fs.readdir('./tmp'));
//         await fs.unlink('tmp/dataUtilsNewName.js')

//     } catch (error) {
//         console.error(error)
//         }
// })();
