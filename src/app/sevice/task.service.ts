import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaderResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS} from '../mock';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:  HttpClient
  ) { }

getTasks():Observable<Task[]>{
  const tasks = of(TASKS);
  return tasks
}

}