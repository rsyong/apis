/**
 * 查询分组
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
    if(!body.projectid) return toSend("0","缺少参数！");
    conn.query(`SELECT * FROM ground where project_id = '${body.projectid}'`,(err,res)=>{
        if(err) return toSend("0","添加失败");
        if(res.length==0){
            conn.query(`INSERT INTO ground (ground_name,project_id) VALUES ('所有分组','${body.projectid}')`,(err,res)=>{
                if(err) return toSend("02","添加失败");
                conn.query(`SELECT * FROM ground where project_id = '${body.projectid}'`,(err,res)=>{
                    if(err) return toSend("03","添加失败");
                    return toSend("1","查询成功！",res);
                })
            });
        }else{
            return toSend("1","查询成功！",res);
        }
    })
}