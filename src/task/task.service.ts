import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {

private Task=[];

    getAlltasks(){
        return this.Task;

    }
}
