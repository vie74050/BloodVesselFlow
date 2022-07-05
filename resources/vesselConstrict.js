
 function SetFlow(n=1) {

    var v1 = document.getElementById("Rect-inner"), 
        v2 = document.getElementById("Circle-inner");
    
    if (n==1) {
        v1.classList.remove("small");
        v2.classList.remove("small");
        
    }else {
        v1.classList.add("small");
        v2.classList.add("small");
    }

    console.log(v1, v2, n);
}
