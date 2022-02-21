const express = require('express');
const mysql = require('mysql');

const util = require('./util.js')

const app = express();



// 发送get请求
app.get('/',(req, resp)=>{
	
	util.read('pages/index.html')
	.then(res=>{
		resp.write(res)
		resp.end();
	})
	// resp.write('<h1>hello node</h1>')
	// resp.end();
})

app.get('/login',async (req, resp)=>{
	const data = await util.read('pages/login.html')
	resp.end(data);
})

app.get('/getUser',(req,resp)=>{
	const pool = mysql.createPool({
		database:'blog',
		user:'root',
		password:'geekwangc'
	})
	console.log('pool',pool);
	pool.getConnection((err,conn)=>{
		if(!err){
			const sql = 'select * from t_user';
			const sqlParams = [];
			conn.query(sql,sqlParams,(e,results)=>{
				if(!e){
					console.log(results)
					resp.send(results);
				}
			})
		}else{
			console.log('err:',err)
		}
		
	})
})

// 监听服务器端口
app.listen(3000,()=>{
	console.log('server is start');
})