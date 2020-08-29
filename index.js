const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/peliculas') {
    fs.readFile('./assets/movies.json', 'utf-8', (err, data) => {
      res.end(data);
    });
  } else if (req.url === '/series') {
    fs.readFile('./assets/series.json', 'utf-8', (err, data) => {
      res.end(data);
    });
  } else {
    res.end('404');
  };
});

server.listen(8080, () => console.log('Listening on Port 8080'));