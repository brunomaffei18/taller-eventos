document.addEventListener("DOMContentLoaded", function(){
    const btnDiv = document.getElementById('btnDiv');

    btnDiv.addEventListener("click", function (e) {
        alert("Hola! Soy el div");
       
    })
    const btn = document.getElementById('mybtn')

    btn.addEventListener("click", function(e){
        alert("Hola!");
        e.stopPropagation()
    })

});