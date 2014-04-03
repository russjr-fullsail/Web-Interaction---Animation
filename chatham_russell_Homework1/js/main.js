/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/
if(Modernizr.canvas){
    console.log("Canvas is Supported")
}

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function(){
    var theCanvas1 = document.getElementById('Canvas1')
    if(theCanvas1 && theCanvas1.getContext){
        var ctx = theCanvas1.getContext("2d");
        if (ctx){
            //style
            ctx.strokeStyle="black";
            ctx.fillStyle="blue";
            ctx.lineWidth=3;
            //rectangle
            ctx.fillRect(0,0,50,100);
            ctx.strokeRect(0,0,50,100)
        }
    }
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var theCanvas2 = document.getElementById('Canvas2');
    if(theCanvas2 && theCanvas2.getContext){
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2){
            //style
            ctx2.fillStyle="rgba(255,0,0,.5)";
            ctx2.strokeStyle="black";
            ctx2.lineWidth=1;
            //circle
            ctx2.beginPath();
            ctx2.arc(50,50,20,0,2*Math.PI,true);
            ctx2.fill();
            ctx2.beginPath();
            ctx2.arc(50,50,30,0,2*Math.PI,true);
            ctx2.stroke();
        }
    }



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById('Canvas3');
    if (theCanvas3 && theCanvas3.getContext){
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3){
            //style
            ctx3.fillStyle="blue";
            ctx3.strokeStyle="black";
            ctx3.lineWidth=3;
            //draw star
            ctx3.beginPath();
            ctx3.moveTo(100,100);
            ctx3.lineTo(150,100);
            ctx3.lineTo(175,50);
            ctx3.lineTo(200,100);
            ctx3.lineTo(250,100);
            ctx3.lineTo(210,135);
            ctx3.lineTo(230,185);
            ctx3.lineTo(175,150);
            ctx3.lineTo(120,185);
            ctx3.lineTo(140,135);
            ctx3.closePath();
            ctx3.stroke();
            ctx3.fill();
        }
    }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    var theCanvas4 = document.getElementById('Canvas4');
    if (theCanvas4 && theCanvas4.getContext){
        var ctx4 = theCanvas4.getContext("2d");
        if (ctx4){
            //style
            ctx4.strokeStyle="black";
            ctx4.fillStyle="blue";
            ctx4.lineWidth=4;
            ctx4.beginPath();
            ctx4.arc(400,250,200,0,(Math.PI/180)*180,true);
            ctx4.bezierCurveTo(200,225,250,225,250,250);
            ctx4.bezierCurveTo(250,225,300,225,300,250);
            ctx4.bezierCurveTo(300,225,350,225,350,250);
            ctx4.bezierCurveTo(350,225,400,225,400,250);
            ctx4.bezierCurveTo(400,225,450,225,450,250);
            ctx4.bezierCurveTo(450,225,500,225,500,250);
            ctx4.bezierCurveTo(500,225,550,225,550,250);
            ctx4.bezierCurveTo(550,225,600,225,600,250);
            ctx4.stroke();
            ctx4.fill();
        }
    }
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
    var theCanvas5 = document.getElementById('Canvas5');
    if (theCanvas5 && theCanvas5.getContext){
     var ctx5 = theCanvas5.getContext("2d");
     if (ctx5){
        var text="It can said whatever you would like in any color.";
         ctx5.fillStyle="yellow";
         ctx5.strokeStyle="red";
         ctx5.font="30px georgia";
         ctx5.fillText(text,30,50);
         ctx5.strokeText(text,30,50);

     }
    }
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
    var theCanvas6 = document.getElementById('Canvas6');
    if (theCanvas6 && theCanvas6.getContext){
      var ctx6 = theCanvas6.getContext("2d");
      if (ctx6){
      var imgObj= new Image();
          imgObj.onload = function(){
              ctx6.drawImage(imgObj,0,0,330,109);

          };
          imgObj.src="image/logo.png";
      }
    }


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext){
     var ctx7 = theCanvas7.getContext("2d");
     if (ctx7){
         var theText="Home is where the Heart is!";
         ctx7.fillStyle="Blue";
         ctx7.strokeStyle="rgba(0,255,0,.5)";
         ctx7.font="30px georgia";
         ctx7.fillText(theText,30,25);
         ctx7.strokeText(theText,30,25);

         ctx7.fillStyle="red";
         ctx7.strokeStyle="black";
         ctx7.lineWidth=6;

         ctx7.beginPath();
         ctx7.moveTo(5,100);
         ctx7.bezierCurveTo(5,120,100,120,100,100);
         ctx7.stroke();

         ctx7.moveTo(100,100);
         ctx7.bezierCurveTo(100,120,200,120,200,100);
         ctx7.stroke();

         ctx7.lineTo(200,300);
         ctx7.lineTo(5,300);
         ctx7.lineTo(5,100);
         ctx7.lineTo(105,50);
         ctx7.lineTo(202,104);
         ctx7.moveTo(15,300);
         ctx7.lineTo(15,200);
         ctx7.lineTo(80,200);
         ctx7.lineTo(80,300);
         ctx7.moveTo(100,200);
         ctx7.lineTo(100,240);
         ctx7.lineTo(140,240);
         ctx7.lineTo(140,200);
         ctx7.lineTo(96,200);
         ctx7.stroke();

         ctx7.moveTo(18,340);
         ctx7.beginPath();
         ctx7.arc(28,250,3,0,2*Math.PI,true);
         ctx7.stroke();

     }
    }

