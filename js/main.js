function hlinkonclick(input) {
if (window.FileReader) {
	var reader = new FileReader();
	var text = reader.readAsText('../123.txt');
	document.getElementById("header").innerHTML=text;
	}

	var s = "space";
	try{
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var ts = fso.OpenTextFile("../a.txt", 1);
		s = ts.ReadLine();
	}catch(error)
	{
		s = error;
	}
	//$("#header").load("a.txt",function(responseTxt,statusTxt,xhr){
    //if(statusTxt=="success")
      //alert("外部内容加载成功！");
    //if(statusTxt=="error")
      //alert("Error: "+xhr.status+": "+xhr.statusText);
  	document.getElementById("header").innerHTML=s;
}