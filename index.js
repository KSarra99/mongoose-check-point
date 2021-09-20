const mongoose = require('mongoose');
require('dotenv').config();
const { arrayOfPeople } = require('./arrayofPeople')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = mongoose.Schema({
    name: {
        type: String,
        // required
    },
    age: Number,
    favouriteFoods: [String]
})

const Person = mongoose.model("Person", personSchema);

const Joe = new Person({
    name: "Joe",
    age: 27,
    favouriteFoods: ["pasta", "pizza"]
})

//Joe.save((err) => err ? console.log("an error occured", err.toString()) : console.log("Joe saved in database"));

// Person.create(arrayOfPeople, (err) => {
//     err ? console.log("an error occured", err.toString()) : console.log("Array is saved in database");
// });

// Person.find({ name: 'Dave' }, (err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log(data);
// })

// Person.findOne({ name: 'Joe' }, (err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log('First Joe Found', data)
// })

// Person.findById({ _id: "612e1a6032f79a76c44e6867" }, (err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log('Current id should match mike', data)
// })

// Person.findById({ _id: "612e1a6032f79a76c44e6867" }, (err, data) => {

//     if (err) {
//         console.log("an error occured", err.toString())
//     } else {
//         data.favouriteFoods.push('hamburger')
//         data.save()
//         console.log("found, updated and saved")
//     }

// })

// Person.findOneAndUpdate({ _id: "612e16d291fcf238187e6040" }, { $set: { name: 'jason bourne' } }, (err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log('Joe is changed to jason bourne', data)
// })

// Person.findOneAndRemove({ _id: "612e16d291fcf238187e6040" }, (err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log('Jason is Removed', data)
// })

// Person.remove({ name: 'Dave' }, (err, docs) => {
//     !err ? console.log('file removed', docs.deletedCount) : console.log('file still exist');
// });

// Person.find({
//     favouriteFoods: {
//         $in: ["rice"]
//     }
// }, { age: 0 }).sort({ name: "asc" }).limit(2).exec((err, data) => {
//     err ? console.log("an error occured", err.toString()) : console.log('Joe is changed to jason bourne', data)
// })





