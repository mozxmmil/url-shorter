import mongoose from "mongoose";
const urlschema = new mongoose.Schema(
  {
    shortid: {
      type: String,
      require: true,
      unique: true,
    },
    directurl: {
      type: String,
      require: true,
    },
    visithistory: [
      {
        timestamps: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Url = mongoose.model("Url", urlschema);
