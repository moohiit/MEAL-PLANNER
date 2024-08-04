import mongoose from "mongoose";

const { Schema, model } = mongoose;

const ratingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const reviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    instructions: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    preparationTime: {
      type: Number,
      required: true,
    },
    cookingTime: {
      type: Number,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ratings: [ratingSchema],
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
