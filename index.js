const express = require('express')
const app = express();
const PORT = 4000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Interactive Website</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(to right, #00c6ff, #0072ff);
                color: white;
                text-align: center;
            }
            .container {
                margin-top: 100px;
            }
            input {
                padding: 10px;
                border-radius: 5px;
                border: none;
                width: 200px;
            }
            button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background: #ff9800;
                color: white;
                cursor: pointer;
                margin-left: 10px;
            }
            button:hover {
                background: #e68900;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🔥 Welcome to My Smart Website</h1>
            <p>Enter your name and see magic 👇</p>
            
            <form action="/greet" method="POST">
                <input type="text" name="username" placeholder="Enter your name" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    </body>
    </html>
    `);
});

// Handle Form Submission
app.post('/greet', (req, res) => {
    const name = req.body.username;

    res.send(`
    <html>
    <head>
        <title>Result</title>
        <style>
            body {
                font-family: Arial;
                background: #222;
                color: white;
                text-align: center;
                margin-top: 100px;
            }
            a {
                color: #00c6ff;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <h1>👋 Hello, ${name}!</h1>
        <p>Welcome to your dynamic website 🚀</p>
        <a href="/">⬅ Go Back</a>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});