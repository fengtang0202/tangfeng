let express=require('express')
let session=require('express-session')
let app=express()
app.use(session({
	name:'user',
	secret:'yhh hello',
	stor:'redis'
}))
app.get('/',(req,res)=>{
	if(req.session.sign){
		console.log(req.session)
		res.send(`welcome ${req.session.name}`)
		req.session.destroy()
	}else{
		req.session.sign=true
		req.session.name='yehuanhuan'
		res.send('欢迎登陆')
	}
}).listen(80)
