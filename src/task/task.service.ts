import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
    getAlltasks():string{
        return "this  function return all task 😉";

    }
}
