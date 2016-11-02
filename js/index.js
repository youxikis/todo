$(function(){
	
	var todos=$(".todos");
	var add=$("#add");
	var con=$(".content");
	var inCon=$(".inContent");
	var box=$(".box");
	var confirm=$(".confirm")
	var write=$(".write");
	var dos=[];
	var start,end;
//	var todo={};
/**/
   if(localStorage.x)
   {
   	  dos=JSON.parse(localStorage.x);
      for(var i=0;i<dos.length;i++)
   	  
   	  {
// 	  	 var c=(dos[i].state)?'done':'on';
// 	  	 $("<li class="+c+"><div class='content'>"+dos[i].name+"</div><div class='delete'></div></li>").appendTo(todos);
   	  	 $("<li class=''><div class='content'>"+dos[i].name+"</div><div class='del'>×</div></li>").appendTo(todos);
   	  }
   }

	//添加
	add.on("touchend",function(){
		 
        box.addClass("dis");
		write.on("touchend",function(){
			inCon.removeAttr("disabled");
		
		})
		
	})
		inCon.focus(function(){
			write.css("display","none");
			confirm.css("display","block");
			
		})
		confirm.on("touchend",function(){
			var v=inCon.val();
			var todo={
		   	 	name:v,
		   	    state:0
		   	 };
			var li=$("<li><div class='content' >"+todo.name+"</div><div class='del'>×</div></li>");
			console.log(todo.name)
			con.val(todo.name)
		    li.appendTo(todos);
		    dos.push(todo);
		    localStorage.x=JSON.stringify(dos);
		    box.css("display","none");
		})
	//触摸
/*	todos.on("touchstart","li",function(e){
		start=e.originalEvent.changedTouches[0].clientX;
	})
	todos.on("touchend","li",function(e){
		end=e.originalEvent.changedTouches[0].clientX;
		if(start-end>50){
	   	  	$(this).children(".content").addClass("done");
//	   	  	todos[$(this).index()].state=1;
	   	  	localStorage.x=JSON.stringify(todos);
   	  	}
   	  if(start-end<-50){
	   	  	$(this).children(".content").removeClass("done");
//	   	  	todos[$(this).index()].state=0;
	   	  	localStorage.x=JSON.stringify(todos);
   	  }
	})*/
	
	
	
	//
	function add(){
		var li=$("<li><div class='content' >"+todo.name+"</div><div class='del'>×</div></li>");
		li.appendTo(todos);
	}
})
