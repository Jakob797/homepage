//settings
const config = {
    "elements": {
        "cardinal-system": false,
    },
    "bg":{
        "activated": true,
        "imgages": ["1.jpg", "2.jpeg"]
    }
}

//funktions

function cardinal_system(){
    window.open("/cardinal.html")
}

function downloads(){
    window.location.href = "/downloads.html";
}

let windowW;

//config
if (config.bg.activated == true){
    let img = config.bg.imgages[1]

    document.body.style.backgroundImage = "url('../img/bg/"+img+"')";
}


//windowssize
function reload_windowWidth(){if(windowWidth < 1000){
    

}}
let windowWidth = window.innerWidth;
reload_windowWidth()
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
  reload_windowWidth()
});
