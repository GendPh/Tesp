var Elevator = /** @class */ (function () {
    function Elevator(total_floors, total_users) {
        this.floor = 0;
        this.users = 0;
        this.total_floors = total_floors;
        this.total_users = total_users;
    }
    Elevator.prototype.EnterUser = function () {
        if (this.users < this.total_users) {
            this.users++;
            console.log("There are a total of ".concat(this.users, " inside"));
        }
        else {
            console.log("Elevator is Full!");
        }
    };
    Elevator.prototype.LeaveUser = function () {
        if (this.users != 0) {
            this.users--;
            console.log("There are a total of ".concat(this.users, " inside"));
        }
        else {
            console.log("Elevator is already Empty!");
        }
    };
    Elevator.prototype.ElevatorUp = function (Destination) {
        if (this.floor < this.total_floors) {
            this.floor = Destination;
            console.log("The Elevator went up to the floor ".concat(Destination));
        }
        else {
            console.log("Elevator is at the top!");
        }
    };
    Elevator.prototype.ElevatorDown = function (Destination) {
        if (this.floor != 0) {
            this.floor = Destination;
            console.log("The Elevator went down to the floor ".concat(Destination));
        }
        else {
            console.log("Elevator is at the bottom!");
        }
    };
    Elevator.prototype.ElevatorCall = function (destinationFloor) {
        if (destinationFloor >= 0 && destinationFloor <= this.total_floors) {
            if (destinationFloor == this.floor) {
                console.log("Elevator is already at the floor ".concat(this.floor, "!"));
                return;
            }
            if (destinationFloor < this.floor) {
                this.ElevatorDown(destinationFloor);
            }
            else {
                this.ElevatorUp(destinationFloor);
            }
        }
        else {
            return console.log("This floor doesn't exist!");
        }
    };
    return Elevator;
}());
var elevator = new Elevator(4, 4);
elevator.EnterUser();
elevator.EnterUser();
elevator.EnterUser();
elevator.EnterUser();
elevator.EnterUser();
elevator.LeaveUser();
elevator.LeaveUser();
elevator.LeaveUser();
elevator.LeaveUser();
elevator.LeaveUser();
elevator.ElevatorCall(4);
elevator.ElevatorCall(0);
elevator.ElevatorCall(0);
