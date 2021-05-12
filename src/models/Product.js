import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    vat: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

export default model('Product', productSchema)