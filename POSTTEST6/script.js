var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("darktheme");
    if(document.body.classList.contains("darktheme")){
        icon.src ="images/sun.png";                                                
    }else{
        icon.src ="images/moon.png";                
    }            
}

var tombol = document.getElementsByClassName("tbl-pink");
   tombol[0].onclick = function(){
   alert("COOMING SOON")}