import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userImage: String,
    email: String,
    firstName: String,
    lastName: String,
    phone: String,
    socialNetwork: String,
    password: String,
    passport: String,
    requisites: String,
    isVerified: Boolean,
    isActivated: Boolean,
    userDocuments: [String],
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    }],
    savedProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
    }],
    donatesProjects: [{
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
        date: String,
        sum: Number,
        comment: String
    }]
},{timestamps: true,})

export default mongoose.model('User',UserSchema)