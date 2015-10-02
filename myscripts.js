//project boxes
var col_to_col = 44;
var row_to_row = 40;

//  column 1 row 1
var box_col1_left = 8;
var box_row1_top = 144;

var pic_col1_left = 9;
var pic_row1_top = 147;

var title_col1_left = 18;
var title_row1_top = 144;

var para_col1_left = 19;
var para_row1_top = 148;

var link_col1_left = 20;
var link_row1_top = 169;

// column 2
var box_col2_left = box_col1_left + col_to_col;
var pic_col2_left = pic_col1_left + col_to_col;
var title_col2_left = title_col1_left + col_to_col;
var para_col2_left = para_col1_left + col_to_col;
var link_col2_left = link_col1_left + col_to_col;

// row 2
var box_row2_top = box_row1_top + row_to_row;
var pic_row2_top = pic_row1_top + row_to_row;
var title_row2_top = title_row1_top + row_to_row;
var para_row2_top = para_row1_top + row_to_row;
var link_row2_top = link_row1_top + row_to_row;


//initialize zany balls
var curr_box = document.getElementById("zanyBox");
curr_box.style.top = box_row1_top + "vh";
curr_box.style.left = box_col1_left + "vw";

var curr_pic = document.getElementById("zanyPic");
curr_pic.style.top = pic_row1_top + "vh";
curr_pic.style.left = pic_col1_left + "vw";

var curr_title = document.getElementById("ZanyBallsTitle");
curr_title.style.top = title_row1_top + "vh";
curr_title.style.left = title_col1_left + "vw";

var curr_para = document.getElementById("zanytxt");
curr_para.style.top = para_row1_top + "vh";
curr_para.style.left = para_col1_left + "vw";

var curr_link = document.getElementById("zanyCode");
curr_link.style.top = link_row1_top + "vh";
curr_link.style.left = link_col1_left + "vw";

curr_link = document.getElementById("zanyBallsAndroidCode");
curr_link.style.top = link_row1_top + "vh";
curr_link.style.left = (link_col1_left + 10) + "vw";

// initialize drunk words
curr_box = document.getElementById("drunkBox");
curr_box.style.top = box_row1_top + "vh";
curr_box.style.left = box_col2_left + "vw";

curr_pic = document.getElementById("drunkPic");
curr_pic.style.top = pic_row1_top + "vh";
curr_pic.style.left = pic_col2_left + "vw";

curr_title = document.getElementById("DrunkWordsTitle");
curr_title.style.top = title_row1_top + "vh";
curr_title.style.left = title_col2_left + "vw";

curr_para = document.getElementById("drunktxt");
curr_para.style.top = para_row1_top + "vh";
curr_para.style.left = para_col2_left + "vw";

curr_link = document.getElementById("drunkCode");
curr_link.style.top = link_row1_top + "vh";
curr_link.style.left = link_col2_left + "vw";

// initialize rcart
curr_box = document.getElementById("cartBox");
curr_box.style.top = box_row2_top + "vh";
curr_box.style.left = box_col1_left + "vw";

curr_pic = document.getElementById("cartPic");
curr_pic.style.top = pic_row2_top + "vh";
curr_pic.style.left = pic_col1_left + "vw";

curr_title = document.getElementById("RcartTitle");
curr_title.style.top = title_row2_top + "vh";
curr_title.style.left = title_col1_left + "vw";

curr_para = document.getElementById("carttxt");
curr_para.style.top = para_row2_top + "vh";
curr_para.style.left = para_col1_left + "vw";

curr_link = document.getElementById("cartCode");
curr_link.style.top = link_row2_top + "vh";
curr_link.style.left = link_col1_left + "vw";

// initialize future bike
curr_box = document.getElementById("bikeBox");
curr_box.style.top = box_row2_top + "vh";
curr_box.style.left = box_col2_left + "vw";

curr_pic = document.getElementById("bikePic");
curr_pic.style.top = pic_row2_top + "vh";
curr_pic.style.left = pic_col2_left + "vw";

curr_title = document.getElementById("BikeTitle");
curr_title.style.top = title_row2_top + "vh";
curr_title.style.left = title_col2_left + "vw";

curr_para = document.getElementById("biketxt");
curr_para.style.top = para_row2_top + "vh";
curr_para.style.left = para_col2_left + "vw";

curr_link = document.getElementById("bikeCode");
curr_link.style.top = link_row2_top + "vh";
curr_link.style.left = link_col2_left + "vw";


//---------------------------------------------------------------
//mouse trail stuff
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
	trail_pic.style.zIndex = "2";
	trail_pic.style.pointerEvents = "none";
	
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

function inside(box,txt,title,pic){
	box.style.opacity = 0.8;
	txt.style.opacity = 0.8;
	title.style.opacity = 0.8;
	pic.style.opacity = 0.8;
	
	box.style.transform = "scale(1.01,1.01)";
	txt.style.transform = "scale(1.01,1.01)";
	title.style.transform = "scale(1.07,1.07)";
	pic.style.transform = "scale(1.06,1.06)";
}

function outside(box,txt,title,pic){
	box.style.opacity = 0.5;
	txt.style.opacity = 0.5;
	title.style.opacity = 0.5;
	pic.style.opacity = 0.5;

	box.style.transform = "scale(1,1)";
	txt.style.transform = "scale(1,1)";
	title.style.transform = "scale(1,1)";
	pic.style.transform = "scale(1,1)";
}

function in_bio(t){
	var box = document.getElementById("bio_box");
	var txt = document.getElementById("bio");
	var title = document.getElementById("bio_title");
	var pic = document.getElementById("andyPic");
	inside(box,txt,title,pic);
}


function out_bio(t){
	var box = document.getElementById("bio_box");
	var txt = document.getElementById("bio");
	var title = document.getElementById("bio_title");
	var pic = document.getElementById("andyPic");
	outside(box,txt,title,pic);
}

function in_zany(t){
	var title = document.getElementById("ZanyBallsTitle");
	var txt = document.getElementById("zanytxt");
	var box = document.getElementById("zanyBox");
	var pic = document.getElementById("zanyPic");
	var code = document.getElementById("zanyCode");
	inside(box,txt,title,pic);
	//code.style.opacity = 0.8;
	//code.style.transform = "scale(1.01,1.01)";
}

function out_zany(t){
	var title = document.getElementById("ZanyBallsTitle");
	var txt = document.getElementById("zanytxt");
	var box = document.getElementById("zanyBox");
	var pic = document.getElementById("zanyPic");
	var code = document.getElementById("zanyCode");
	outside(box,txt,title,pic);
	//code.style.opacity = 0.5;
	//code.style.transform = "scale(1,1)";
}

function in_drunk(t){
	var title = document.getElementById("DrunkWordsTitle");
	var txt = document.getElementById("drunktxt");
	var box = document.getElementById("drunkBox");
	var pic = document.getElementById("drunkPic");
	//var code = document.getElementById("zanyCode");
	inside(box,txt,title,pic);

}

function out_drunk(t){
	var title = document.getElementById("DrunkWordsTitle");
	var txt = document.getElementById("drunktxt");
	var box = document.getElementById("drunkBox");
	var pic = document.getElementById("drunkPic");
	outside(box,txt,title,pic);
}

function in_cart(t){
	var title = document.getElementById("RcartTitle");
	var txt = document.getElementById("carttxt");
	var box = document.getElementById("cartBox");
	var pic = document.getElementById("cartPic");
	inside(box,txt,title,pic);

}

function out_cart(t){
	var title = document.getElementById("RcartTitle");
	var txt = document.getElementById("carttxt");
	var box = document.getElementById("cartBox");
	var pic = document.getElementById("cartPic");
	outside(box,txt,title,pic);
}

function in_bike(t){
	var title = document.getElementById("BikeTitle");
	var txt = document.getElementById("biketxt");
	var box = document.getElementById("bikeBox");
	var pic = document.getElementById("bikePic");
	inside(box,txt,title,pic);
}

function out_bike(t){
	var title = document.getElementById("BikeTitle");
	var txt = document.getElementById("biketxt");
	var box = document.getElementById("bikeBox");
	var pic = document.getElementById("bikePic");
	outside(box,txt,title,pic);
}