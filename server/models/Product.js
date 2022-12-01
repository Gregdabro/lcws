const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    colors: [{type: Schema.Types.ObjectId, ref: "Colors"}],
    rate: Number,
    price: Number,
    isFavorite: {type: Boolean}
}, {
    timestamps: true
})

module.exports = model("Product", schema)
