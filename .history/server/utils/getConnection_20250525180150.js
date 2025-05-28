const getConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('MongoDB connected'))
            .catch(err => console.error('MongoDB connection error:', err));
    } catch (error) {
        console.log('Error connecting to MongoDB:', error.message);
    }
}

