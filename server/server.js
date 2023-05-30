const express = require("express"); // * require ---> import
const app = express();
const port = 8000;

// ! make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/Faker.routes")(app);

// req is shorthand for request
// res is shorthand for response
// app.get("/api", (req, resp) => {
//     resp.json({ message: "Hello World" });
// });

// app.post("/api/postData", (req, resp) => {
//     console.log(req);
//     resp.json({ requestBody: req.body });
// });

// console.log("hi change");

// ! this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
