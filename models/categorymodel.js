const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    moduleType: {
      type: String,
      enum: ["Loan Register", "Receivable Register"],
      required: true,
    },

    categoryName: {
      type: String,
      required: true,
      trim: true,
    },

    subCategory: {
      type: String,
      default: "",
    },

    subSub1Category: {
      type: String,
      default: "",
    },

    sub2Category: {
      type: String,
      default: "",
    },

    subSub2Category: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);