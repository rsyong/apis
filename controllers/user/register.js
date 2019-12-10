var mysqp = require('../../utils/mysqlConfig');
module.exports = (req, send, next) => {
    let body = req.body;
    let conn = mysqp.connect();
    conn.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        conn.end();
    }
    conn.query(`SELECT * FROM register WHERE username = '${body.username}'`, (err, res) => {
        if (err) return toSend(-1, "系统错误");
        if (!body.username) {
            return toSend(0, "确少用户名！");
        }
        if (!body.password) {
            return toSend(0, "确少密码！");
        }
        if (res.length > 0) {
            return toSend(0, "你已经注册！");
        }
        if (res.length == 0) {
            let sql = `INSERT INTO register (username,password) VALUES ('${body.username}','${body.password}')`;
            conn.query(sql, (err, res) => {
                if (err) return toSend(-1, "系统错误");
                toSend(1, "注册成功");
            })
        }
    })
}