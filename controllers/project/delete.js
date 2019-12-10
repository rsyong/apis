const mysql=require('../../utils/mysqlConfig');
module.exports=(req,send,next)=>{
    const body=req.body;
    const conn=mysql.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        if(conn)conn.end();
    }
    if(!body.id) return toSend("0","缺少参数！")
    conn.connect();
    conn.query(`DELETE FROM project where id='${body.id}'`,(err,res)=>{
        if(err) return toSend("0",'删除失败！')
        toSend("1","删除成功！");
    })
}