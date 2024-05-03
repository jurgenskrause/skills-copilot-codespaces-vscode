// Create a web server
// Listen on port 3000
// Respond to the following URLs with the following responses:
// /cats -> "Meow"
// /dogs -> "Woof"
// /cats_and_dogs -> "Living together"

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/cats') {
		res.end('Meow');
	} else if (req.url === '/dogs') {
		res.end('Woof');
	} else if (req.url === '/cats_and_dogs') {
		res.end('Living together');
	} else {
		res.end('Unknown request');
	}
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});