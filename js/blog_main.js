function gotop() {
    window.scrollTo(
        { top: 0, behavior: "smooth" }

    );
}
function open_window(i) {
if (i) {
    window.open(i, "_blank", "width=500,height=500");
    console.log(`${i}を開きました`)
} else{
    console.warn("内容が入力されていません")
    alert("内容が入力されていません")
}
}