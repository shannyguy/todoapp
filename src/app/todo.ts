export class Todo {
    id: number;
    title:string = '';
    complete: boolean = false;
    priority: string = 'Normal';
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
    
}

