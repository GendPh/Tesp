interface ElevatorInt {
  floor: number;
  users: number;
  total_floors: number;
  total_users: number;
}

class Elevator implements ElevatorInt {
  floor: number;
  users: number;
  total_floors: number;
  total_users: number;

  constructor(total_floors: number, total_users: number) {
    this.floor = 0;
    this.users = 0;
    this.total_floors = total_floors;
    this.total_users = total_users;
  }
  EnterUser(): void {
    if (this.users < this.total_users) {
      this.users++;
      console.log(`There are a total of ${this.users} inside`);
    } else {
      console.log("Elevator is Full!");
    }
  }
  LeaveUser(): void {
    if (this.users != 0) {
      this.users--;
      console.log(`There are a total of ${this.users} inside`);
    } else {
      console.log("Elevator is already Empty!");
    }
  }
  private ElevatorUp(Destination: number): void {
    if (this.floor < this.total_floors) {
      this.floor = Destination;
      console.log(`The Elevator went up to the floor ${Destination}`)
    } else {
      console.log("Elevator is at the top!");
    }
  }
  private ElevatorDown(Destination: number): void {
    if (this.floor != 0) {
      this.floor = Destination;
      console.log(`The Elevator went down to the floor ${Destination}`)
    } else {
      console.log("Elevator is at the bottom!");
    }
  }

  ElevatorCall(destinationFloor: number): void {
    if (destinationFloor >= 0 && destinationFloor <= this.total_floors) {
      if (destinationFloor == this.floor) {
        console.log(`Elevator is already at the floor ${this.floor}!`)
        return
      }

      if (destinationFloor < this.floor) {
        this.ElevatorDown(destinationFloor);
      } else {
        this.ElevatorUp(destinationFloor);
      }

    } else {
      return console.log("This floor doesn't exist!");
    }
  }
}

const elevator: Elevator = new Elevator(4, 4);

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




