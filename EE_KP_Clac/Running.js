// Write JavaScript here
    var points = document.getElementById("points");
    var level = document.getElementById("level");
    document.getElementById("level").onchange = function() {ptUpdate();};
	
    function change(bID) {
        var cID; //counter id
        var count; //counter element
        var num; //number in counter
        var max = 20; //max points in set
      //points.innerHTML="test";
      //level.value="34";
        if (bID.substr(0, 1) == "p") {
            cID = bID.replace("p", "c");
            count = document.getElementById(cID);
          	num = count.innerHTML;
            if (count.classList.contains('max5')) {
                max = 5;
            } else if (count.classList.contains('max10')) {
                max = 10;
            } else if (count.classList.contains('max15')) {
                max = 15;
            }
            if (num < max&&(points.innerHTML.valueOf()-spend(num,"p"))>-1) {
            	points.innerHTML=points.innerHTML.valueOf()-spend(num,"p");
                num++;
            }
        } else if (bID.substr(0, 1) == "m") {
            cID = bID.replace("m", "c");
            num = document.getElementById(cID).innerHTML;
            if (num > 0) {
              points.innerHTML=points.innerHTML.valueOf()-spend(num,"m");
                num--;
            }
        }
        document.getElementById(cID).innerHTML = num;
    }

    //returns cost based on current points in skill and + or -
    function spend(current, type) {
        var cost=0;
        if (type == "p") {
            switch (true) {
            case (current < 5):
                cost = 1;
                break;
            case (current > 4):
                cost = 2;
                break;
            case (current > 9):
                cost = 3;
                break;
            case (current > 14):
                cost = 4;
                break;
            }
            return cost;
        } else if (type == "m") {
            switch (true) {
            case (current < 6):
                cost = 1;
                break;
            case (current > 5):
                cost = 2;
                break;
            case (current > 10):
                cost = 3;
                break;
            case (current > 15):
                cost = 4;
                break;
            }
            return (cost * -1);
        }
    }

	//resets all skill points and updates current points
    function ptUpdate() {
      $("count").html(0);
      $("#points").text($("#level").val());
    }
