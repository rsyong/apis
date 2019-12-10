/**
 * 添加api接口
 */
const mysql=require('../../utils/mysqlConfig');
module.exports=(req,send)=>{
    const body=req.body;
    const conn=mysql.connect();
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        conn.end();
    }
    if(!body.name || !body.moth  || !body.gorund  || !body.api_url  || !body.canshu  || !body.fanhui  || !body.phone  
        || !body.gorund_id){
        return toSend("0",'缺少参数');
    }
    conn.query(`INSERT INTO api (name,meoth,ground,api_url,canshu,fanhui,ground_id,phone) VALUES ('${body.name}',
    '${body.moth}','${body.gorund}','${body.api_url}','${body.canshu}','${body.fanhui}','${body.gorund_id}','${body.phone}')`,(err,res)=>{
        if(err) return toSend("0","添加失败");
        toSend("1","添加成功",res);
    })
}