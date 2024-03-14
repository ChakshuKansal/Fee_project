var mq = window.matchMedia("(max-width: 900px)");
function handleQueryChange(mq) {
    if (mq.matches) {
        // Change JavaScript behavior for small screens
        console.log("Small screen detected");
        x.style.right="-100%";
        x.style.top="65px";
    } else {
        x.style.top="-100%";
        x.style.right=0;
        // Change JavaScript behavior for larger screens
        console.log("Large screen detected");
    }
}
var x=document.getElementById("dropbox");

// // Attach the callback function to the media query
mq.addListener(handleQueryChange);

handleQueryChange(mq);

function shownew(){
   
    var y=document.getElementById("new");
        y.style.opacity=1;
        if (mq.matches) {
            console.log("HELLO");
            console.log("Small screen detected");
            x.style.top="65px";
            x.style.right=0;
            x.style.height="100vh";
        } else {
            // Change JavaScript behavior for larger screens
            x.style.top="65px";
            x.style.height="400px";
            console.log("Large screen detected");
        }
        y.style.visibility="visible";

        var a=document.getElementById("women");
        var b=document.getElementById("men");
        var c=document.getElementById("kids");
        var d=document.getElementById("techo");
        var e=document.getElementById("Sports");
        var f=document.getElementById("outlet");
        a.style.opacity=0;
        b.style.opacity=0;
        c.style.opacity=0;
        d.style.opacity=0;
        e.style.opacity=0;
        f.style.opacity=0;
        a.style.visibility="hidden";
        b.style.visibility="hidden";
        c.style.visibility="hidden";
        d.style.visibility="hidden";
        e.style.visibility="hidden";
        f.style.visibility="hidden";

}
function showwomen(){

    var y=document.getElementById("women");
    y.style.opacity=1;
    if (mq.matches) {
        console.log("HELLO");
        console.log("Small screen detected");
        x.style.top="65px";
        x.style.right=0;
        x.style.height="100vh";
    } else {
        // Change JavaScript behavior for larger screens
        x.style.top="65px";
        x.style.height="420px";
        console.log("Large screen detected");
    }
        y.style.visibility="visible";


    var a=document.getElementById("new");
    var b=document.getElementById("men");
    var c=document.getElementById("kids");
    var d=document.getElementById("techo");
    var e=document.getElementById("Sports");
    var f=document.getElementById("outlet");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
}
function showmen(){
    var y=document.getElementById("men");
    
    y.style.opacity=1;
        if (mq.matches) {
            console.log("HELLO");
            console.log("Small screen detected");
            x.style.top="65px";
            x.style.right=0;
            x.style.height="100vh";
        } else {
            // Change JavaScript behavior for larger screens
            x.style.top="65px";
            x.style.height="420px";
            console.log("Large screen detected");
        }
        y.style.visibility="visible";


    var a=document.getElementById("new");
    var b=document.getElementById("women");
    var c=document.getElementById("kids");
    var d=document.getElementById("tech");
    var e=document.getElementById("Sports");
    var f=document.getElementById("outlet");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
}
function showkids(){
    var y=document.getElementById("kids");
    
    y.style.opacity=1;
    if (mq.matches) {
        console.log("HELLO");
        console.log("Small screen detected");
        x.style.top="65px";
        x.style.right=0;
        x.style.height="100vh";
    } else {
        // Change JavaScript behavior for larger screens
        x.style.top="65px";
        x.style.height="560px";
        console.log("Large screen detected");
    }
        y.style.visibility="visible";


    var a=document.getElementById("new");
    var b=document.getElementById("women");
    var c=document.getElementById("men");
    var d=document.getElementById("techo");
    var e=document.getElementById("Sports");
    var f=document.getElementById("outlet");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
}
function showtech(){
    var x=document.getElementById("dropbox");
    var y=document.getElementById("techo");
    
    y.style.opacity=1;
    if (mq.matches) {
        console.log("HELLO");
        console.log("Small screen detected");
        x.style.top="65px";
        x.style.right=0;
        x.style.height="100vh";
    } else {
        // Change JavaScript behavior for larger screens
        x.style.top="65px";
        x.style.height="390px";
        console.log("Large screen detected");
    }
        y.style.visibility="visible";

    var a=document.getElementById("new");
    var b=document.getElementById("women");
    var c=document.getElementById("men");
    var d=document.getElementById("kids");
    var e=document.getElementById("Sports");
    var f=document.getElementById("outlet");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";

}

function showsport(){
    var x=document.getElementById("dropbox");
    var y=document.getElementById("Sports");
    
    y.style.opacity=1;
    if (mq.matches) {
        console.log("HELLO");
        console.log("Small screen detected");
        x.style.top="65px";
        x.style.right=0;
        x.style.height="100vh";
    } else {
        // Change JavaScript behavior for larger screens
        x.style.top="65px";
        x.style.height="360px";
        console.log("Large screen detected");
    }
        y.style.visibility="visible";


    var a=document.getElementById("new");
    var b=document.getElementById("women");
    var c=document.getElementById("men");
    var d=document.getElementById("kids");
    var e=document.getElementById("techo");
    var f=document.getElementById("outlet");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
}
function showoutlet(){
    var x=document.getElementById("dropbox");
    var y=document.getElementById("outlet");
    
    y.style.opacity=1;
    if (mq.matches) {
        console.log("HELLO");
        console.log("Small screen detected");
        x.style.top="65px";
        x.style.right=0;
        x.style.height="100vh";
    } else {
        // Change JavaScript behavior for larger screens
        x.style.top="65px";
        x.style.height="600px";
        console.log("Large screen detected");
    }
        y.style.visibility="visible";


    var a=document.getElementById("new");
    var b=document.getElementById("women");
    var c=document.getElementById("men");
    var d=document.getElementById("kids");
    var e=document.getElementById("techo");
    var f=document.getElementById("Sports");
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;

    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
}

function normal(){

    var box=document.getElementById("dropbox");
    var a=document.getElementById("new");
    var b=document.getElementById("men");
    var c=document.getElementById("kids");
    var d=document.getElementById("techo");
    var e=document.getElementById("Sports");
    var f=document.getElementById("outlet");
    var g=document.getElementById("women");

    box.style.top="-100%";
    a.style.opacity=0;
    b.style.opacity=0;
    c.style.opacity=0;
    d.style.opacity=0;
    e.style.opacity=0;
    f.style.opacity=0;
    g.style.opacity=0;
    a.style.visibility="hidden";
    b.style.visibility="hidden";
    c.style.visibility="hidden";
    d.style.visibility="hidden";
    e.style.visibility="hidden";
    f.style.visibility="hidden";
    g.style.visibility="hidden";




}
