(function(global){
    var md = document.getElementById("md-content"),
        ajax = global.ajax;
    ajax.get("README.md", function(text){
        console.log("yoo");
        md.innerText = text;
    });
})(this);