function gotop() {
    window.scrollTo(
        { top: 0, behavior: "smooth" }

    );
}

function open_tyuui(){
document.getElementById("tyuui").className = "tyuui";
document.getElementById("tyuui_open").className = "hidden";
document.getElementById("tyuui_close").className = "button";
//document.getElementsByClassName("menu_div")[0].id = "open_now";
}
function hidden_tyuui(){
    document.getElementById("tyuui").className = "hidden";
    document.getElementById("tyuui_close").className = "hidden";
    document.getElementById("tyuui_open").className = "button";
//    document.getElementsByClassName("menu_div")[0].id = "close_now";
    }