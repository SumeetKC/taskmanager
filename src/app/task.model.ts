export class Task {
    
    taskId : number;
	parentId : number;
	parentTask : string;
	taskName : string;
	startDate : Date;
	endDate : Date;
	priority : number;
    endTaskStatus : boolean;
  
    constructor() {

    }

}
