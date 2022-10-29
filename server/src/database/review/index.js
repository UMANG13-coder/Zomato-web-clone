import mongoose, { mongo } from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        food: { type: mongoose.Types.ObjectId, ref: "foods" },
        resturant: { type: mongoose.Types.ObjectId, ref: "resturants" },
        user: { type: mongoose.Types.ObjectId, ref: "users" },
        ratings: { type: Number, required: true },
        reviewText: { type: String, required: true },
        isResturantReview: Boolean,
        isFoodReview: Boolean,
        photos: {
            type: mongoose.Types.ObjectId,
            ref: "imanges"
        }
    },
    {
        timestamps: true,
    })

export const ReviewModel = mongoose.model("reviews", ReviewSchema)