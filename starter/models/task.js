const mongoose = require('mongoose');



//defining the structure of our document in the MongoDB
const taskSchema = new mongoose.Schema({
    // name: String,
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength:[20, 'name can not be longer that 20 characters']
    },
    completed: {
        type: Boolean,
        default: false, // since no task is considered completed initially
    }
})
// -------------------------------------------------------------------------------
// A BIT ABOUT SCHEMAS
// adding more keys from the frontend(excess data than the defined one, eg adding an extra key
// of 'pay': 1000 won't have any effect on the document as the document will simply ignore
// every excess data that's not defined in the structure by our schema)

//you can even send an empty object {no key-val pairs defined} - this is an issue so we'll add validation(edited above)
// -------------------------------------------------------------------------------



//Modelling the schema to create a model that'll further help to create documents with the
//specified structure that our schema has defined
module.exports = mongoose.model('Task', taskSchema)