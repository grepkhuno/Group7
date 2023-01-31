const mongoose = require('mongoose');
const dbname = "DevStaffingdb"
mongoose.connect(`mongodb://127.0.0.1/${dbname}`, {
<<<<<<< HEAD
	useNewUrlParser: true,
	useUnifiedTopology: true
})

	.then(() => console.log(`Connected to ${dbname} database!`))
	.catch((err) => console.log(err));
=======
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log(`Connected to ${dbname} database!`))
    .catch((err) => console.log(err));
>>>>>>> 1e90626c3bf68b8e1b98d14b0ba823674090407a
