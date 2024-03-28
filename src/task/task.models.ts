export interface TaskModel{
    id: string;
    titles: string;
    description: string;
    status: TaskStatus;
}


export enum TaskStatus{
    DONE ='DONE',
    OPEN ='OPEN',
    IN_PROGRESS ='IN_PROGRESS',
}