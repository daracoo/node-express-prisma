const express = require("express");
const app = express();
const PORT = 8383;

let data = ["james"];

//Middleware
app.use(express.json());

//Websites endpoint when user goes to certain url in the browser
app.get("/", (req, res) => {
  console.log("User requested the homepage website");
  res.send(`
            <body style="background: pink; color: blue;">
            <h1>Data</h1>
                <p>${JSON.stringify(data)}</p>
                <a href="/dashboard">Dashboard</a>    
            </body>
            <script>console.log("This is my script")</script>
        `);
});

app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href="/">Homepage</a>
    </body>
    `);
});

//API endpoint

//CRUD - create-post, read-get, update-put, delete-delete

app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("We deleted the element off the end of the array");
  res.sendStatus(203);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
