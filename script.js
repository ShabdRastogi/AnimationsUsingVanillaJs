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

ctx.font = '50px Arial';

ctx.fillText("Hello World" , 70 , 150)
ctx.strokeText("Hello World",70,250)