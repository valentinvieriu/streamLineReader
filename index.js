const fs = require('fs');
const input = process.env.INPUT_FILE || 'input';
const lineReader = require('readline').createInterface({
  input: fs.createReadStream(`/data/${input}.json`)
});
const lineWriter = fs.createWriteStream(`/data/${input}.txt`, {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

lineReader.on('line', (line) => {
  // console.log('Line from file:', line);
  const jsonLine = JSON.parse(line);
  lineWriter.write(`${jsonLine.reviewText}\n`);
  // console.log(jsonLine.reviewText);
});
lineReader.on('close', () => {
  console.log('Finished Conversion');
  lineWriter.close();
})