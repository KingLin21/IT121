// Import the core HTTP module using ES6 import syntax
import http from 'http';

// Create the server using ES6 arrow function syntax
const server = http.createServer((req, res) => {
    // Convert the requested URL to lowercase for consistent routing
    const path = req.url.toLowerCase();
    
    // Use switch statement for routing as shown in the class notes
    switch(path) {
        case '/':
            // Home page route
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Welcome to the Home Page!\n\nThis is a simple Node.js web server created for learning purposes.');
            break;
            
        case '/about':
            // About page route
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About Me\n\nI am a student learning Node.js and web development. This is my first Node.js server!');
            break;
            
        default:
            // 404 route for any other path
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - Page Not Found\n\nThe requested page does not exist.');
            break;
    }
});

// Use ES6 template literal for port definition
const PORT = process.env.PORT || 3000;

// Start the server and listen on port 3000
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
