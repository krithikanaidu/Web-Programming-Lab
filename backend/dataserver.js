const http = require("http");

//DEFINING THE HOSTNAME AND PORTNAME
const hostname = "127.0.0.1";
const port = 3000;

//ESTABLISHING A SERVER 
const server = http.createServer((req, res) => {

    //SERVER STATUS CODE
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/students") {

        res.statusCode = 200;
        res.end(JSON.stringify(students));

        const students = [
            { id: 1, name: "Rahul", course: "IT" },
            { id: 2, name: "Priya", course: "IT" },
            { id: 3, name: "Amit", course: "IT" },
            
        ];

        res.end(JSON.stringify(students));
    } else if (req.url.startsWith("/students/")){

        const id = parseInt(req.url.split("/")[2]);

        const student = students.find(s => s.id === id);

        if (student) {

            res.statusCode = 200;
            res.end(JSON.stringify(student));
            
        }

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

