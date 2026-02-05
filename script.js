/* Stars */
const stars=document.querySelector(".stars");
for(let i=0;i<120;i++){
const s=document.createElement("div");
s.className="star";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
stars.appendChild(s);
}

/* Password */
const correctPassword="forever";
const lockScreen=document.getElementById("lockScreen");
const mainContent=document.getElementById("mainContent");
const passwordInput=document.getElementById("passwordInput");
const unlockBtn=document.getElementById("unlockBtn");
const errorText=document.getElementById("errorText");

const bgMusic = document.getElementById("bgMusic");

unlockBtn.onclick = () => {

  if(passwordInput.value === correctPassword){

    lockScreen.style.display = "none";
    mainContent.style.display = "block";

    // 🎵 Set volume to 65%
    bgMusic.volume = 0.65;

    // ▶ Play music after unlock
    bgMusic.play();

  } else {
    errorText.innerText = "Wrong password ❤️";
  }

};

/* Hints */
const hints=[
"Something that never ends",
"Not a number",
"It means always ♾️"
];
let hintIndex=0;
document.getElementById("hintBtn").onclick=()=>{
document.getElementById("hintText").innerText=
hints[hintIndex] || "You already know it 😉";
hintIndex++;
};

/* Typewriter */
const text=`From the day you came into my life,
everything changed.

You became my happiness.
You became my peace.
You became my home.

So today I have one question...`;

let i=0;
const typeText=document.getElementById("typeText");

function typeWriter(){
if(i<text.length){
typeText.innerHTML+=text.charAt(i);
i++;
setTimeout(typeWriter,50);
}
}
typeWriter();

/* Countdown */
const revealBtn=document.getElementById("revealBtn");
const countdown=document.getElementById("countdown");
const finalMessage=document.getElementById("finalMessage");

revealBtn.onclick=()=>{
revealBtn.style.display="none";
let t=5;
countdown.innerText=t;
const timer=setInterval(()=>{
t--;
countdown.innerText=t;
if(t===0){
clearInterval(timer);
countdown.style.display="none";
finalMessage.style.display="block";
}
},1000);
};

/* No button run */
const noBtn=document.getElementById("noBtn");
noBtn.onmouseover=()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
};

/* YES button */
const yesBtn=document.getElementById("yesBtn");

yesBtn.onclick=()=>{
document.body.classList.add("glow");
createConfetti();
startHeartRain();
alert("Cutie said YES 💍❤️");
};

/* Confetti */
function createConfetti(){
for(let i=0;i<60;i++){
const c=document.createElement("div");
c.className="confetti";
c.innerText="🎉";
c.style.left=Math.random()*100+"vw";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}

/* Heart rain */
function startHeartRain(){
const rain=setInterval(()=>{
const h=document.createElement("div");
h.className="heart";
h.innerText="💗";
h.style.left=Math.random()*100+"vw";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
},200);

setTimeout(()=>clearInterval(rain),6000);
}

