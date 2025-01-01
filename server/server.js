import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import path from "path"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// Serve static files from the React app
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production")
    app.use(express.static(path.join(__dirname, "/server/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/server/client/dist/index.html"));
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
