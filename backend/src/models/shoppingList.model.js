import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  purchased: {
    type: Boolean,
    default: false,
  },
});

const shoppingListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [itemSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const ShoppingList = model("ShoppingList", shoppingListSchema);

export default ShoppingList;
