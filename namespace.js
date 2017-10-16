var IUSI0001 = {
    
    init: function() {
        var box = document.createElement("div");
        box.classList.add("box");
        box.textContent = "IUSI0001";
        var AllBoxes = document.getElementById("boxes");
        AllBoxes.appendChild(box);
        box.addEventListener("click" , colorDiv);
        box.addEventListener("mouseover" , highlight);
        box.addEventListener("mouseout" , highlight);
        function colorDiv(ev) {
            box.style.backgroundColor = "white";
            box.style.borderColor = "blue";
        }
        function highlight(ev) {
            box.classList.toggle("highlight");
        }
    }
 
};
