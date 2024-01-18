const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProdutoSchema = new Schema(
    {
        name: String,
        price: Number,
        description: String,
        category: String,
        image: String,
    },
    {
        timestamps: true,
    }
);

const Produto = mongoose.model("Produto", ProdutoSchema);

module.exports = Produto;