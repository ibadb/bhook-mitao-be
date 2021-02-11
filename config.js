module.exports = () => {
    return {
        port: 3000,
        db: {
            name: 'sample_restaurants',
            host: 'mongodb://localhost',
            port: 27017,
            user: 'dbuser',
            password: 'dbuser',
            connection: 'mongodb+srv://django:lAE2H1nLYw0ItvLs@cluster0.c7xew.mongodb.net/sample_restaurants?retryWrites=true'
        }
    }
};