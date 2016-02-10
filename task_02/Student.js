function Student(name, age, isMale, score){

    this.name   = name;
    this.age    = age;
    this.isMale = Boolean(isMale);
    this.score = score > 6 || score < 2 ? 2 : score;

}

Student.prototype  = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudentInfo = function(){
    this.showPersonInfo();
    console.log('im a student, my score is: ' + this.score);
};
