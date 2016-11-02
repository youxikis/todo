 $(function(){
 
 	var todos=$(".todos");
	var add=$("#add");
	var con=$(".content");
	var inCon=$(".inContent");
	var box=$(".box").eq(0);
	var confirm=$(".confirm")
	var write=$(".write");
	var dodos=[];
	var startPos,endPos;
	var del=$(".todos li .del")
	var clearAll=$(".clearAll")
//  var todo;
 if(localStorage.x)
   {
   	  dodos=JSON.parse(localStorage.x);
      for(var i=0;i<dodos.length;i++)
   	  
   	  {
// 	  	 var c=(dos[i].state)?'done':'on';
// 	  	 $("<li class="+c+"><div class='content'>"+dos[i].name+"</div><div class='delete'></div></li>").appendTo(todos);
   	  	 $("<li class=''><div class='content'>"+dodos[i].name+"</div><div class='del'>×</div></li>").appendTo(todos);
   	  }
   }

	//添加
	add.on("touchend",function(){
        box.addClass("dis");
	})
	write.on("touchend",function(){
		inCon.removeAttr("disabled");
		
	})
	inCon.focus(function(){
		write.addClass("disnone");
		confirm.css("display","block");
		
	})
	confirm.on("touchend",function(){
		var v=inCon.val();
		var todo={
	   	 	name:v,
	   	    state:0
	   	 };
		var li=$("<li><div class='content' >"+todo.name+"</div><div class='del'>×</div></li>");
		con.val(todo.name)
	    li.appendTo(todos);
	    console.log(todo)
	    dodos.push(todo);
	    localStorage.x=JSON.stringify(dodos);
	    box.addClass("disnone");
	})
		
//删除

$(".todos li").on("touchend",".del",function(){
	 var li=$(this).closest("li");
	 var index=li.index();
	 dodos.splice(index,1);
	 localStorage.x=JSON.stringify(dodos);
	 $(this).closest("li").remove();
})
$(".todos li ").on("touchstart",function(e){
	startPos=e.originalEvent.changedTouches[0].clientX;
})
$(".todos li ").on("touchend",function(e){
	endPos=e.originalEvent.changedTouches[0].clientX;
	
	if(endPos-startPos>50){
		$(this).children(".del").css("display","block");
	}
	if(endPos-startPos<-50){
		$(this).children(".del").css("display","none");
	}
})


//删除全部
clearAll.on("touchend",function(){
	var newarr=[];
   for(var i=0;i<todos.length;i++)
   {
   	 	newarr.push(todos[i]);
   	 
   }
   localStorage.x=JSON.stringify(newarr);
   	$(".todos li ").remove();
})

 })
 