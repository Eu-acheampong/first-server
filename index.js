// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello, World!</h1>");
// });

// app.get("/greet", (req, res) => {
//     res.send("<h1>Hello, Everyone!!!</h1>");
// });

// app.listen(4000, () => {
//   console.log("🚀server running on PORT 4000");
// });


const express = require("express");

const app = express ();

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
});

app.listen(5000, () => {
    console.log("🚀 server running on PORT 5000")
});

