const { required } = require('joi');
const mongoose=require('mongoose');
const stageSchema=new mongoose.Schema({
    moduleType:{
        type: String,
        enum:["Loan Register","Receivable Register"],
        required: true,
    },
    stageName:{
        type:String,
        required:true,
        trim:true,
    },
    definitionMethod: {
      type: String,
      enum: ["DPD", "Manual"],
      required: true,
    },

    rangeType: {
      type: String,
      enum: ["Between","GreaterThan","LesserThan"],
      default: null,
    },

    startDay: {
      type: Number,
      default: null,
    },

    endDay: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stage", stageSchema);


