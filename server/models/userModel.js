import mongoose from "mongoose";
import Joi from "joi";

const { Schema } = mongoose;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
});

const Token = mongoose.model("Token", tokenSchema);

const validate = (token) => {
    const schema = Joi.object({
        userId: Joi.string().required(),
        token: Joi.string().required(),
    });
    return schema.validate(token);
};

export { Token as default, validate };
