const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors
const path = require("path");
const multer = require("multer");

const app = express();
const port = 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all origins

const JWT_SECRET = "your_jwt_secret_key"; // Change this in production\

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
});
const Report = mongoose.model("Report", reportSchema);
const prescribedMedicineSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  reportTitle: String,
  reportDescription: String,
  prescribedMedicines: [mongoose.Schema.Types.ObjectId],
});
const PrescribedMedicine = mongoose.model(
  "PrescribedMedicine",
  prescribedMedicineSchema
);
app.post("/prescribedMedicines", async (req, res) => {
  try {
    const { patientId, reportTitle, reportDescription, prescribedMedicines } =
      req.body;

    if (
      !patientId ||
      !reportTitle ||
      !reportDescription ||
      !prescribedMedicines
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newRecord = new PrescribedMedicine({
      patientId,
      reportTitle,
      reportDescription,
      prescribedMedicines,
    });

    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Report upload route
app.post("/reports", upload.single("image"), async (req, res) => {
  const { title } = req.body;
  const image = req.file ? req.file.filename : null;

  // Check if title is provided and image is uploaded
  if (!title || !image) {
    return res.status(400).json({ message: "Title and image are required" });
  }

  try {
    // Create a new report
    const newReport = new Report({
      title,
      image,
    });

    // Save the report to the database
    await newReport.save();

    // Respond with success
    res.status(201).json({
      message: "Report created successfully",
      report: newReport,
    });
  } catch (error) {
    console.error("Error creating report:", error);

    // Check if error is related to file storage or database issues
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: "Validation error", error });
    }

    res.status(500).json({ message: "Server error", error });
  }
});

// Fetch all reports
app.get("/reports", async (req, res) => {
  try {
    const reports = await Report.find();
    // Construct image URLs
    const reportsWithImageUrls = reports.map((report) => ({
      ...report._doc,
      imageUrl: `http://localhost:${port}/uploads/${report.image}`,
    }));
    res.status(200).json(reportsWithImageUrls);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// Doctor schema and model
const doctorSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
patientSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    return next();
  }
});
const Patient = mongoose.model("Patient", patientSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);

// Pharmacy schema and model
const PharmaSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const Pharma = mongoose.model("Pharmacy", PharmaSchema);

// Medicine schema and model
const AddmedicineSchema = new mongoose.Schema({
  name: String,
  quality: String,
  price: String,
});
const Addmedi = mongoose.model("Medicine", AddmedicineSchema);
// Booking schema and model
const bookingSchema = new mongoose.Schema({
  ambulance: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
  fare: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: "Unapproved" }, // Default status
});

const Booking = mongoose.model("Booking", bookingSchema);
// ({{

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       console.log("Password does not match");
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Create a JWT token
//     const token = jwt.sign({ email: user.email }, JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("Login successful. Token generated:", token);

//     res.json({ token });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// Express.js route for updating booking status
app.patch("/bookings/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!booking) {
      return res.status(404).send("Booking not found");
    }
    res.send(booking);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Doctor login route
app.post("/login-doctor", async (req, res) => {
  const { email, password } = req.body;

  // Debugging: Log the request body
  console.log("Received doctor login request:");
  console.log("Email:", email);
  console.log("Password:", password); // Be cautious logging passwords in production

  try {
    // Find the doctor
    const doctor = await Doctor.findOne({ email });
    if (!doctor) {
      console.log("Doctor not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ email: doctor.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful. Token generated:", token);

    res.json({ token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Doctor registration route
app.post("/register-doctor", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if doctor already exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the doctor
    await Doctor.create({ email, password: hashedPassword });

    res.status(201).json({ message: "Doctor registered successfully" });
  } catch (error) {
    console.error("Error registering doctor:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      "your_jwt_secret",
      {
        expiresIn: "1h", // Token expiration time
      }
    );

    res.status(200).json({
      message: "Login successful",
      token, // Include the token in the response if using JWT
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Pharmacy registration route
app.post("/register-pharma", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingPharma = await Pharma.findOne({ email });
    if (existingPharma) {
      return res.status(400).json({ message: "Pharmacy user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Pharma.create({ email, password: hashedPassword });

    res.status(201).json({ message: "Pharmacy registered successfully" });
  } catch (error) {
    console.error("Error registering pharmacy:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Pharma login route
app.post("/login-pharma", async (req, res) => {
  const { email, password } = req.body;

  // Debugging: Log the request body
  console.log("Received pharma login request:");
  console.log("Email:", email);
  console.log("Password:", password); // Be cautious logging passwords in production

  try {
    // Find the pharma
    const pharma = await Pharma.findOne({ email });
    if (!pharma) {
      console.log("Pharma not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, pharma.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ email: pharma.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful. Token generated:", token);

    res.json({ token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add medicine endpoint
app.post("/add-medicine", async (req, res) => {
  const { name, quality, price } = req.body;

  try {
    // Create a new medicine record
    const newMedicine = new Addmedi({ name, quality, price });
    await newMedicine.save();

    res
      .status(201)
      .json({ message: "Medicine added successfully", medicine: newMedicine });
  } catch (error) {
    console.error("Error adding medicine:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch all medicines
app.get("/add-medicine", async (req, res) => {
  try {
    const medicines = await Addmedi.find(); // Fetch all medicines from the database
    res.status(200).json(medicines); // Send the list of medicines as JSON
  } catch (error) {
    console.error("Error fetching medicines:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login-patient", async (req, res) => {
  const { email, password } = req.body;

  console.log("Received patient login request:");
  console.log("Email:", email);
  console.log("Password:", password);

  try {
    // Find the patient
    const patient = await Patient.findOne({ email });
    if (!patient) {
      console.log("Patient not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ email: patient.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful. Token generated:", token);

    res.json({ token });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Patient registration route
app.post("/register-patient", async (req, res) => {
  const { email, fullname, contact, password } = req.body;

  try {
    // Check if patient already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: "Patient already exists" });
    }

    // Create a new patient
    const patient = new Patient({
      email,
      fullname,
      contact,
      password,
    });

    await patient.save();

    res.status(201).json({ message: "Patient registered successfully" });
  } catch (error) {
    console.error("Error registering patient:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find(); // Fetch all patients
    res.status(200).json(patients); // Send patients as JSON
  } catch (error) {
    console.error("Error fetching patients:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// Save booking data
app.post("/book-ambulance", async (req, res) => {
  const { ambulance, phoneno, fare, location } = req.body;

  // Log the entire request body
  console.log("Received booking request:", req.body);

  // Check for missing required fields
  const missingFields = [];
  if (!ambulance) missingFields.push("ambulance");
  if (!phoneno) missingFields.push("phoneno");
  if (!fare) missingFields.push("fare");
  if (!location || !location.lat || !location.lng)
    missingFields.push("location (lat/lng)");

  if (missingFields.length > 0) {
    console.log("Missing required fields:", missingFields);
    return res.status(400).json({
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
  }

  try {
    // Create a new booking record
    const newBooking = new Booking({
      ambulance,
      phoneno,
      fare,
      location,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch all bookings
app.get("/bookings", async (req, res) => {
  try {
    // Fetch all bookings
    const bookings = await Booking.find();

    // Send the bookings as JSON response
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  try {
    await mongoose.connect(
      "mongodb+srv://adin:adin@health.jfvmz.mongodb.net/?retryWrites=true&w=majority&appName=health"
    );
    console.log("Database is connected");
  } catch (e) {
    console.log("Database connection error:", e);
  }
});
