const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/text.txt','utf8')

writeFileSync('./content/result-sync.txt',
`Here is the result: ${first},
${second}`,{flag:'a'})

console.log('Done task');
console.log('Starting new  task');