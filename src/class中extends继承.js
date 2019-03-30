import React from "react"
import ReactDOM from "react-dom"

//定义一个父类
class Person{
    constructor(name,age){
        //在父类中定义公共属性
        this.name = name;
        this.age = age;
    }

    //在父类中定义公共方法
    run(){
        console.log("走动")
    }
}

//定义子类,使用extends继承父类
class Student extends Person{
    //在子类中定义构造器
    constructor(name,age,idCard){
        //使用super调用父类构造器
        super(name,age);
        this.idCard = idCard;//子类自有的属性
    }

    //在子类中定义自己的方法
    study(){
        console.log("学号:"+this.idCard)//这里必须要使用this关键字
    }
}

//创建子类的实例
const stu = new Student("lisi",10);
stu.run();//调用父类中的方法

const stu1 = new Student("ww",20,"123123123");
stu1.study();//调用子类自己的方法

console.log(stu)