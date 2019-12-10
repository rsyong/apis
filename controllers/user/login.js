const mysqp=require('../../utils/mysqlConfig');
module.exports=(req,send,next)=>{
    let body = req.body;
    let conn = mysqp.connect();
    conn.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        conn.end();
    }
    conn.query(`SELECT * FROM register WHERE username = '${body.username}'`,(err,res)=>{
        if(err) return toSend("0","查询失败！");
        if(res.length==0) return toSend("0","用户名没有注册！");
        if(res.length>0){
            if(body.password==res[0].password){
                return toSend("1","登录成功！");
            }else{
                return toSend("0","密码错误！");
            }
        }
    })
}