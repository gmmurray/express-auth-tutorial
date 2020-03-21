const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect to DB
mongoose.connect(
	process.env.ATLAS_URI, // Environment variable connection string
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to mongoDB');
	},
);

// JSON middleware
app.use(express.json());

// Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Route middleware
app.use('/api/users', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
