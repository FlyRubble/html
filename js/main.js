function urlonclick (arg0) {
	var element=document.getElementById("iframe");
	element.setAttribute("src", arg0.getAttribute("value"));

	var tags=document.getElementsByClassName("liahref");
	for (var i = 0; i < tags.length; i++)
	{
		tags[i].style.color="black";
	}
	arg0.style.color="red";
}

function iframeonload(arg0) {
	arg0.height=1;
	arg0.height=arg0.contentWindow.document.body.scrollHeight;

	var height=Math.max(window.innerHeight-54,arg0.height);
	
	var element=document.getElementById("left");
	element.style.height=height+"px";

	element=document.getElementById("right");
	element.style.height=height+"px";

	element=document.getElementById("wrapper");
	element.style.height=(Number(height)+102)+"px";

	element=document.getElementById("left");
	if(element.scrollHeight>element.clientHeight||element.offsetHeight>element.clientHeight){
		element.style.overflowY="scroll";
	}else{
		element.style.overflowY="hidden";
	}
}

function bodyonload () {
	$("#footer").show();
	setTimeout("remaintime()",60000);

	var tags=document.getElementsByClassName("liahref");
	var url = document.URL.split('?');
	var index = 0;
	if (typeof(url[1]) != "undefined"){
		for (var i = 0; i < tags.length; i++)
		{
			/* 
			decodeURI() 解码
			encodeURI() 编码
			*/
			if (tags[i].innerHTML == decodeURI(url[1])){
				index = i;
				break;
			}
		}
	}
	urlonclick(tags[index]);
}

function remaintime(){
	var array=new Array()
	array[0] = "多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。";
	array[1] = "业精于勤，荒于嬉；行成于思，毁于随。";
	array[2] = "伟大的事业，需要决心，能力，组织和责任感。";
	array[3] = "读书是易事，思索是难事，但两者缺一，便全无用处。";

	var element=document.getElementById("header");
	do{
		var index=Math.random()*array.length;
		index=parseInt(index);
	  }
	while (index===parseInt(element.getAttribute('value')));

	element.setAttribute('value',index);
	element.innerHTML=array[index];
	setTimeout("remaintime()",60000);
}