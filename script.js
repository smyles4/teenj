
console.log("ok");
let beans= document.querySelector(".beans")
let haircolor =document.querySelector(".haircolor");
let favoritecolor =document.querySelector(".favoritecolor");
let button = document.querySelector("button");
let message = document.querySelector(".message");
button.onclick = function() {
    console.log("button check");
let hair = haircolor.value;
 console.log(hair);
 let color = favoritecolor.value;
  console.log("favoritecolor");

if(hair==="brown" && color ==="pink"){
    console.log("cookie")
 message.innerHTML = "you like cookies"

beans.style.display = "none";
 
  } else if (hair==="brown" && color ==="pink"){
    console.log("cookie")
    message.innerHTML = "you like cookies"
  } else if (hair==="black" && color ==="blue"){
    console.log("cool beans")
    message.innerHTML = " your a cool bean"
     "beans.png"
  }else if (hair==="blonde" && color ==="yellow"){
    console.log("sunflower")
    message.innerHTML = "sunflower hero"
  }
  
};
