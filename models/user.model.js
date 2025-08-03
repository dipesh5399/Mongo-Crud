const { Schema, default: mongoose } = require("mongoose");

// const addressSchema = new Schema({
//     street: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String
//     },
//     state: {
//         type: String
//     },
//     pincode: {
//         type: String
//     }
// }, {
//     _id: false,
//     timestamps: false,
//     versionKey: false
// });

const userSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 10
    },
    phone: {
        type: String,
        unique: true,
        trim: true,
        minlength: 10
    },
    address: {
        address1: {
            street: {
                        type: String,
                        required: true
                    },
                    city: {
                        type: String
                    },
                    state: {
                        type: String
                    },
                    pincode: {
                        type: String
                    }
        },
        default: {}
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema.pre('save', (next) => {
    this.userId = this._id;
    next();
});

const users = mongoose.model('User', userSchema);

module.exports = users;