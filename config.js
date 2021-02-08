module.exports = () => {
    return {
        port: 3000,
        db: {
            name: 'sample_restaurants',
            host: 'mongodb://localhost',
            port: 27017,
            user: 'dbuser',
            password: 'dbuser',
            connection: 'mongodb+srv://dbuser:dbuser@cluster0.c7xew.mongodb.net/<dbname>?retryWrites=true&w=majority'
        }
    }
};