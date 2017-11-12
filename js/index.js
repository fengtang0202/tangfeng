$('#rest').css({'width':(document.documentElement.clientWidth-1228)/2+'px'})
$('#display').css({'left':(document.documentElement.clientWidth-1228)/2+200+'px'})
$('header p').click(function () {
    $('header').hide()  // 给小叉叉添加点击事件，点击后触发header的影藏
})
$('header').hover(function () {  // 给header添加hover事件，鼠标的移入移出会改变两张图片的显影以及header的高度的改变
    $('#sm').stop().fadeOut(2500);
    $('#lg').stop().fadeIn(2500);
    $('header div').stop().css({'height':'250px'})
},function () {
    $('header div').stop().css({'height':'80px'})
    $('#lg').stop().fadeOut(2500);
    $('#sm').stop().fadeIn(2500)
})
// 封装一个hover事件 传入两个元素作为主元素与父元素，在传入两个回调函数作为执行函数
function hov(parent,child) {
    var arg1=arguments[2];  //当第三，四个参数传入回调函数时，执行回调函数
    var arg2=arguments[3];
    var a=function () {
        child.show();
        arg1&&arg1();
    }
    var b=function () {
        child.hide();
        arg2&&arg2();
    }
    parent.hover(a,b);
    child.hover(a,b);
}
//为送货地址选项添加hov事件
var changeStyle=function(){
    $('#cover').css({'border':'1px solid transparent','border-bottom':'1px solid lightgrey','color':'black'})
}
$('#cover').click(function(){
     $('#location').show();
     $('#cover').css({'border':'1px solid lightgrey','border-bottom':'2px solid white','color':'red'})
})
$('#chacha').click(function () {
    $('#location').hide();changeStyle()
})

$('#hotcity li').click(function () {//添加点击事件
    var text='送货地址 : '+$(this).html()
    $('#cover').html(text);
    $('#location').hide();changeStyle()
})
//定义轮播图事件
function run() {
    if(arguments[0]<0){count--;}
    else{count++;}
    (count==9)&&(count=0);
    (count==-1)&&(count=8);
    $('#carousel a').eq(count).delay(200).finish().fadeIn(1000).siblings('a').delay(200).finish().fadeOut(1000)
    $('#fugai li').eq(count).css({'background':'red'}).siblings('li').css({'background':'white'})
    $('#rest').css({'background':color[count]});
}
var count=0;
var color=['#EAFEE5','#6BD8D2','#FFCC71','#FFD720','#0192FF','#880ECB','#74C9F2','#F598C7','#07163D']
var timer=setInterval(run,5000)
for(var i=0;i<9;i++){
    let j=i;
    $('#fugai li').eq(j).hover(function(){
        clearInterval(timer);
        $('#rest').css({'background':color[j]});
        $('#carousel a').eq(j).delay(200).finish().fadeIn(1000).siblings('a').delay(200).finish().fadeOut(1000)
        $(this).css({'background':'red'}).siblings('li').css({'background':'white'})
    },function () {
        count=j;
        timer=setInterval(run,5000);
    })
}
$('#select').hover(function () {
    $('#display').show()
},function () {
    $('#display').hide()
})


//为购物车框添加hov事件
hov($('#part p').eq(0),$('#part p').eq(1),function () {
    $('#part p').eq(0).css({'border-bottom':'3.5px solid white'})
},function () {
    $('#part p').eq(0).css({'border-bottom':'1px solid lightgrey'})
})


//为页面最大的ul添加hov事件
hov($('#select'),$('#display'))

// $('#carousel').hover(function () {
//     $('.direction').show()
//     $('.direction').hover(function () {
//         clearInterval(timer);
//         $(this).css({'opacity':'1'})
//     },function () {
//         $(this).css({'opacity':'0.4'})
//         timer=setInterval(run,5000);
//         window.timer=setInterval(run,5000);
//     })
// },function () {
//     $('.direction').hide();
//     // timer=setInterval(run,1000);
// })
$('#carousel').hover(function () {
    $('.direction').show()
},function () {
    $('.direction').hide();
})
$('.direction').hover(function () {
    clearInterval(timer);
    $(this).css({'opacity':'1'})
},function () {
    $(this).css({'opacity':'0.4'})
    timer=setInterval(run,5000);
})
$('.direction').eq(0).click(function () {
    run(-1);
})
$('.direction').eq(1).click(function () {
    run();
})


function city(str) {
    var reg=/市|(地区)|(自治州)|(阿拉善盟)|(神农架林区)|(县)/g;
    var arr=[];
    var count=0;
    while(obj=reg.exec(str)){
        var x=obj.index+obj[0].length;
        arr.push(str.slice(count,x))
        count=x;
    }
    return arr;

}
var a='鞍山市阿拉善盟安庆市阿坝藏族羌族自治州安阳市安顺市阿里地区安康市阿勒泰地区阿拉尔市阿克苏地区';
var b='保定市包头市巴彦淖尔市本溪市白城市白山市巴中市蚌埠市亳州市滨州市白沙黎族自治县北海市百色市保山市保亭黎族苗族自治县毕节地区白银市宝鸡市博尔塔拉蒙古自治州巴音郭楞蒙古自治州北京市'
var c='承德市沧州市常州市重庆市赤峰市朝阳市长春市成都市池州市滁州市巢湖市长沙市郴州市常德市潮州市澄迈县昌江黎族自治县崇左市楚雄彝族自治州昌都地区昌吉回族自治州长治市'
var d='丹东市大连市大兴安岭地区大庆市德阳市达州市东营市德州市东莞市儋州市东方市定安县大理白族自治州德宏傣族景颇族自治州迪庆藏族自治州定西市大同市'
var e='鄂尔多斯市恩施土家族苗族自治州鄂州市'
var f='抚顺市阜新市阜阳市福州市抚州市佛山市防城港市'
var g='广元市广安市甘孜藏族自治州赣州市广州市桂林市贵港市贵阳市甘南藏族自治州固原市果洛藏族自治州'
var h='邯郸市衡水市淮安市杭州市湖州市呼和浩特市呼伦贝尔市葫芦岛市哈尔滨市黑河市鹤岗市淮南市合肥市淮北市黄山市菏泽市黄石市鹤壁市黄冈市怀化市衡阳市河源市惠州市海口市贺州市河池市红河哈尼族彝族自治州汉中市海西蒙古族藏族自治州海东地区海北藏族自治州黄南藏族自治州海南藏族自治州哈密地区和田地区'
var j='嘉兴市金华市锦州市吉林市鸡西市佳木斯市济南市九江市景德镇市吉安市焦作市济宁市济源市荆州市荆门市江门市揭阳市嘉峪关市金昌市酒泉市晋城市晋中市'
var k='开封市昆明市喀什地区克孜勒苏柯尔克孜自治州克拉玛依市'
var l='廊坊市连云港市丽水市辽阳市辽源市泸州市乐山市六安市凉山彝族自治州龙岩市洛阳市聊城市临沂市漯河市娄底市临高县柳州市来宾市丽江市临沧市陵水黎族自治县乐东黎族自治县六盘水市兰州市临夏回族自治州陇南市林芝地区拉萨市吕梁市临汾市莱芜市'
var m='牡丹江市绵阳市眉山市马鞍山市梅州市茂名市'
var n='南京市南通市宁波市内江市南充市南平市宁德市南昌市南阳市南宁市怒江傈僳族自治州那曲地区'
var p='盘锦市攀枝花市莆田市萍乡市平顶山市濮阳市普洱市平凉市'
var q='秦皇岛市衢州市七台河市齐齐哈尔市泉州市青岛市潜江市清远市琼海市钦州市曲靖市琼中黎族苗族自治县黔西南布依族苗族自治州黔东南苗族侗族自治州黔南布依族苗族自治州庆阳市'
var r='日照市日喀则地区'
var s='上海市石家庄市苏州市宿迁市绍兴市沈阳市松原市四平市双鸭山市绥化市遂宁市三明市宿州市上饶市商丘市三门峡市神农架林区随州市十堰市深圳市邵阳市汕尾市汕头市韶关市三亚市三沙市商洛市山南地区石河子市石嘴山市朔州市'
var t='天津市唐山市泰州市台州市通辽市铁岭市通化市铜陵市泰安市天门市屯昌县铜仁地区天水市铜川市图木舒克市塔城地区吐鲁番地区太原市'
var w='无锡市温州市乌兰察布市乌海市芜湖市潍坊市威海市武汉市五指山市万宁市文昌市梧州市文山壮族苗族自治州武威市渭南市五家渠市吴忠市乌鲁木齐市'
var x='邢台市徐州市兴安盟锡林郭勒盟宣城市厦门市新余市襄樊市信阳市许昌市新乡市孝感市仙桃市咸宁市湘西土家族苗族自治州湘潭市西双版纳傣族自治州西宁市西安市咸阳市忻州市'
var y='扬州市盐城市营口市延边朝鲜族自治州伊春市雅安市宜宾市烟台市宜春市鹰潭市宜昌市永州市益阳市岳阳市阳江市云浮市玉林市玉溪市榆林市延安市伊犁哈萨克自治州银川市玉树藏族自治州阳泉市运城市'
var z='张家口市镇江市舟山市自贡市资阳市漳州市枣庄市淄博市郑州市驻马店市周口市株洲市珠海市张家界市中山市肇庆市湛江市昭通市遵义市张掖市中卫市'
var citys=[a,b,c,d,e,f,g,h,j,k,l,m,n,p,q,r,s,t,w,x,y,z]
for(var i=0;i<citys.length;i++){
    citys[i]=city(citys[i]);
}

var letter=['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'];
for(var i=0;i<letter.length;i++){
    citys[i].letter=letter[i]
}
var citylist=[];
for(var i=0;i<citys.length;i++){
    for(var j=0;j<citys[i].length;j++){
        citylist.push(citys[i][j])
    }
}
//vue创建实例 因为那个定位城市太长了，所以用框架
var vm=new Vue({
    el:'#zone',
    data:{
        city:citys
    }
})
var search=new Vue({
    el:'#search',
    data:{
        letter:letter
    }
})
var niubi=new Vue({
    el:'#niubi',
    data:{
        arr:[]
    },
    methods:{
        change:function () {
            $('#tishi').show()
            if($('#city').val()){
                this.arr=[];
                var val=$('#city').val();
                for(var i=0;i<citylist.length;i++){
                    (citylist[i].match(val))&&(this.arr.push(citylist[i]))
                }
                $('#city').blur(function () {
                    for(var i=0;i<7;i++){
                        $('#tishi p').eq(i).click(function () {
                            var text='送货地址 : '+$(this).html()
                            $('#city').val($(this).html())
                            $('#cover').html(text);
                             niubi.arr=[]
                            $('#tishi').hide()
                            $('#location').hide();changeStyle()
                        })
                    }
                })
            }else{ this.arr=[]}
        }
    }
})

$('#zone ul li ul li').click(function () {//添加点击事件
    var text='送货地址 : '+$(this).html()
    $('#cover').html(text);
    $('#location').hide();changeStyle()
})
$('#city').focus(function () {
    $('#tishi').show()
})
function clock() {
    let time=8*3600;
    setInterval(()=>{
        time--;
        let h=parseInt(time/3600)
        let m=parseInt(time%3600/60)
        m<10?(m="0"+m):1
        let s=time%60;
        s<10?(s="0"+s):1
        $('#clock b').eq(0).html('0'+h)
        $('#clock b').eq(1).html(m)
        $('#clock b').eq(2).html(s)
},1000)
}
clock();

$.ajax({
	url:'yanzheng.avi',
	type:'post'
})
.then(data=>{
	if(data){
		$("#log").html(`<a>Hi,${data}</a><a class="level">新晋</a>`)
		$("#reg").html('<a>注销</a>')
		$("#hello").html(`Hi,${data}<a class="level">新晋</a>`)
		$('#logreg').html('<a href="">金币</a><a href="">抵用券</a>')
		$("#reg a").click(()=>{
			$.ajax({
				url:'zhuxiao.png',
				type:'post'
			})
			.then(()=>{
				$("#reg").html('<a href="reg.html">注册</a>')
				$("#log").html('<a href="login.html">Hi,请登录</a>')
			})
		})
	}
})

$(document).scroll(e=>{
	$(e.target).scrollTop()>=700&&($("#nav").css({'top':'0px'}))
	$(e.target).scrollTop()<=700&&($("#nav").css({'top':'-60px'}))
})
let floor1=new Vue({
	el:'#rank',
	data:{
		resource:[[
		{src:'image/tab1.jpg',tittle:'珊珂 绵润白泥泡沫'},
		{src:'image/tab2.jpg',tittle:'素萃 玻尿酸原液'},
		{src:'image/tab3.jpg',tittle:'Mentholatum 曼秀'},
		{src:'image/tab4.jpg',tittle:'NATURE REPUBLIC'},
		{src:'image/tab5.jpg',tittle:'玉兰油 Olay大红瓶'},
		{src:'image/tab6.jpg',tittle:'森田药妆 玻尿酸复'}],
		[{src:'image/tab7.jpg',tittle:'B&B 保宁 洗衣香'},
		{src:'image/tab8.jpg',tittle:'喜多 酒精棉片50'},
		{src:'image/tab9.jpg',tittle:'Pigeon 贝亲 婴儿'},
		{src:'image/tab10.jpg',tittle:'强生 婴儿爽身粉袋'},
		{src:'image/tab11.jpg',tittle:'子初 婴儿柠檬洗衣'},
		{src:'image/tab12.jpg',tittle:'郁美净 儿童霜 '}],
		[{src:'image/tab13.jpg',tittle:'日本花王 妙而舒婴'},
		{src:'image/tab14.jpg',tittle:'Moony 婴儿纸尿裤'},
		{src:'image/tab15.jpg',tittle:'MamyPoko 妈咪宝'},
		{src:'image/tab16.jpg',tittle:'花王 日本进口花王'},
		{src:'image/tab17.jpg',tittle:'花王 kao日本花王'},
		{src:'image/tab18.jpg',tittle:'Pampers 帮宝适 '}],
		[{src:'image/tab19.jpg',tittle:'清盛锦 2017秋装'},
		{src:'image/tab20.jpg',tittle:'奥兰百合 2017秋'},
		{src:'image/tab21.jpg',tittle:'奥兰百合 2017夏'},
		{src:'image/tab22.jpg',tittle:'南极人/Nan Ji ren'},
		{src:'image/tab23.jpg',tittle:'妮曼琪 女装2017夏新'},
		{src:'image/tab24.jpg',tittle:'妮曼琪 2017夏装'}],
		[{src:'image/tab25.jpg',tittle:'珊珂 绵润白泥泡沫'},
		{src:'image/tab26.jpg',tittle:'妮曼琪 女装2017夏新'},
		{src:'image/tab27.jpg',tittle:'奥兰百合 2017夏'},
		{src:'image/tab28.jpg',tittle:'花王 日本进口花王'},
		{src:'image/tab29.jpg',tittle:'强生 婴儿爽身粉袋'},
		{src:'image/tab30.jpg',tittle:'B&B 保宁 洗衣香'}]]
	}
})
$(".xianshi").eq(0).css({'display':'block'})
$("#selected li").hover(e=>{
	$(".xianshi").eq($(e.target).index()).show().siblings('.xianshi').hide()
},()=>{})
$('#paihangbang ul li').hover(function(){
    $(this).css({'border-bottom':'2px solid red','color':'red'})
    .siblings('li').css({'border-bottom':'2px solid transparent','color':'dimgrey'})
})


let slide=new Vue({
	el:'#slide',
	data:{
		arr:[
		{src:"image/11.webp",title:"童床",sale:"满188减100"},
		{src:"image/12.webp",title:"外设产品",sale:"满99减25"},
		{src:"image/13.webp",title:"洗护清洁",sale:"满59减10"},
		{src:"image/14.webp",title:"玩具",sale:"满2件8折"},
		{src:"image/15.webp",title:"婴幼儿辅食",sale:"满2件7.5折"},
		{src:"image/16.webp",title:"童床",sale:"满188减100"},
		{src:"image/17.webp",title:"外设产品",sale:"满188减100"},
		{src:"image/18.webp",title:"洗护清洁",sale:"满188减100"},
		{src:"image/19.webp",title:"玩具",sale:"满188减100"},
		{src:"image/20.webp",title:"婴幼儿辅食",sale:"满188减100"},
		]
	}
})

$(".only").click(e=>{
	if($(e.target).hasClass('only_right')){
		$("#slide").css('transform','translateX(-1100px)')
		$(".only_left").fadeIn(100)
		
	}else{
		$("#slide").css('transform','translateX(0)')
		$(".only_right").fadeIn(100)
	}
	$(e.target).fadeOut(100)
})

let sort=new Vue({
	el:'#sort',
	data:{
		arr:[
		{src:"image/25.webp",title:"进口美妆",sort:"BEAUTY",color:"#F06291",bg:'#FFE6EE'},
		{src:"image/26.webp",title:"进口母婴",sort:"MOM&BABY",color:"#EE9832",bg:'#FFF3E4'},
		{src:"image/27.webp",title:"进口生鲜",sort:"FRESH",color:"#54A472",bg:'#E9FBF0'},
		{src:"image/28.webp",title:"进口家具",sort:"HOME",color:"#AD7D62",bg:'#F9EEE9'},
		{src:"image/29.webp",title:"进口厨卫清洁",sort:"CLEANING",color:"#468BCB",bg:'white'},
		{src:"image/30.webp",title:"进口保健品",sort:"HEALTH",color:"#54A472",bg:'#E2F8F2'}]
	}
})

//let ia=0
//$(".button1").click(e=>{
//	$(e.target).index('.button1')&&(ia==2?ia=0:ia++)
//	!$(e.target).index('.button1')&&(ia==0?ia=2:ia--)
//	$('#china aside  ul li').eq(ia).fadeIn(500).siblings('li').fadeOut(500)
//	$("#number").html(ia+1)
//})
function change(){
	$(".transform li").eq(0).css({'transform':'translateZ(0px)','opacity':'1'})
    $(".transform li").eq(1).css({'transform':'translateZ(-300px) translateY(-25px) ','opacity':'0.5'})
    $(".transform li").eq(2).css({'transform':'translateZ(-600px) translateY(-50px) ','opacity':'0.25'})
}
change()
let num2=0
function run2(){
	if(arguments[0]){
		$(".transform").prepend($(".transform li").eq(2))
	num2==0?num2=2:num2--
	}else{
num2==2?num2=0:num2++
	$(".transform").append($(".transform li").eq(0))
	}
	$("#number").html(num2+1)
	change()
	$(".gundong li").css('transform','translateY(-'+num2*30+'px)')
}
let timer2=setInterval(run2,3000)
$(".button1").hover(()=>{
	clearInterval(timer2)
},()=>{
	timer2=setInterval(run2,3000)
})
$(".button1").click(e=>{
	if($(e.target).index('.button1')){
		run2()
	}else{
		run2(1)
	}
	change()
    })
let counts=0
let timer1=setInterval(()=>{
	counts==2?counts=0:counts++
	$(".lk_pic").eq(0).find('li').eq(counts).fadeIn().siblings('li').fadeOut()
	$(".lk_slide").eq(0).find('li').eq(counts).css('background','#09D09C').siblings('li').css('background','#CCCCCC')
	$(".lk_pic").eq(1).find('li').eq(counts).fadeIn().siblings('li').fadeOut()
	$(".lk_slide").eq(1).find('li').eq(counts).css('background','#963752').siblings('li').css('background','#CCCCCC')
	
},2000)
$(window).load(()=>{
	$("#search li").click(e=>{
	$("#zone").animate({'scrollTop':$("#zone ul").eq($(e.target).index()+1).position().top+'px'},1000)
})
})

