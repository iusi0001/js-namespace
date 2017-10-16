var IUSI0001= {
    
    init: function(){
        var box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "IUSI0001";
        let boxes = document.getElementById('boxes');
        boxes.appendChild(box);
        div.addEventListener('click' , colorDiv);
        div.addEventListener('mouseover' , highlight);
        div.addEventListener('mouseout' , highlight);
        function colorDiv(ev){
            let target = ev.currentTarget;
            target.style.backgroundColor = "blue";
            target.style.borderColor = "red";
        }
        function highlight(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
 
};
