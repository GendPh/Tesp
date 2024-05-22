export class TaskModel {
  id: string;
  desc: string;
  constructor(id: string, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}