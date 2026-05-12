const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const doctors = [
    {
        name: "Dr. Sharma",
        specialization: "Cardiologist",
        experience: "10 Years"
    },
    {
        name: "Dr. Mehta",
        specialization: "Neurologist",
        experience: "8 Years"
    },
    {
        name: "Dr. Khan",
        specialization: "Orthopedic",
        experience: "12 Years"
    }
];

let appointments = [];

function navbar() {
    return `
    <nav style="
        background:#0f172a;
        padding:18px;
        display:flex;
        justify-content:center;
        gap:25px;
        position:sticky;
        top:0;
    ">
        <a href="/" style="color:white;text-decoration:none;">Home</a>
        <a href="/dashboard" style="color:white;text-decoration:none;">Dashboard</a>
        <a href="/doctors" style="color:white;text-decoration:none;">Doctors</a>
        <a href="/appointment" style="color:white;text-decoration:none;">Appointment</a>
        <a href="/records" style="color:white;text-decoration:none;">Records</a>
        <a href="/login" style="color:white;text-decoration:none;">Login</a>
        <a href="/register" style="color:white;text-decoration:none;">Register</a>
        <a href="/contact" style="color:white;text-decoration:none;">Contact</a>
    </nav>
    `;
}

function footer() {
    return `
    <footer style="
        background:#0f172a;
        color:white;
        text-align:center;
        padding:20px;
        margin-top:40px;
    ">
        © 2026 Smart Health Management System
    </footer>
    `;
}

// HOME PAGE
app.get('/', (req, res) => {

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Health Management System</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#f1f5f9;
            }

            .hero{
                height:85vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                text-align:center;
                background:linear-gradient(to right,#2563eb,#06b6d4);
                color:white;
            }

            .hero h1{
                font-size:60px;
                margin-bottom:10px;
            }

            .hero p{
                font-size:22px;
            }

            .btn{
                padding:15px 30px;
                background:white;
                color:#2563eb;
                text-decoration:none;
                border-radius:10px;
                margin-top:20px;
                font-weight:bold;
            }

            .services{
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                gap:25px;
                padding:60px;
            }

            .card{
                background:white;
                width:280px;
                padding:30px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.1);
                text-align:center;
                transition:0.3s;
            }

            .card:hover{
                transform:translateY(-10px);
            }

            .card h2{
                color:#2563eb;
            }

        </style>
    </head>

    <body>

        ${navbar()}

        <section class="hero">

            <h1>🏥 Smart Healthcare</h1>

            <p>Professional Health Management System</p>

            <a class="btn" href="/appointment">Book Appointment</a>

        </section>

        <section class="services">

            <div class="card">
                <h2>👨‍⚕️ Expert Doctors</h2>
                <p>Consult experienced doctors online.</p>
            </div>

            <div class="card">
                <h2>📅 Appointments</h2>
                <p>Easy online appointment booking system.</p>
            </div>

            <div class="card">
                <h2>📋 Medical Records</h2>
                <p>Secure patient health records management.</p>
            </div>

        </section>

        ${footer()}

    </body>
    </html>
    `);
});

// REGISTER PAGE
app.get('/register', (req, res) => {

    res.send(`
    <html>
    <head>

        <title>Register</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#e2e8f0;
            }

            .container{
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            form{
                background:white;
                width:350px;
                padding:40px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.2);
            }

            h1{
                text-align:center;
                color:#2563eb;
            }

            input{
                width:100%;
                padding:12px;
                margin:10px 0;
                border-radius:8px;
                border:1px solid gray;
            }

            button{
                width:100%;
                padding:12px;
                background:#2563eb;
                color:white;
                border:none;
                border-radius:8px;
                cursor:pointer;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <form action="/register" method="POST">

                <h1>Patient Registration</h1>

                <input type="text" name="name" placeholder="Enter Name" required>

                <input type="email" name="email" placeholder="Enter Email" required>

                <input type="password" name="password" placeholder="Enter Password" required>

                <button type="submit">Register</button>

            </form>

        </div>

    </body>
    </html>
    `);
});

app.post('/register', (req, res) => {

    const { name } = req.body;

    res.send(`
        <h1 style="text-align:center;margin-top:100px;">
            ✅ Welcome ${name}
        </h1>
    `);
});

// LOGIN PAGE
app.get('/login', (req, res) => {

    res.send(`
    <html>
    <head>

        <title>Login</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#f8fafc;
            }

            .container{
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            form{
                background:white;
                width:350px;
                padding:40px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.2);
            }

            input{
                width:100%;
                padding:12px;
                margin:10px 0;
                border-radius:8px;
                border:1px solid gray;
            }

            button{
                width:100%;
                padding:12px;
                background:#0f172a;
                color:white;
                border:none;
                border-radius:8px;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <form action="/login" method="POST">

                <h1>🔐 Login</h1>

                <input type="email" name="email" placeholder="Email">

                <input type="password" name="password" placeholder="Password">

                <button type="submit">Login</button>

            </form>

        </div>

    </body>
    </html>
    `);
});

app.post('/login', (req, res) => {

    res.redirect('/dashboard');
});

// DASHBOARD
app.get('/dashboard', (req, res) => {

    res.send(`
    <html>
    <head>

        <title>Dashboard</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#f1f5f9;
            }

            .container{
                padding:40px;
            }

            .cards{
                display:flex;
                gap:25px;
                flex-wrap:wrap;
            }

            .card{
                background:white;
                padding:30px;
                width:250px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.1);
            }

            .card h1{
                color:#2563eb;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <h1>📊 Dashboard</h1>

            <div class="cards">

                <div class="card">
                    <h1>15</h1>
                    <p>Total Doctors</p>
                </div>

                <div class="card">
                    <h1>45</h1>
                    <p>Appointments</p>
                </div>

                <div class="card">
                    <h1>120</h1>
                    <p>Patients</p>
                </div>

            </div>

        </div>

    </body>
    </html>
    `);
});

// DOCTORS PAGE
app.get('/doctors', (req, res) => {

    let doctorCards = "";

    doctors.forEach(doc => {

        doctorCards += `
        <div class="card">

            <h2>${doc.name}</h2>

            <p>${doc.specialization}</p>

            <p>${doc.experience}</p>

        </div>
        `;
    });

    res.send(`
    <html>
    <head>

        <title>Doctors</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#e2e8f0;
            }

            .container{
                padding:40px;
            }

            .cards{
                display:flex;
                gap:25px;
                flex-wrap:wrap;
            }

            .card{
                background:white;
                width:250px;
                padding:25px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.1);
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <h1>👨‍⚕️ Our Doctors</h1>

            <div class="cards">

                ${doctorCards}

            </div>

        </div>

    </body>
    </html>
    `);
});

// APPOINTMENT PAGE
app.get('/appointment', (req, res) => {

    res.send(`
    <html>
    <head>

        <title>Appointment</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#f8fafc;
            }

            .container{
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            form{
                background:white;
                width:400px;
                padding:40px;
                border-radius:15px;
                box-shadow:0px 5px 15px rgba(0,0,0,0.1);
            }

            input,select{
                width:100%;
                padding:12px;
                margin:10px 0;
                border-radius:8px;
                border:1px solid gray;
            }

            button{
                width:100%;
                padding:12px;
                background:#2563eb;
                color:white;
                border:none;
                border-radius:8px;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <form action="/appointment" method="POST">

                <h1>📅 Book Appointment</h1>

                <input type="text" name="patient" placeholder="Patient Name" required>

                <select name="doctor">

                    <option>Dr. Sharma</option>
                    <option>Dr. Mehta</option>
                    <option>Dr. Khan</option>

                </select>

                <input type="date" name="date">

                <button type="submit">Book Appointment</button>

            </form>

        </div>

    </body>
    </html>
    `);
});

app.post('/appointment', (req, res) => {

    const { patient, doctor, date } = req.body;

    appointments.push({
        patient,
        doctor,
        date
    });

    res.send(`
    <html>
    <body style="
        font-family:Arial;
        text-align:center;
        margin-top:100px;
    ">

        <h1>✅ Appointment Confirmed</h1>

        <h2>${patient}</h2>

        <p>Doctor: ${doctor}</p>

        <p>Date: ${date}</p>

        <a href="/">Go Home</a>

    </body>
    </html>
    `);
});

// RECORDS PAGE
app.get('/records', (req, res) => {

    res.send(`
    <html>

    <head>

        <title>Records</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#f1f5f9;
            }

            table{
                width:80%;
                margin:auto;
                margin-top:50px;
                border-collapse:collapse;
                background:white;
            }

            th,td{
                padding:15px;
                border:1px solid gray;
                text-align:center;
            }

            th{
                background:#2563eb;
                color:white;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <h1 style="text-align:center;">📋 Medical Records</h1>

        <table>

            <tr>

                <th>Patient</th>

                <th>Doctor</th>

                <th>Status</th>

            </tr>

            <tr>

                <td>Suraj</td>

                <td>Dr. Sharma</td>

                <td>Healthy</td>

            </tr>

            <tr>

                <td>Rahul</td>

                <td>Dr. Mehta</td>

                <td>Recovering</td>

            </tr>

        </table>

    </body>

    </html>
    `);
});

// CONTACT PAGE
app.get('/contact', (req, res) => {

    res.send(`
    <html>

    <head>

        <title>Contact</title>

        <style>

            body{
                margin:0;
                font-family:Arial;
                background:#e2e8f0;
                text-align:center;
            }

            .container{
                margin-top:100px;
            }

            h1{
                color:#2563eb;
            }

        </style>

    </head>

    <body>

        ${navbar()}

        <div class="container">

            <h1>📞 Contact Us</h1>

            <h2>Email: support@healthcare.com</h2>

            <h2>Phone: +91 9876543210</h2>

            <h2>Emergency: 108</h2>

        </div>

    </body>

    </html>
    `);
});

// SERVER
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);
});