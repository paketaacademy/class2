import { Mongoose } from '../index.js'

const listSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2
    },
    idBoard: {
        type: String,
        required: true
    }
}, { collection: 'list' }
)

export default listSchema