const {Schema, model} = require("mongoose")
// todo: реализовать модель корзины
const schema = new Schema({

}, {
    timestamps: true
})

module.exports = model("Category", schema)
