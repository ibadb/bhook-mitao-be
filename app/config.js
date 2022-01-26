// module.exports = () => {
//     return {
//         port: 3000,
//         db: {
//             name: 'sample_restaurants',
//             host: 'mongodb://localhost',
//             port: 27017,
//             user: 'dbuser',
//             password: 'dbuser',
//             connection: 'mongodb+srv://django:lAE2H1nLYw0ItvLs@cluster0.c7xew.mongodb.net/sample_restaurants?retryWrites=true'
//         }
//     }
// }; //connection: 'mongodb://localhost:27017/sample_restaurants'

// const dotenv = require('dotenv');
// dotenv.config();

module.exports = {
    port: process.env.PORT,
    db_name: process.env.DB_NAME,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_connection: process.env.DB_CONNECTION
};