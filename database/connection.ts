import mongoose from 'mongoose';
export const connectWithDab = async (dbUrl: string) => {
    try {
        await mongoose.connect(dbUrl, {});
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}

