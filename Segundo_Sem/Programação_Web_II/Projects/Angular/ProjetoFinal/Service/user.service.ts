import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DogService } from "./dog.service";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private dogService: DogService,
  ) { }

}