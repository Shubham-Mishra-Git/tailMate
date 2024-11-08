import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    profilePicture: {
        type: String, // URL to the user's profile picture
    },

    bio: {
        type: String, // Short description or bio about the user
        maxLength: 200,
    },

    location: {
        type: String, // Current location of user
    },

    phone: {
        type: String,
        maxLength: 10
    },

    adoptionPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AdoptionPost',
        }
    ],
    tips: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tip',
        }
    ],
});

export default mongoose.model('User', userSchema);