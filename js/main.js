function geturl() {
	return "https://flyrubble.github.io/web/";
}

function bodyonload() {
	document.title="个人博客";
	window.onresize=setlayout;
	
	// 顶部加载
	toponload();
	// 加载左边表
	leftonload();
	// 加载右边
	rightonload();
	// 加载底部
	bottomonload();
	
	// 设置布局
	setlayout();
	
	setTimeout("remaintime()",60);
}

function setlayout() {
	var width=document.documentElement.clientWidth;
	var height=document.documentElement.clientHeight;
	// 布局设置 1366 662
	if (width<1366) {
		width=1366;
	}
	if (height<662) {
		height=662;
	}
	
	var margin=20;
	var padding=10;
	
	var topWidth=width;
	var topHeight=48;
	
	var bottomWidth=width-6;
	var bottomHeight=23;
	
	var leftWidth=width*0.14348;
	var leftHeight=height-topHeight-padding-bottomHeight-padding;
	
	var centerWidth=width*0.62518;
	var centerHeight=height-topHeight-padding-bottomHeight-padding;
	
	var rightWidth=width-margin-leftWidth-padding-centerWidth-padding-margin;
	var rightHeight=height-topHeight-padding-bottomHeight-padding;
	
	// 顶部
	var e = document.getElementById("top");
	e.style.width=topWidth+'px';
	e.style.height=topHeight+'px';
	
	e = document.getElementById("cc");
	e.style.left=width-23+'px';
	// 左边
	e = document.getElementById("left");
	e.style.left=margin+'px';
	e.style.top=topHeight+padding+'px';
	e.style.width=leftWidth+'px';
	e.style.height=leftHeight+'px';
	// 中间
	e = document.getElementById("center");
	e.style.left=margin+leftWidth+padding+'px';
	e.style.top=topHeight+padding+'px';
	e.style.width=centerWidth+'px';
	e.style.height=centerHeight+'px';
	// 右边
	e = document.getElementById("right");
	e.style.left=margin+leftWidth+padding+centerWidth+padding+'px';
	e.style.top=topHeight+padding+'px';
	e.style.width=rightWidth+'px';
	e.style.height=rightHeight+'px';
	// 底部
	e = document.getElementById("bottom");
	e.style.top=height-bottomHeight+'px';
	e.style.width=bottomWidth+'px';
	e.style.height=bottomHeight+'px';
}

function toponload() {
	var top = document.getElementById("top");
	
	//<span id="icon">博客</span>
	//<div id="cc"></div>
	var e=document.createElement("span");
	var t=document.createTextNode("博客");
	e.setAttribute("id","icon");
	e.appendChild(t);
	top.appendChild(e);
	
	e=document.createElement("div");
	e.setAttribute("id","cc");
	top.appendChild(e);
	
	e=document.createElement("div");
	e.id="iword";
	top.appendChild(e);
}

function leftonload() {
	var left = document.getElementById("left");
	
	var map = [];
	
	map.push({'key': '中文', 'value': [{'key': 'C#入门', 'value': 'abc2412'}
	,{'key': 'C#进阶', 'value': 'adsfsd'}]});
	
	map.push({'key': 'Unity', 'value': [{'key': 'Unity入门', 'value': 'Unity123123123'}
	,{'key': 'Unity进阶', 'value': 'Unityadsfsd'}]});
	
	var id="";//map[0]['value'][0]['value'];
    var index=location.href.indexOf("?")
	if (index>0) {
		id=location.href.substr(index+1);
	}
	
	var account="",password="";
	for (i=0;i<map.length;i++)
	{
		var e=document.createElement("ul");
		e.className="a";
		var t=document.createTextNode(map[i]['key']);
		e.appendChild(t);
		left.appendChild(e);
		
		var array = map[i]['value'];
		for (j=0;j<array.length;j++)
		{
			e=document.createElement("li");
			e.className="b";
			var url=document.createElement("a");
			account=array[j]['value'];
			password="";
			for(k=0;k<account.length;k++) { 
				password+=String.fromCharCode(account.charCodeAt(k)^k);
			}
			url.setAttribute("href",geturl()+"html/"+array[j]['value']+".html?"+password);
			t=document.createTextNode(array[j]['key']);
			url.appendChild(t);
			e.appendChild(url);
			left.appendChild(e);
			if (password===id) {
				e.className="c";
			}
		}
	}
}

function rightonload() {
	var right = document.getElementById("right");
	
	// <span>Search:</span><input value=""></input>
	var e=document.createElement("span");
	var t=document.createTextNode("Search:");
	e.appendChild(t);
	right.appendChild(e);
	
	e=document.createElement("input");
	e.setAttribute("value","");
	right.appendChild(e);
}

function bottomonload() {
	// Copyright © 2017-2018
	var bottom = document.getElementById("bottom");
	var date = new Date();
	var t=document.createTextNode("Copyright © 2016-"+date.getUTCFullYear());
	bottom.appendChild(t);
}

function remaintime(){
	var array=new Array();
	array.push("患难及困苦，是磨炼人格的最高学府。——苏格拉底");
	array.push("不认识痛苦，就不是一条好汉。——雨果");
	array.push("永远不要因承认错误而感到羞耻，因为承认错误也可以解释作你今天更聪敏。——马罗");
	array.push("自己打败自己是最可悲的失败，自己战胜自己是最可贵的胜利。 ——佚名");
	array.push("书不仅是生活，而且是现在、过去和未来文化生活的源泉。——库法耶夫");
	array.push("自古奇人伟士，不屈折于忧患，则不足以其学。——方孝孺");
	array.push("时髦把低劣抬到了讨人喜欢的水平，继而把坏的和好的变得十分相像。——本特利");
	array.push("世上最可贵的是时间，世上最奢靡的是挥霍时光。——莫扎特");
	array.push("我要扼住命运的咽喉，它决不能使我完全屈服。——贝多芬");
	array.push("无论是美女的歌声，还是鬣狗的狂吠，无论是鳄鱼的眼泪，还是恶狼的嚎叫，都不会使我动摇。——恰普曼");
	array.push("人生最大的敌人是自己。此话最为重要。人的一生总会遇到一些敌人，如流氓，无赖，小人，此等衣冠禽兽——佛家妙语");
	array.push("人生恰恰像马拉松赛跑一样……只有坚持到最后的人，才能称为胜利者。——池田大作");
	array.push("意志坚强的人能把世界放在手中像泥块一样任意揉捏。——歌德");
	array.push("只有永远躺在泥坑里的人，才不会再掉进坑里。——黑格尔");
	array.push("即使翅膀断了，心也要飞翔。——张海迪");
	array.push("坚持意志伟大的事业需要始终不渝的精神。——伏尔泰");
	array.push("与其临渊羡鱼，不如退而结网。");
	array.push("多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。——毛泽东");
	array.push("业精于勤，荒于嬉；行成于思，毁于随");
	array.push("伟大的事业，需要决心，能力，组织和责任感。");
	array.push("读书是易事，思索是难事，但两者缺一，便全无用处。");

	var element=document.getElementById("iword");
	do{
		var index=Math.random()*array.length;
		index=parseInt(index);
	  }
	while (index===parseInt(element.getAttribute('value')));

	element.setAttribute('value',index);
	element.innerHTML=array[index];
	setTimeout("remaintime()",60000);
}