function Employee(name){

    this._name = name;

    var _currentTask = false;

    var _hoursLeft = 0;

    this._allWork = {};

    this.isReady = false;

    this.setAllWork;


    this.getName = function(){
        return this._name;
    };

    this.startWorkingDay = function(){
        this.setHoursLeft(8);
    };

    this.getCurrentTask = function(){
        return _currentTask;
    };

    this.setCurrentTask = function(task){
        _currentTask = task;
    };

    this.getHoursLeft = function(){
        return _hoursLeft;
    };

    this.setHoursLeft = function(hours){
        _hoursLeft = hours;
    };

    this.getIsReady = function(){
        return isReady;
    };

    this.work = function(){

        while (this.getHoursLeft() >= 1){

            if(!this.getCurrentTask()){
                var task = this._allWork.getNextTask();
                this.setCurrentTask(task);
                if(this.getCurrentTask() == 'no tasks'){
                    this.isReady = true;
                    break;
                }

                console.log(this.getName() + ' get task ' + this.getCurrentTask().getName() + ' for ' +
                    this.getCurrentTask().getWorkingHours() + ' hours');
            }

            if(this.getCurrentTask() == 'no tasks'){
                this.isReady = true;
                break;
            }

            if(this.getHoursLeft() > this.getCurrentTask().getWorkingHours()){

                this.setHoursLeft(this.getHoursLeft() - this.getCurrentTask().getWorkingHours());

                console.log(this.getName() + ' finish task ' + this.getCurrentTask().getName() +
                    ' and he has more ' + this.getHoursLeft() + ' hours');


                var task = this._allWork.getNextTask();
                this.setCurrentTask(task);


                if(!this._allWork.getNextTask()){
                    this.isReady = true;
                }
                if(this.getCurrentTask() == 'no tasks'){
                    this.isReady = true;
                    break;
                }
                console.log(this.getName() + ' get task ' + this.getCurrentTask().getName() + ' for '
                    + this.getCurrentTask().getWorkingHours() + ' hours');
            }else{
                this.getCurrentTask().setWorkingHours(this.getCurrentTask().getWorkingHours() - this.getHoursLeft());

                console.log(this.getName() + ' go home, he need more '
                    + this.getCurrentTask().getWorkingHours() + ' for this task');

                this.setHoursLeft(0);

            }

        };

    }




}