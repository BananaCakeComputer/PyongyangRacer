var ruffle = document.createElement("div");
ruffle.style.cssText = 'width: 200px; background: #37528C; position: fixed; top: 10px; right: 10px; border-radius: 3px; border: #fff 1px solid;';
ruffle.innerHTML = '<p style="font-size: 15px; color: #ffad33; padding: 12px;">使用<img style="height: 15px" src="https://ruffle.rs/assets/logo.svg"/>驱动Flash</p><button id="startRuffle" style="background: #ffad33; border-color: rgba(0,0,0,.1); color: #454d55; margin: 0 0 12px 12px; padding: 4px 12px; border-radius: 0.25rem;">使用</button><button id="closeRuffle" style="background: #37528C; border-color: rgba(0,0,0,.1); color: #ffad33; margin: 0 0 12px 12px; padding: 4px 12px; border-radius: 0.25rem;">关闭</button>';
document.getElementById("wrapper").appendChild(ruffle);
function closeRuffle(){
    ruffle.remove();
}
document.getElementById("startRuffle").onclick = function(){
    var script = document.createElement("script");
    script.setAttribute("src", "https://unpkg.com/@ruffle-rs/ruffle");
    document.body.appendChild(script);
    closeRuffle();
}
document.getElementById("closeRuffle").onclick = function(){
    closeRuffle();
}