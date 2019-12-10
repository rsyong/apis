/**
 * 添加项目接口
 */
const mysqp=require('../../utils/mysqlConfig');
module.exports=(req,send,next)=>{
    const body=req.body;
    var toSend = (code, msg, data = []) => {
        send.json({
            code, msg, data
        })
        conn.end();
    }
    if(!body.projectClass || !body.vction || !body.kinds || !body.shouMing || !body.userphone){
        return toSend(0, "确少参数！");
    }
    const conn=mysqp.connect();
    conn.connect();
    conn.query(`INSERT INTO project (projectClass,vction,kinds,shouMing,userphone,project_id) VALUES 
    ('${body.projectClass}','${body.vction}','${body.kinds}','${body.shouMing}','${body.userphone}','${+new Date()}')`,(err,res)=>{
        if(err) return toSend(0, "添加失败！");
        toSend(1, "添加成功");
    });
}