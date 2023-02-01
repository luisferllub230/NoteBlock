import express  from "express";
import users from "./routes/users.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(users);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});