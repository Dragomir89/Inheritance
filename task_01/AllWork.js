function AllWork(){

    var _tasks = [];

    var _freePlacesForTasks = 10;


    this.tasks = _tasks;  // debug


    this.addTask = function(task){

        if(task.constructor.name != 'Task'){
            console.log('invalid input !');
            return;
        }
        if(_freePlacesForTasks < 1){
            console.log('no more places for tasks');
            return;
        }
        _freePlacesForTasks--;
        _tasks.push(task);

    };

    this.getNextTask = function(){
        if(_freePlacesForTasks >= 10){
            console.log('no tasks');
            return 'no tasks';
        }
        _freePlacesForTasks++;
        return _tasks.pop();
    };

    this.isAllWorkDone = function(){

        if(_tasks.length <  0){

            console.log('no more tasks');
            return true;
        }
        return false;


    };

}