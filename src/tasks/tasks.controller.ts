import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';


@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService:TasksService) {}

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {

    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTaskWithFilters(filterDto);
    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     return this.tasksService.deleteTask(id);
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto : CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto);

    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task {
    //     return this.tasksService.updateTaskStatus(id,status);
    // }



     @Get('/:id')
    getTaskById(@Param('id') id: string,
    @GetUser() user: User): Promise<Task> {
        return this.tasksService.getTaskById(id,user);
    }


     @Post()
    createTask(@Body() createTaskDto : CreateTaskDto
    , @GetUser() user: User): Promise<Task> {
        return this.tasksService.createTask(createTaskDto,user);

    }

     @Delete('/:id')
    deleteTask(@Param('id') id: string,
    @GetUser() user: User): Promise<void> {
        return this.tasksService.deleteTask(id,user);
    }


     @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User,
    ): Promise<Task> {
        return this.tasksService.updateTaskStatus(id,status,user);
    }


    @Get()
    getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto, user);
}

}
