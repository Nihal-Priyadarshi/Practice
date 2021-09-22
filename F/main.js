var main = document.querySelector('#main');



for(var i=0; i<5; i++) {
    var d = document.createElement('div');
    d.style.border = "2px solid blue";
    d.style.height = "25px";
    d.style.width = "50px";
    var h = document.createElement('h1');
    h.innerHTML = "hii";
    d.appendChild(h);
    main.appendChild(d);

    document.write("<br>");

}
