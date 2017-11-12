let express=require('express')
let app=express()
let multer=require('multer')
let bp=require('body-parser')
let mongo=require('mongodb')
let cookie=require('cookie-parser')
let session=require('express-session')

app.use(express.static(__dirname))
app.use(bp.json()) //bp.json({type:'text/plain'})解析json格式  bp.urlencoded()文本格式  .text() .raw()解析二进制格式
app.use(bp.urlencoded({extended:true}))
app.use(cookie())
app.use(session({secret:'yan zheng zai xian',name:'user'}))

let db=new mongo.Db('yihaodian',new mongo.Server('127.0.0.1',27017,{auto_reconnect:true}),{safe:true})
function insert(data){
	db.open((err,db)=>{
		db.collection('user',(err,col)=>{
			col.insert(data,(err,docs)=>{
				db.close()
		    })
		})
	})
}
app.post('/yanzheng.avi',(req,res)=>{
	if(req.session.user){
		res.send(req.session.user)
	}else{
//		req.session.name='hello'
		res.send('')
	}
})
app.post('/zhuxiao.png',(req,res)=>{
	req.session.destroy()
	res.send('ok')
})

app.post('/shuaige.mp3',(req,res)=>{
	let data=req.body
//	console.log(req.session)
//	console.log(req.cookies)																
//	res.cookie('name','hello',{maxAge:60000,httpOnly:true})
	if(data.purpose=='query'){
		let status=data.anopur
		delete data.purpose
		delete data.anopur
		console.log(data)
		db.open((err,db)=>{
			db.collection('user',(err,col)=>{
				col.find(data).toArray((err,docs)=>{
					console.log(docs)
					db.close()
					docs[0]&&status&&(req.session.user=docs[0].name)
					res.send(docs)
				})
			})
		})
	}else if(data.purpose=='insert'){
		delete data.purpose
		insert(data)
	    res.send('注册成功')
	}
})

app.listen(8888)
