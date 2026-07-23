const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const rows = lines.slice(1); // başlıq sətrini (header) ötürürük

      const fields = {};
      const firstNames = {};

      rows.forEach((row) => {
        const [firstName, , , field] = row.split(',');
        if (!fields[field]) {
          fields[field] = 0;
          firstNames[field] = [];
        }
        fields[field] += 1;
        firstNames[field].push(firstName);
      });

      let output = `Number of students: ${rows.length}\n`;
      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field]}. List: ${firstNames[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((report) => {
        res.end(`This is the list of our students\n${report}`);
      })
      .catch((err) => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;