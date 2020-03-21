// import mongoose from mongoose package assign to variable mongoose
const mongoose = require('mongoose');
// connect to mongodb database
// mongoose.connect('mongodb://localhost/user_test'); deprecated
mongoose.connect('mongodb://localhost/user_test', {useNewUrlParser: true});
// let's mongoose say something when something happen
mongoose.connection
.once('open', () => console.log('Good to go!'))
.on('error', (error) => {
	console.warn('Warning',error);
});