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
 if(localStorage.x)
   {  
   	  dodos=JSON.parse(localStorage.x);
      for(var i=0;i<dodos.length;i++)
   	  {

   	  	 $("<li class='addli'><textarea class='content' disabled>"+dodos[i].name+"</textarea><div class='del'>×</div><div class='icon ding'>&#xe62d;</div></li>").appendTo(todos);
   	  }
   }

	//添加
	add.on("touchend",function(){
		todos.css("display","none");
        box.css("display","block");
	})
	//点击编辑进行编辑
	/*write.on("touchend",function(){
		inCon.removeAttr("disabled");
		
	})*/
	inCon.focus(function(){
		write.addClass("disnone");
		confirm.css("display","block");
		
	})
	//点击√确认添加
	confirm.on("touchend",function(){
		var v=inCon.val();
		var todo={
	   	 	name:v,
	   	    state:0
	   	 };
		var li=$("<li class='addli'><textarea class='content' disabled >"+todo.name+"</textarea><div class='del'>×</div><div class='icon ding'>&#xe62d;</div></li>");
		con.val(todo.name)
	    li.appendTo(todos);
	    dodos.push(todo);
	    localStorage.x=JSON.stringify(dodos);
	    box.css("display","none");
	    todos.css("display","block");
	    confirm.css("display","none")
	    write.removeClass("disnone");
	    inCon.val("");
	    inCon.attr("disabled","disabled");
	})
		
//删除
	$(".todos ").on("touchend","li .del",function(){
		 var li=$(this).closest("li");
		 var index=li.index();
		 dodos.splice(index,1);
		 localStorage.x=JSON.stringify(dodos);
		 $(this).closest("li").remove();
	})
	$(".todos").on("touchstart", "li",function(e){
		startPos=e.originalEvent.changedTouches[0].clientX;
	})
	$(".todos").on("touchend","li",function(e){
		endPos=e.originalEvent.changedTouches[0].clientX;
		if(endPos-startPos>50){
			console.log(6)
			$(this).children(".del").css("display","block");
			$(this).children(".content").addClass("done")
		}
		if(endPos-startPos<-50){
			$(this).children(".del").css("display","none");
			$(this).children(".content").removeClass("done")
		}
	})


//删除全部
	clearAll.on("touchend",function(){
	   localStorage.x="";
		$(".todos").remove();
	})


//修改
/*	var addli=$(".addli");
	addli.each(function(i){
		addli.eq(i).on("touchend",function(){
//			var val=$(this).children("textarea").val();
			box.css("display","block");
			todos.css("display","none");
//			inCon.val(val);
			console.log(inCon.val())
			confirm.on("touchend",function(){
				
				$(this).children("textarea").val(inCon.val());
			})
		})
		
	})*/
	
//颜色
var color=$(".color")
var colorArr=["green","blue","pink","purple","yellow","grey"];

color.on('touchend',function(){
	
})
 })
 