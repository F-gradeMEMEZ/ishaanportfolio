const menuIcon =document.querySelector("#menu-icon");
const navbar=document.querySelector(".navbar");
const twitter = document.querySelector(".twitter")
const  youtube= document.querySelector(".youtube")
const  insta= document.querySelector(".insta")
const  discord= document.querySelector(".discord")
const twitter2 = document.querySelector("#twitter2")
const  youtube2= document.querySelector("#youtube2")
const  insta2= document.querySelector("#insta2")
const  discord2= document.querySelector("#discord2")


menuIcon.onclick= ()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');}

youtube.onclick=()=>{
  window.location = "https://www.youtube.com/@casagoldnova"

}
insta.onclick=()=>{
  window.location = "https://www.instagram.com/ishaan._.dwivedi/"
}
discord.onclick=()=>{
  window.location = "https://discord.com/channels/1088011449177210881/1088011450947211275"
}
twitter.onclick=()=>{
  alert("currently unavailabile")
}

youtube2.onclick=()=>{
  window.location = "https://www.youtube.com/@casagoldnova"

}
insta2.onclick=()=>{
  window.location = "https://www.instagram.com/ishaan._.dwivedi/"
}
discord2.onclick=()=>{
  window.location = "https://discord.com/channels/1088011449177210881/1088011450947211275"
}
twitter2.onclick=()=>{
  alert("currently unavailabile")
}


export.default = series(scssTask, jsTask, browserSyncServe, watchTask);
export.default = series(scssTask,jsTask)