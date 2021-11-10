// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("result").value += value;
   }
   // This function evaluates the expression and return result
   function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }
   // This function inverse the sign of the input and return result
   function inverse(){
    var p = document.getElementById("result").value;
    var q = p* (-1)
    document.getElementById("result").value = q;
   }


   //Function to move the calculator by mouse
dragElement(document.getElementById("cal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id )) {

    document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function myFunction() {
    var x = document.getElementById("cal");
      x.style.visibility = "visible";
     
  }
  function FunctionClose() {
    document.getElementById("cal").style.visibility="hidden";
  }
  function Maxmin() {
      if(document.getElementById("cal").offsetWidth <700)
      {
       document.getElementById("cal").style='width:700px;height:600px';
      }
      else{
        document.getElementById("cal").style='width:350px;height:450px';
      }
  }
  function Mini(){
    document.getElementById("cal").style='width:0px;height:0px';
    document.getElementsByClassName("button").style='width:0px;height:0px';
    document.getElementById("top").style='width:0px;height:0px';

    // document.getElementById("cal").style.visibility="hidden";
    

}



