

// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    x:0, 
    y:0,
    travelLog: [[0,0]]

}
// ======================
function turnLeft(rover){
    console.log("turnLeft was called!");
    if (rover.direction === "N"){
        rover.direction = "W";
    }else if (rover.direction === "W"){
        rover.direction = "S";
    }else if (rover.direction === "S"){
        rover.direction = "E";
    }else if (rover.direction === "E"){
        rover.direction = "N"
    }
    console.log(rover.direction)
  }
  
function turnRight(rover){
    console.log("turnRight was called!");
    if (rover.direction === "N"){
        rover.direction = "E";
    }else if (rover.direction === "E"){
        rover.direction = "S";
    }else if (rover.direction === "S"){
        rover.direction = "W";
    }else if (rover.direction === "W"){
        rover.direction = "N"
    }
    console.log(rover.direction)
  }
  
function moveForward(rover){
    console.log("moveForward was called");
    if (rover.direction === "N"){
        rover.y -=1;
    }else if (rover.direction === "S"){
        rover.y +=1;
    }else if (rover.direction === "E"){
        rover.x +=1;
    }else if (rover.direction === "W"){
        rover.x -=1;
    }
    rover.travelLog.push([rover.x,rover.y]);
    console.log(rover.travelLog);
  }

function userInput(command){
        for (let i=0; i < command.length; i++){
            switch (command[i]) {
                case 'f':
                  moveForward(rover);
                  break;
                case 'r':
                  turnRight(rover);
                  break;
                case 'l':
                  turnLeft(rover);
                  break;
            }
        }
}

//test
userInput('rffrfff');
