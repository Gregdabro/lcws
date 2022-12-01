const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String},
    description: {type: String},
    image: {type: String},
    profession: {type: Schema.Types.ObjectId, ref: "Profession"},
    qualities: [{type: Schema.Types.ObjectId, ref: "Quality"}],
    rate: Number,
    price: Number,
    isFavorite: {type: Boolean}
}, {
    timestamps: true
})

module.exports = model("Product", schema)
