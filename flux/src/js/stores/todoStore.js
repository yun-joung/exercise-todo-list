import Flux from 'react-flux-dash';

class _TodoStore extends Flux.Store{
    
    constructor(){
        
        super();
        
        this.state = {};
        this.state.todos = [
            {done: false, title: 'Make the bed', id: (Math.random()*10)},
            {done: false, title: 'Wash my hands', id: (Math.random()*10)},
            {done: false, title: 'Eat', id: (Math.random()*10)},
            {done: false, title: 'Walk the dog', id: (Math.random()*10)}
        ];
    }
    
    getAllTasks(){
        return this.state.todos;
    }
    
    _addTask(data){
        console.log('Add this task: ',data);
        this.setStoreState({
            todos: this.state.todos.concat([{
                done: false,
                title: data,
                id: (Math.random()*10)
            }])
        }).emit();
    }
    _removeTask(taskId){
        console.log('deleting the task');
        this.setStoreState({
            todos: this.state.todos.filter((task) => task.id!=taskId)
        }).emit();
    }
    
}
var todoStore = new _TodoStore();
export default todoStore;