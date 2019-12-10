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
    if(!body.ground_name || !body.project_id){
        return toSend("0",'缺少参数');
    }
    conn.query(`INSERT INTO ground (ground_name,project_id) VALUES ('${body.ground_name}','${body.project_id}')`,(err,res)=>{
        if(err) return toSend("0","添加失败");
        toSend("1","添加成功",res);
    })
}