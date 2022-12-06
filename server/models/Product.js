const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    colors: [{type: Schema.Types.ObjectId, ref: "Colors"}],
    rate: Number,
    price: {type: Number, required: true},
    isFavorite: {type: Boolean}
}, {
    timestamps: true
})

module.exports = model("Product", schema)
