function Student(name, age, isMale, score){

    Person.call(this);

    this.score = score > 6 || score < 2 ? 2 : score;

}

Student.prototype  = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudentInfo = function(){
    this.showPersonInfo();
    console.log('im a student, my score is: ' + this.score);
};
