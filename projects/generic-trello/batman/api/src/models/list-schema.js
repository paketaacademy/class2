import { Mongoose } from '../index'

const listSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2
    }
}, { collection: 'list' }
)

export default listSchema