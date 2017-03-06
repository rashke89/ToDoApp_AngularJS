function People(name, age) {
    this.name = name;
    this.age = age;
};
var people1 = new People("rados", 28);
//depandence injection ubacujemo objekat u funkciju
function info(human) {
    console.log(human.name, human.age);
};
info(people1);