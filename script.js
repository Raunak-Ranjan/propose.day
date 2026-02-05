// Stars
const stars=document.querySelector(".stars");
for(let i=0;i<120;i++){
const s=document.createElement("div");
s.className="star";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
stars.appendChild(s);
}

// Music
const bgMusic=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

// Password
const correctPassword="forever";
const lockScreen=document.getElementById("lockScreen");
const mainContent=document.getElementById("mainContent");
const passwordInput=document.getElementById("passwordInput");
const unlockBtn=document.getElementById("unlockBtn");
const errorText=document.getElementById("errorText");

unlockBtn.onclick=()=>{
if(passwordInput.value===correctPassword){
lockScreen.style.display="none";
mainContent.style.display="block";
bgMusic.volume=0.50;
bgMusic.play();
musicBtn.innerText="🔊";
}else{
errorText.innerText="Wrong password ❤️";
}
};

// Music Toggle
musicBtn.onclick=()=>{
if(bgMusic.paused){
bgMusic.play();
musicBtn.innerText="🔊";
}else{
bgMusic.pause();
musicBtn.innerText="🔇";
}
};

// Share
document.getElementById("shareBtn").onclick=()=>{
if(navigator.share){
navigator.share({
title:"Propose Day Surprise",
text:"Someone made something special for you ❤️",
url:location.href
});
}else{
alert("Sharing not supported");
}
};

// Hints
const hints=["Something that never ends","Not a number","Always ♾️"];
let h=0;
document.getElementById("hintBtn").onclick=()=>{
document.getElementById("hintText").innerText=hints[h]||"You know it 😉";
h++;
};

// Typewriter
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
setTimeout(typeWriter,45);
}
}
typeWriter();

// Countdown
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

// NO button
const noBtn=document.getElementById("noBtn");
noBtn.onmouseover=()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*70+"%";
noBtn.style.top=Math.random()*70+"%";
};

// YES button
const yesBtn=document.getElementById("yesBtn");
yesBtn.onclick=()=>{
document.body.classList.add("glow");
createConfetti();
startHeartRain();
alert("Cutie said YES 💍❤️");
};

// Confetti
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

// Heart rain
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

// Fade on scroll
const faders=document.querySelectorAll(".fade");
function reveal(){
faders.forEach(el=>{
const r=el.getBoundingClientRect();
if(r.top < window.innerHeight-120){
el.classList.add("show");
}
});
}
window.addEventListener("scroll",reveal);
reveal();

// Hide top controls on scroll
let last=0;
const topControls=document.getElementById("topControls");
window.addEventListener("scroll",()=>{
let cur=window.scrollY;
if(cur>last){
topControls.classList.add("hide");
}else{
topControls.classList.remove("hide");
}
last=cur;
});
