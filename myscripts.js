var mouse_trail_count = 1;
var max_trail_length = 20;
var current_spot = 0;
var normal_life_span = 5;//sec

var life_spans = [0];
life_spans.length = max_trail_length;
var is_alive = [0];
is_alive.length = max_trail_length;

//initialize arrays
for(var i = 0; i < max_trail_length; ++i)
{
	life_spans[i] = 0;
	is_alive[i] = 0;
}

//create all trail points
for(var i = 0; i < max_trail_length; ++i)
{
	var parent = document.getElementById("sec2");
	var trail_pic = document.createElement("IMG");
	trail_pic.id = "trail_pic" + i;
	trail_pic.src = "./yellowdot3.png";
	trail_pic.style.position="fixed";
	trail_pic.style.top="0px";
	trail_pic.style.left="0px";
	trail_pic.style.opacity="0";//start 0.29
	trail_pic.style.zIndex = "-2";

	
	parent.appendChild(trail_pic);
}

//setInterval(function () {alert("Hello")}, 3000);



//delete the mouse trails and fade them out every 10 ms
setInterval(function () {
	var i = 0;
	var parent = document.getElementById("sec2");
	
	while( i < max_trail_length){
		var child = document.getElementById("trail_pic" + i);
		if(child != null){
			if(child.style.opacity <= 0) child.style.opacity = 0;
			else
			{
				var op = (child.style.opacity-.01);
				child.style.opacity = "" + op;
			}
		}	
		++i;
	}
}, 10);


//another way would be to have 20 yellow dots and just make most of them invisible
function mouse_trail(event){
	var x = event.clientX;
	var y = event.clientY;

	//loop around when you reach max
	if(current_spot >= max_trail_length)
		current_spot = 0;
		//TODO new -> just move it and change opacity
	
	var child = document.getElementById("trail_pic" + current_spot);
	current_spot++;
	child.style.top=(y-50) + "px";
	child.style.left=(x-50)+"px";
	child.style.opacity=".29";
}



function show_coord(event){
	var x = event.clientX;
	var y = event.clientY;
	var element = document.getElementById("coord");
	element.innerHTML = " " + x + " , " + y;

	/*var y1 = (500-y) / 20;
	var x1 = (500-x) / 20;
	document.getElementById("name-pic").style.top= y1 + "px";
	document.getElementById("name-pic").style.right= x1 + "px";*/
	//document.getElementById("name-pic").style.visibility="visible";

	if( x < 1300)
	mouse_trail(event);
	
	/*var name = document.getElementById("my_name");
	
	if(event.target==name)
	{
		alert("On Name!");
		name.style.color="white";
	}*/

	//if(name)
	//	over_name(name, x, y);

}
//document.getElementById("coord").innerHTML = "newtext";

function highlight_text(t){
	t.style.color="lightgrey";
	
}

function unhighlight_text(t){
	t.style.color="grey";
	
}

function in_bio(t){
	var box = document.getElementById("bio_box");
	var txt = document.getElementById("bio");
	var title = document.getElementById("bio_title");
	var pic = document.getElementById("andyPic");
	box.style.opacity = 0.8;
	txt.style.opacity = 0.8;
	title.style.opacity = 0.8;
	pic.style.opacity = 0.8;
	
	box.style.transform = "scale(1.01,1.01)";
	txt.style.transform = "scale(1.01,1.01)";
	title.style.transform = "scale(1.07,1.07)";
	pic.style.transform = "scale(1.06,1.06)";
}


function out_bio(t){
	var box = document.getElementById("bio_box");
	var txt = document.getElementById("bio");
	var title = document.getElementById("bio_title");
	var pic = document.getElementById("andyPic");
	box.style.opacity = 0.5;
	txt.style.opacity = 0.5;
	title.style.opacity = 0.5;
	pic.style.opacity = 0.5;

	box.style.transform = "scale(1,1)";
	txt.style.transform = "scale(1,1)";
	title.style.transform = "scale(1,1)";
	pic.style.transform = "scale(1,1)";
}

function in_zany(t){
	var title = document.getElementById("ZanyBallsTitle");
	var txt = document.getElementById("zanytxt");
	var box = document.getElementById("zanyBox");
	var pic = document.getElementById("zanyPic");
	var code = document.getElementById("zanyCode");

	box.style.opacity = 0.8;
	txt.style.opacity = 0.8;
	title.style.opacity = 0.8;
	pic.style.opacity = 0.8;
	code.style.opacity = 0.8;
	
	box.style.transform = "scale(1.01,1.01)";
	txt.style.transform = "scale(1.01,1.01)";
	title.style.transform = "scale(1.07,1.07)";
	pic.style.transform = "scale(1.06,1.06)";
	code.style.transform = "scale(1.01,1.01)";
}

function out_zany(t){
	var title = document.getElementById("ZanyBallsTitle");
	var txt = document.getElementById("zanytxt");
	var box = document.getElementById("zanyBox");
	var pic = document.getElementById("zanyPic");
	var code = document.getElementById("zanyCode");

	box.style.opacity = 0.5;
	txt.style.opacity = 0.5;
	title.style.opacity = 0.5;
	pic.style.opacity = 0.5;
	code.style.opacity = 0.5;
	
	box.style.transform = "scale(1,1)";
	txt.style.transform = "scale(1,1)";
	title.style.transform = "scale(1,1)";
	pic.style.transform = "scale(1,1)";
	code.style.transform = "scale(1,1)";
}

