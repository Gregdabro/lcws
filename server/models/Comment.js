const {Schema, model} = require("mongoose")

const schema = new Schema({
    content: {type: String, required: true},
    // На чьей странице нахоится комментарий
    pageId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    // Id user который оставил комментарий
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, {
    timestamps: {createdAt: "created_at"}
})

module.exports = model("Comment", schema)
