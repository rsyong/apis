const mysql=require('../../utils/mysqlConfig');
module.exports=(req,send)=>{
    const body=req.query;
    const conn=mysql.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        conn.end();
    }
    if(!body.phone || !body.ground_id) return toSend("0","缺少参数！");
    conn.query(`SELECT * FROM api where phone = '${body.phone}' AND ground_id = '${body.ground_id}'`,(err,res)=>{
        if(err) return toSend("0","查询失败");
        toSend("1","查询成功",res);
    })
}