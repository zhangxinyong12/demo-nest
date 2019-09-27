import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        breed: String,
    },
    {
        collection: 'zhang', // 表 明
    },
);
