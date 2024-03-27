import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('task')
@ApiTags('tasks')
export class TaskController {
    constructor(private taskservice : TaskService) { }
    


 @Get()
 getAlltasks(): string{
    return  this.taskservice.getAlltasks();
}


}
