import mongoose from 'mongoose';
const { Schema } = mongoose;

const adoptionSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: ture
    },
    breed: {
        type: String,
        required: ture
    },

    age: {
        type: String,
        required: ture
    },

    images: [
        { type: String }
    ],

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

    petName: {
        type: String
    },

    location: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        enum: ['Male', 'Female', 'Unknown'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export default mongoose.model('Adoption', adoptionSchema)