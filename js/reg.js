for(let i=0;i<5;i++){
	$('.dingwei').eq(i).find('i').hide()
	$('#banner input').eq(i).focus(function(){
	    $(this)[0].placeholder='';
	    $('#label label').eq(i).fadeIn(500);
        $('#prompt p').eq(i).fadeIn(500);
        $('.dingwei').eq(i).find('i').hide()
	})
}
function testHeight(ele) {
	if(ele.html().length<=10){ ele.css({'line-height':'45px'})}
	else{ele.css({'line-height':'22px'})}
}
for(let i=0;i<5;i++){
	testHeight($('#prompt p').eq(i))
}
function run(i){
//	let keys
//	i===0?keys='用户名':(i===1?keys='手机号':keys='邮箱号')
	$('#prompt p').eq(i).html($("#label label").eq(i).html()+'已被注册').fadeIn(10).css({'background':'#FFF4D7'})
    testHeight($('#prompt p').eq(i))
    $('.dingwei').eq(i).find('i').hide()
}
function inputBlur(i,regexp,err) {
	let text=$('#prompt p').eq(i).html()
	let target=$('#prompt p').eq(i)
    $('#banner input').eq(i).blur(function (){  
        if(regexp.test($(this).val())){   //当正则通过进行数据库的查重
        	if(i==3){
        		target.fadeOut(10).html(text).css({'background':'#E4E4E4'})
        			testHeight(target)
        			$('.dingwei').eq(i).find('i').show()
        	}else{
        		let val=$('#banner input').eq(i).val(),data
        		console.log(val+"@"+$("#select").val())
        		i==0?data={name:val,}:(i==1?data={tel:val,}:data={email:val+"@"+$("#select").val()})
        		data.purpose='query'
        		console.log(data)
        		$.ajax({
        			type:'post',
        			data,
        			url:'/shuaige.mp3',
        		})
        		.then(data=>{
        			if(!data.length){
        				target.fadeOut(10).html(text).css({'background':'#E4E4E4'})
        			    testHeight(target)
        			    $('.dingwei').eq(i).find('i').show()
        			}else{
        				run(i)
        			}
        		})
        	}
        }else if(!$(this).val()){
        	target.html($("#label label").eq(i).html()+'不能为空').css({'background':'#FFF4D7'})
            testHeight(target)
            $('.dingwei').eq(i).find('i').hide()
        }
        else{
            target.html(err).css({'background':'#FFF4D7'})
            testHeight(target)
            $('.dingwei').eq(i).find('i').hide()
        }
    })
}
inputBlur(0,/^\w{6,20}$/,"格式错误，请输入6-20位英文，数字或符号'_'")
inputBlur(1,/^1[35789]\d{9}$/,"请输入正确的手机号码")
inputBlur(2,/^[a-zA-Z0-9]+$/,"请输入正确的邮箱号")
inputBlur(3,/^\w{10,20}$/,"格式错误，请输入10-20位英文，数字或符号'_'")
$("#select").change(()=>$('#banner input').eq(2).blur())
$('#banner input').eq(4).blur(e=>{
	let val=$(e.target).val()
	let target=$('#prompt p').eq(4)
	let result=$('.dingwei').eq(3).find('i')[0].style.display
	if(result!='none'){
		if($(e.target).val()!=$('#banner input').eq(3).val()){
			target.html('两次密码输入不一致').css({'background':'#FFF4D7'}).fadeIn(10)
            testHeight(target)
            $('.dingwei').eq(4).find('i').hide()
		}else{
			target.html('请再次输入密码').fadeOut(10).css({'background':'#E4E4E4'})
            testHeight(target)
            $('.dingwei').eq(4).find('i').show()
		}
	}else{
		target.html('设置密码格式有误，请检查后继续输入').css({'background':'#FFF4D7'}).fadeIn(10)
        testHeight(target)
        $('.dingwei').eq(4).find('i').hide()
	}
})
$("#submit").click(e=>{
	if(!([...document.querySelectorAll('.dingwei')].every(ele=>ele.lastChild.style.display!='none'))){
		testHeight($('#prompt p').eq(5))
		$('#prompt p').eq(5).finish().fadeIn(500).css({'background':'#FFF4D7','margin-top':'70px'}).delay(8000).fadeOut(500)
	}else{
		$.ajax({
			type:'post',
			data:{
				purpose:'insert',
				name:$('#banner input').eq(0).val(),
				pwd:$('#banner input').eq(3).val(),
				tel:$('#banner input').eq(1).val(),
				email:$('#banner input').eq(2).val()+"@"+$("select").val()
			},
			url:'/shuaige.mp3',
		}).then(()=>{
				$("#cover").fadeIn(10)
				$("#tishi").fadeIn(500)
				let num=4;
				setInterval(()=>$("#tishi span").html(num--),1000)
				setTimeout(()=>location.replace('login.html'),5000)
		})
		$(e.target).attr('disabled','disabled')
		setTimeout(()=>
		{$(e.target).removeAttr('disabled')
		},1000)
	}
	
})
