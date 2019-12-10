const mysql = require("mysql");
const option = {
    host: "localhost",
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'node_test'
}
exports.connect = () => {
    let conn = mysql.createConnection(option);
    return conn;
}