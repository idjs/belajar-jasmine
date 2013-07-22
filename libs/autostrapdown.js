(function(global){
    var md = document.getElementById("md-content"),
        ajax = global.ajax;
    ajax.get("README.md", function(text){
        md.innerText = text;
    });
})(this);