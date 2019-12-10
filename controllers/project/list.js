const mysql=require('../../utils/mysqlConfig');
module.exports=(req,send,next)=>{
    const body=req.query;
    const conn=mysql.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        if(conn)conn.end();
    }
    if(!body.phone)return toSend("0","缺少关键字！");
    conn.connect();
    conn.query(`SELECT * FROM project WHERE userphone = '${body.phone}'`,(err,res)=>{
        if(err) return toSend("0",'无数据');
        return toSend("1","查询成功",res);
    })
}