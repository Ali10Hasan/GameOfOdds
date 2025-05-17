let btn = document.querySelector(".btn1");
    let ele = document.createElement("div");
    ele.classList.add("rules");
    let image = document.createElement("img");
    let rock=document.querySelector(".ro");
    let paper=document.querySelector(".pa");
    let SCISSORS=document.querySelector(".sc");
    let lizard=document.querySelector(".li");
    let spock=document.querySelector(".sp");
    let images=document.querySelectorAll(".image");
    let btn1=document.createElement("button");
    let num1=document.querySelector(".number1");
    let score;
    console.log(btn);
    image.src = '/images/image-rules-bonus.svg';
    ele.appendChild(image);
    ele.style.width = 'fit-content';
    ele.style.position = 'absolute';
    ele.style.bottom = '170px';
    ele.style.left = '600px';
    ele.style.backgroundColor = 'white';
    ele.style.scale = '1.4';
    ele.style.zIndex = '1000';

    ele.style.display = 'none';  
   
   
   
    let result;
    let container =document.querySelector(".container");
    function Test(i){
        switch(i){
            case 1:return "SCISSORS";
            break;
            case 2:return "spock";
            break;
            case 3:return "paper";
            break;
            case 4:return "lizard";
            break;
            case 5:return "rock";
            break;
        }
    }

    let tmpe;
    btn.addEventListener('click', function() {
  
        if (ele.style.display === 'none') {
            ele.style.display = 'flex'; 
            ele.style.justifyContent = 'center';
            ele.style.alignItems = 'center'; 
        } else {
            ele.style.display = 'none'; 
        }
    });
    container.appendChild(ele);
    function rand(){
        return Math.floor(Math.random()*5)+1;
    }
    num1.textContent="";
    num1.textContent=localStorage.getItem("score")
images.forEach((e,i)=>{
    e.addEventListener('click',function run(){

          i++;
        result= Test(i);
    if(result==="SCISSORS"){
        tmpe=SCISSORS.src ;
        console.log(tmpe);
    }
    else if(result==="spock"){
        tmpe=spock.src;
    }     
    else if(result==="paper"){
        tmpe=paper.src;
    }     
    else if(result==="lizard"){
        tmpe=lizard.src;
    }     
    else if(result==="rock"){
        tmpe=rock.src;
    }
    let divpre=document.createElement("div");
    let divimage=document.createElement("div");
    let divimage1=document.createElement("div");
    divpre.style.position='relative';
    divimage.style.position='absolute';
    divpre.style.top='150px';
    divpre.style.left='550px';
    divimage.classList.add("image");
    divpre.style.width='150px';
    divpre.style.height='150px';
    divpre.style.borderRadius='50%';
    divimage.style.width='100px';
    divimage.style.height='100px';
    divimage.style.backgroundColor='white';
    divimage1.style.width='100px';
    divimage1.style.height='100px';
    divimage1.style.backgroundColor='white';
    let imgElement = document.createElement("img");
    divimage.appendChild(imgElement);
    
        imgElement.src = tmpe;
        container.innerHTML = "";
     if(result==="SCISSORS"){
        divpre.style.backgroundColor="hsl(39, 89%, 49%) ";
    }
    else if(result==="spock"){
         divpre.style.backgroundColor=" hsl(189, 59%, 53%) ";
    }   
    else if(result==="paper"){
          divpre.style.backgroundColor="  hsl(230, 89%, 62%) ";
    }     
    else if(result==="lizard"){
         divpre.style.backgroundColor=" hsl(261, 73%, 60%) ";
    }     
    else if(result==="rock"){
        divpre.style.backgroundColor="hsl(349, 71%, 52%)";
    }
    divpre.appendChild(divimage);
    // divpre.appendChild(divimage1);
     
       container.innerHTML = `
            <header>
                <div class="box">
                    <div class="radio">
                        <h1 style="margin-top: -10px;">ROCK</h1>
                        <h1 style="margin-top: -12px;">PAPER</h1>
                        <h1 style="margin-top: -12px;">SCISSORS</h1>
                        <h1 style="margin-top: -12px;">LIZARD</h1>
                        <h1 style="margin-top: -12px;">SPOCK</h1>
                    </div>
                    <div class="score">
                        <p class="scoresub">SCORE</p>
                        <span class="number" style="font-size:60px;color: rgba(0, 0, 0, 0.788);margin-left:50px">${score}</span>
                    </div>
                </div>
            </header>
            <p class="userp" style="width:70%;height:100%; display:flex; justify-content:center; position:absolute;top:300px; left:35px; color:white;font-size:25px">YOU PICKED</p>
            <p class="computerp" style="width:70%;height:100%; display:flex; justify-content:center; position:absolute;top:300px; left:375px; color:white;font-size:25px">THE HOUSE PICKED</p>
        `;
        
     let num=document.querySelector(".number");
    // num.textContent="";
    num.textContent=score; 
    container.appendChild(divpre);
     divimage1.style.width='120px'
     divimage1.style.height='120px'
     divimage1.style.marginLeft='900px';
     divimage1.style.marginTop='20px';
     divimage1.style.borderRadius='50%';
     let divimage1pre=document.createElement("div");
     divimage1pre.classList.add("computer");
     divpre.classList.add("user");
     divimage1pre.style.width='150px';       
     divimage1pre.style.height='150px';
     divimage1pre.style.borderRadius='50%';       
     let random=rand();
     let result1=Test(random);     
     let temp1;
     let imgcomputer=document.createElement("img");
     if (result1 === "SCISSORS") {
    divimage1pre.style.backgroundColor = "hsl(39, 89%, 49%)";
     temp1=SCISSORS.src   
} else if (result1 === "spock") {
    divimage1pre.style.backgroundColor = "hsl(189, 59%, 53%)";
     temp1=spock.src  
} else if (result1 === "paper") {
    divimage1pre.style.backgroundColor = "hsl(230, 89%, 62%)";
     temp1=paper.src  
} else if (result1 === "lizard") {
    divimage1pre.style.backgroundColor = "hsl(261, 73%, 60%)";
     temp1=lizard.src  
} else if (result1 === "rock") {
    divimage1pre.style.backgroundColor = "hsl(349, 71%, 52%)";
     temp1=rock.src  
}
divimage1pre.style.position='relative';
divimage1pre.style.left='900px'


imgcomputer.src=temp1;
imgcomputer.style.margin='35px'
divimage1.appendChild(imgcomputer);
divimage1.style.position='absolute';
divimage1.style.top='0px'
divimage1.style.right='0px'
divimage1.style.margin='15px'
divimage1pre.appendChild(divimage1);
container.appendChild(divimage1pre);
let paraghraph=document.createElement("p");
let text;
// text.style.fontSize='50px';
if(result==="rock" && (result1==="lizard" || result1==="SCISSORS")){
     text=document.createTextNode("You Win");
    paraghraph.appendChild(text);
}
else if(result==="lizard" && (result1==="spock" || result1==="paper")){
       text=document.createTextNode("You Win");
    paraghraph.appendChild(text);
}
else if(result==="spock" && (result1==="SCISSORS" || result1==="rock")){
       text=document.createTextNode("You Win");
    paraghraph.appendChild(text);
}
else if(result==="SCISSORS" && (result1==="paper" || result1==="lizard")){
       text=document.createTextNode("You Win");
    paraghraph.appendChild(text);
}
else if(result==="paper" && (result1==="rock" || result1==="spock")){
     text=document.createTextNode("You Win");
    paraghraph.appendChild(text);
}

else if(result===result1){
      text=document.createTextNode("You Draw");
    paraghraph.appendChild(text);
}else{
     text=document.createTextNode("You Lose");
    paraghraph.appendChild(text);
}
//  score=num.textContent;
// text.style.fontSize='50px !important';

paraghraph.classList.add("txt");
let empty=document.createElement("div");
let text1=document.createTextNode("PLAY AGAIN After 3 seconds");
btn1.classList.add("btn1");
btn1.appendChild(text1);
empty.style.height='50px';
btn1.style.width='150px';
btn1.style.backgroundColor='white';
btn1.style.color='black';
btn1.style.borderRadius='10px';
btn1.style.fontWeight='bold';
btn1.style.marginRight='820px';
paraghraph.style.marginLeft='740px';
paraghraph.style.marginTop='-130px';
paraghraph.style.color='white';
paraghraph.style.fontWeight='bold';
paraghraph.style.fontSize='30px';
paraghraph.appendChild(empty);
container.appendChild(paraghraph);
container.appendChild(btn1);

score=parseInt(localStorage.getItem("score"))||0;
// استخدام setTimeout لإعادة تحميل الصفحة وتحديث score
  if (text.textContent === "You Win") {
        score++;
    } else if (text.textContent === "You Lose") {
        score--;
    }else{
        score+0;
    }

     // تحديث num بعد تغيير score
    
    num.textContent = +score;
    // تخزين القيمة الجديدة في localStorage
    localStorage.setItem('score', score);
     num1.textContent="";
    num1.textContent= +score; 
    setTimeout(function() {
    // تحقق من النص قبل إعادة تحميل الصفحة
   
   

    // إعادة تحميل الصفحة
    window.location.reload();
    
}, 3000);
// console.log(num1);
   
    // num1.textContent= +score;    
   

    
      
    //   container.style.display='flex';
    // container.style.justifyContent='space-eve';          
    })
   
    
})

