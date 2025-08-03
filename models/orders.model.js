const { Schema, default: mongoose } = require("mongoose");

const OrderSchema = new Schema({

    user_Id: {
        ref: "users",
        type: Schema.Types.ObjectId(),
        required: true,
        trim: true
    },
    orderDate: {
        type: Date,
        default: new Date()
    },
    price: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.Model('Orders', OrderSchema);