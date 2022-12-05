const {Schema, model} = require("mongoose")
// todo: реализовать модель корзины
const schema = new Schema({
    userId: { type: String, required: true },
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]
}, {
    timestamps: true
})

module.exports = model("Cart", schema)
