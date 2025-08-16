const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../utils/db");

class Book extends Model {}

Book.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    createdBy: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "books",
    timestamps: true, // adds createdAt & updatedAt
  }
);

module.exports = Book;
