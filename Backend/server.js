const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const serviceRoutes = require("./routes/services");
const bookingRoutes = require("./routes/bookings");
const contactRoutes = require("./routes/contacts");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/services", serviceRoutes);
app.use("/bookings", bookingRoutes);
app.use("/contacts", contactRoutes);

app.get("/", (req, res) => {
    res.send("TechHive Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});