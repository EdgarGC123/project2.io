const mongoose = require("mongoose")

const BucketList = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: String,
        why: String,
        physicalNecessities: String,
        financialNecessities: {type: Number, min: 0},
        desiredLocation: String,
        img: String
    }
)

const BL = mongoose.model("BucketList", BucketList);

module.exports = BL;