document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hidden").className = "hidden";
});
function open_menu(){
document.getElementById("menu").className = "menu";
document.getElementById("open").className = "hidden";
document.getElementById("hidden").className = "button";
document.getElementsByClassName("menu_div")[0].id = "open_now";
}
function hidden_menu(){
    document.getElementById("menu").className = "hidden";
    document.getElementById("hidden").className = "hidden";
    document.getElementById("open").className = "button";
    document.getElementsByClassName("menu_div")[0].id = "close_now";
    }
    function open_link(i) {
        top.location.href = i
    }