import React from "react" //引入react的定义dom的支持
import ReactDOM from "react-dom" //引入react对内存dom的操作和渲染的支持

//采用class定义组件
class Person{//组件名称叫做Person

    constructor(name,age){
        this.name = name;//这里定义的是实例属性
        this.age = age;
    }

    play(){ //这里直接定义了一个实例方法,实际上这个方法是挂在Person的proto原型属性上的
        console.log("Person play");
    }

    static say(){//采用static定义一个静态方法,静态方法实际就是直接挂载在Person类上(就是所谓的构造器上)
        console.log("你好");
    }
}

//创建Person实例
const person = new Person();
console.log(person);
person.play();//通过person实例调用实例方法

//静态方法直接使用类名调用
Person.say();

// ----------------------------------------下面是采用function定义类的方式-------------------------------------------------------------------//

function Student(name,age){
    this.name = name;
    this.age = age;
}

//采用函数的方式定义实例方法,实际上就是将方法挂载在Student的proto原型属性上
Student.prototype.play = function(){
    console.log("Student play")
}

const student = new Student();
student.play();

//函数方式定义静态方法,直接在函数名上定义方法就是静态方法
Student.say = function(){
    console.log("同学好")
}

console.log(student)
Student.say();