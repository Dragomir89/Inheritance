function Person(name, age, isMale){

    this.name   = name;
    this.age    = age;
    this.isMale = Boolean(isMale);

}


Person.prototype.showPersonInfo = function(){
    console.log('Hi my name is ' + this.name);
};