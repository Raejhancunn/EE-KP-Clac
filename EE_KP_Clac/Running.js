// Write JavaScript here
var points=document.getElementById(points);
var level;
function change(bID){
  var cID; //counter id
  var count; //counter element
  var num; //number in counter
  var max=20; //max points in set
  if(bID.substr(0,1)=="p"){
    cID = bID.replace("p","c");
    count = document.getElementById(cID);
    if(count.classList.contains('max5')){
      max=5;
    } else
    if(count.classList.contains('max10')){
      max=10;
    } else
    if(count.classList.contains('max15')){
      max=15;
    }
    num = count.innerHTML;
    if(num<max){
      num++;
    }
  } else
  if(bID.substr(0,1)=="m"){
    cID = bID.replace("m","c");
    num = document.getElementById(cID).innerHTML.valueOf();
    if(num>0){
      num--;}
  }
 document.getElementById(cID).innerHTML=num;
}

//returns cost based on current points in skill and + or -
function spend(current, type){
  var cost;
  if(type=="p"){
    switch(true){
      case(current<5): cost=1; break;
      case(current>4): cost=2; break;
      case(current>9): cost=3; break;
      case(current>14): cost=4; break;
    }
    return (cost*-1);
  } else
  if(type=="m"){
    switch(true){
      case(current<6): cost=1; break;
      case(current>5): cost=2; break;
      case(current>10): cost=3; break;
      case(current>15): cost=4; break;
    }
    return cost;
  }
}