// 1. У любого пользователя будет как минимум в БД qualities & professions
// 2. Они будут равны mock данным

const Profession = require("../models/Profession")
const Quality = require("../models/Quality")
const professionMock = require("../mock/professions.json")
const qualityMock = require("../mock/qualities.json")

module.exports = async () => {
    const qualities = await Quality.find()
    if (qualities.length !== qualityMock.length) {
        await createInitialEntity(Quality, qualityMock)
    }

    const professions = await Profession.find()
    if (professions.length !== professionMock.length) {
        await createInitialEntity(Profession, professionMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch(e) {
                return e
            }
        })
    )
}
