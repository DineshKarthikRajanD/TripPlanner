import express from "express";
import cors from "cors";
import dbconnect from "./database/db.js";
import { coustmer_details, userData, userDelete, updateData } from "./controller/control.js";

const app = express();
const port = 5000;
dbconnect();

// Apply CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Ensure this is restricted in production
    methods: ["GET", "POST", "DELETE", "PUT"], // Allow necessary HTTP methods
    credentials: true, // Enable cookies if needed
  })
);

app.use(express.json()); // Parse JSON request bodies

// Define your API routes
app.post("/customer", coustmer_details);
app.get("/userdata", userData);
app.delete("/userDelete/:email", userDelete);
app.put("/userUpdate/:email", updateData);

// Start server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
