import Flux from 'react-flux-dash';

class _TodoActions extends Flux.Action{
  addTask(task){
    this.dispatch('TodoStore.addTask',task);
  }
  
  deleteTask(taskId){
    this.dispatch('TodoStore.removeTask',taskId);
  }
}
var TodoActions = new _TodoActions();
export default TodoActions;