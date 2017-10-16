var IUSI0001= {
    
    init: function(){
        var box = document.createElement("div");
        box.textContent = "IUSI0001";
        let boxes = document.getElementById('boxes');
        boxes.appendChild(box);
        div.addEventListener('click' , colorDiv);
        div.addEventListener('mouseover' , Highlight);
        div.addEventListener('mouseout' , undoHighlight);
        function colorDiv(ev){
            let target = ev.currentTarget;
            target.style.backgroundColor = "blue";
            target.style.borderColor = "red";
        }
        function Highlight(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }

        function undoHighlight(ev) {
            ev.currentTarget.classList.toggle('highlight');
        }
    }
 
};