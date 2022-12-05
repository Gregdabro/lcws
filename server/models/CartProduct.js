const {Schema, model} = require("mongoose")
// todo: реализовать модель product корзины
const schema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity: {type: Number, require: true, default: 1},
    price: {type: Number, require: true},
    total: {type: Number, require: true},
}, {
    timestamps: true
})

module.exports = model("CartProduct", schema)
