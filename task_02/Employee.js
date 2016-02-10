function Employee(name, age, isMale, daySalary){

    this.name   = name;
    this.age    = age;
    this.isMale = Boolean(isMale);
    this.daySalary = daySalary;
    this.overtime = 0;

}

Employee.prototype  = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function(hours){

    if(this.age >= 18){
        return ((this.daySalary / 8) * 1.5) * hours;
    }

};

Employee.prototype.showEmployeeInfo = function(){
    this.showPersonInfo();
    console.log('my day salary is: $' + this.daySalary);
};