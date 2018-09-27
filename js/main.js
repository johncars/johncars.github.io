function animate_boxes(){
	part_1_box()
	
	setTimeout(part_2_box,5000)
}
function settingUp(){
	if ($(document).scrollTop()>0){
    	$("#regresador").css("bottom", "40px");
    	isRunning = true;
    }
    if($(document).scrollTop() == 0){
    	$("#regresador").css("bottom", "-100px");
    	isRunning = false;
    	$('div', $('#question')).each(function () {
			if ($(this).hasClass("appear")){
	    		$("#circle_"+ $(this).attr("id")).removeClass("selected");
	    		$("#circle_1").addClass("selected");
	    		$(this).removeClass("appear");
	    		$("#1").addClass("appear");
	    	};//Detect which has appeared
    	});
    }
}
function part_1_box(){
	$('.container-box2').animate({ top: '-100%' , opacity: 1 }, 1000);
	$('.container-box1').animate({ top: '-100%' , opacity: 0 }, 1000,function(){
		$('.container-box1').css("top","100%");
	});
}
function part_2_box(){
	$('.container-box2').animate({ top: '-200%' , opacity: 0 }, 1000,function(){
		$('.container-box2').css("top","0");
	});
	$('.container-box1').animate({ top: '0' , opacity: 1 }, 1000);
}

function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 'slow');
}
$("#question").hover(
    function(){
    	isRunning = false;            
    },
    function(){
    	isRunning = true;
    }
);


var isRunning = false;
setTimeout(animate_boxes,2000);
setInterval(animate_boxes,10000);

$(".links").click(function(event) {
	event.preventDefault();
	$("#content_"+$(this).attr("id")).addClass("appear");
	$(this).parent().removeClass("appear");	
});
$(".questions").click(function(event) {
	event.preventDefault();
	$("#content_"+$(this).attr("id")).addClass("appear");
	$("#wrapper_question").removeClass("appear");	
});
$(".volver").click(function(event) {
	event.preventDefault();
	$("#content"+$(this).attr("id")).removeClass("appear");
	$("#wrapper_question").addClass("appear");	
	isRunning = true;
});

$("#iniciador").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll("first_section");
});

$(document).scroll(function() {
    settingUp();
});
$(document).ready(settingUp);
$("#regresador").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();
    // Call the scroll function
    goToByScroll("header");
});
$("#after").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();

    goNext();
});
$("#before").click(function(e) {
    // Prevent a page reload when a link is pressed
    e.preventDefault();

    goBefore();
});



function goBefore(){
	if(isRunning){

		counter = $("div#question div").length;
		$('div', $('#question')).each(function () {
			if(counter>0){
				if ($(this).hasClass("appear")){
		    		
		    		i = parseInt($(this).attr("id"))-1;
		    		if(i>0){
		    			$(this).removeClass("appear");
		    			$("#"+i).addClass("appear");
		    			$("#circle_"+$(this).attr("id")).removeClass("selected");
		    			$("#circle_"+i).addClass("selected");
		    			counter=0;
		    		}else{
		    			$("#circle_"+ $(this).attr("id")).removeClass("selected");
		    			$("#circle_4").addClass("selected");
		    			$(this).removeClass("appear");
		    			$("#4").addClass("appear");
		    			counter=0;
		    		}
		    	};//Detect which has appeared
			}
	    });
	}
}



function goNext(){
	if (isRunning){

		counter = $("div#question div").length;
		$('div', $('#question')).each(function () {
			if(counter>0){
				if ($(this).hasClass("appear")){
		    		
		    		i = parseInt($(this).attr("id"))+1;
		    		if(i<=$("div#question div").length){
		    			$(this).removeClass("appear");
		    			$("#"+i).addClass("appear");
		    			$("#circle_"+$(this).attr("id")).removeClass("selected");
		    			$("#circle_"+i).addClass("selected");
		    			counter=0;
		    		}else{
		    			$("#circle_"+ $(this).attr("id")).removeClass("selected");
		    			$("#circle_1").addClass("selected");
		    			$(this).removeClass("appear");
		    			$("#1").addClass("appear");
		    			counter=0;
		    		}
		    	};//Detect which has appeared
			}
	    });
	}
}
// Get the video
var video = document.getElementById("video1");

// Get the button
var btn = document.getElementById("content_21");

// Pause and play the video, and change the button text
function myFunction() {
    if (!video.playing) {
        video.play();

    } else {
        video.pause();

    }
}
$('body').on('scroll touchmove mousewheel', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
});