const canvas = document.getElementById('animation-canvas')

const ctx = canvas.getContext('2d')

if(ctx){
  console.log("Canvas ready to draw")
}else{
  console.log("Canvas not ready")
}
//SOLID RECTANGLE
// ctx.fillstyle = "red";
// ctx.fillRect(0,30,150,150)

//STROKE RECTANGLE
// ctx.strokeStyle = "green";
// ctx.lineWidth = 2;
// ctx.strokeRect(10,30,150,200);

//LINES
// ctx.beginPath()
// ctx.moveTo(10,20)
// ctx.lineTo(30,60)
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 2;
// ctx.stroke()

//CIRCLE
// ctx.arc(50,50,50,0,Math.PI * 2);
// ctx.fillStyle = 'blue';
// ctx.fill();

//TRIANGLE
// ctx.beginPath();
// ctx.moveTo(30, 30);
// ctx.lineTo(45, 4);
// ctx.lineTo(90, 80);
// ctx.closePath()
// ctx.fillStyle = 'blue';
// ctx.fill();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 3;
// ctx.stroke();

//HOUSE

// ctx.beginPath()
// ctx.moveTo(120,150)
// ctx.lineTo(300,150)
// ctx.lineTo(200,20)
// ctx.closePath()
// ctx.stroke()
// ctx.fillStyle = 'brown';
// ctx.fill()
// ctx.beginPath()
// ctx.moveTo(140 , 150)
// ctx.lineTo(140, 250 )
// ctx.lineTo(280,250)
// ctx.lineTo(280,150)
// ctx.closePath();
// ctx.stroke()
// ctx.fillStyle= 'yellow'
// ctx.fill()


// const linearGradient = ctx.createLinearGradient(100,150,100,500)

// linearGradient.addColorStop(0,'yellow');
// linearGradient.addColorStop(1,'red');

// ctx.fillStyle = linearGradient;
// ctx.fillRect(100,200,500,500);

//SUN

//const radialGradient = ctx.createRadialGradient(100,100,20,100,100,60);
// const linearGradient = ctx.createLinearGradient(120,150,120,280)

// linearGradient.addColorStop(0,'orange')
// linearGradient.addColorStop(1,'white')


// radialGradient.addColorStop(0,'yellow')

// radialGradient.addColorStop(1,'red')
// ctx.beginPath()
// ctx.arc(100,100,60,0,Math.PI *2)
// ctx.strokeStyle = 'black'
// ctx.stroke()

// ctx.fillStyle = radialGradient;
// ctx.fill()

// ctx.beginPath();
// ctx.fillStyle = linearGradient;
// ctx.fillRect(40,160,120,280)

//SHADOWS

// ctx.save();
// const linearGradient = ctx.createLinearGradient(100,100,200,200)
// linearGradient.addColorStop(0,'lightblue');
// linearGradient.addColorStop(1,'blue');

// ctx.shadowColor = 'rgba(0,0,0,0.5)';
// ctx.shadowBlur = 15;
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;

// ctx.fillStyle = linearGradient
// ctx.fillRect(100,100,200,200)

// ctx.restore()

//TEXTS

// ctx.font = '50px Arial';

// ctx.fillText("Hello World" , 70 , 150)
// ctx.strokeText("Hello World",70,250)

// ctx.moveTo(0,canvas.height/2)
// ctx.lineTo(canvas.width,canvas.height/2)
// ctx.moveTo(canvas.width/2,0)
// ctx.lineTo(canvas.width/2,canvas.height)


// ctx.stroke()
// ctx.save()
// ctx.textAlign = 'center';  // used to change the anchor point to center HORIZONTALLY
// ctx.textBaseline = 'middle';//used to center the anchor point VERTICALLY

// ctx.font = '50px Arial'
// ctx.shadowColor = 'blue'
// ctx.shadowOffsetX = 0
// ctx.shadowOffsetY = 0
// ctx.shadowBlur = 15
// ctx.fillText("Hello", canvas.width/2 ,canvas.width/2)
// ctx.fill()

// ctx.restore()

//Drawing the Images
// const bg = new Image();
// bg.src = './image/background.jpg'

// bg.onload = ()=> {
//   ctx.drawImage(bg,0,0,canvas.clientWidth,canvas.height);
//   const img = new Image();
//   img.src = './image/character.png';
//   img.onload = ()=> {    //to load the image before running the script
//   ctx.drawImage(img,10,180,80,80)
//   }

// }


//ANIMATIONS 
    //Bounce

let x = 50;
let y = 50;
let speedX = 2;
let speedY =2;


function animate(){
  ctx.clearRect(0,0,canvas.clientWidth,canvas.height)
  ctx.fillStyle = 'green';
  ctx.fillRect(x,y,70,50)
  if(x+70>=canvas.width || x<0){
    speedX = -speedX;
  }
  if(y<=0 || y+50>= canvas.height){
    speedY = -speedY;
  }

  x+=speedX;
  y+=speedY;
  requestAnimationFrame(animate);
}

animate();


// let x = 60;
// let y = 70;
// let speedX = 1;
// let speedY = -1;

// function ballBounce(){
//   ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
//   ctx.beginPath();
//   ctx.arc(x,y,40,0,Math.PI *2);
//   ctx.fillStyle = 'purple';
//   ctx.fill();
//   ctx.closePath();

//   if(x+40 >= canvas.width || x-40<= 0 ){
//     speedX = -speedX;
//   }
//   if(y-40<=0 || y+40 >=canvas.height){
//     speedY = -speedY;
//   }

//   x += speedX;
//   y += speedY;
//   requestAnimationFrame(ballBounce);
// }

// ballBounce()

    //TRANSFORM


// let angle = 0;
// let grow = true;
// let scale = 1
// function transform(){
//   ctx.clearRect(0,0,canvas.clientWidth,canvas.height);

//   ctx.save();
//   ctx.translate(canvas.clientWidth/2,canvas.height/2);//anchor point centered
//   ctx.rotate(angle);
//   ctx.scale(scale,scale)
//   ctx.fillStyle = 'green'
//   ctx.fillRect(-50,-50,100,100)
  
//   ctx.restore();
//   angle+=0.05
//   if (grow) {
//     scale += 0.02;
//     if (scale >= 1.5) {
//       grow = false;
//     }
//   } else {
//     scale -= 0.02;
//     if (scale <= 0.5) {
//       grow = true;
//     }
//   }
  

//   requestAnimationFrame(transform)

// }

// transform()