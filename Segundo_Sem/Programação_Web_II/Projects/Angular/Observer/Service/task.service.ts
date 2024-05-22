import { Observable, map } from "rxjs";
import { TaskModel } from "../Model/task.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) { }

  //Get Task
  GetTask(): Observable<TaskModel[]> {
    let obs = this.http.get('http://localhost:3000/task');

    return obs.pipe(map((obj => {
      return obj as TaskModel[];
    })))
  }

  PostTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post('http://localhost:3000/task', { "desc": task.desc }).pipe(map((obj => { return obj as TaskModel; })));
  }

  DeleteTask(taskId: string): Observable<TaskModel> {
    return this.http.delete(`http://localhost:3000/task/${taskId}`).pipe(map((obj => { return obj as TaskModel; })));
  }

}