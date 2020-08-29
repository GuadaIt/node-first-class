const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/peliculas') {
    if (query.id === "1") {
      fs.readFile('./assets/singleMovie.json', 'utf-8', (err, data) => {
        res.end(data)
      })
    }
    fs.readFile('./assets/movies.json', 'utf-8', (err, data) => {
      res.end(data);
    });
  } else if (pathname === '/series') {
    fs.readFile('./assets/series.json', 'utf-8', (err, data) => {
      res.end(data);
    });
  } else {
    res.end('404');
  };
});

server.listen(8080, () => console.log('Listening on Port 8080'));