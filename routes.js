let user = require('./controllers/user');
let project = require('./controllers/project');
let ground = require('./controllers/ground');
let api = require('./controllers/api');
exports.setRequestUrl = (app) => {
    app.post('/user/register', user.register);//注册
    app.post('/user/login', user.login);//登录

    app.post('/project/add', project.add);//添加项目
    app.get('/project/list',project.list);//获取列表
    app.post('/project/deletes',project.deletes);//删除列表

    app.post('/ground/add',ground.add);//添加分组
    app.post('/ground/list',ground.list);//查询分组
    app.post('/ground/deletes',ground.deletes);//删除分组

    app.post('/api/add',api.add);//添加接口
    app.get('/api/list',api.list);//查询接口列表
    app.post('/api/deletes',api.deletes);//删除接口列表
}