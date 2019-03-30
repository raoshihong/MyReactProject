import React from "react" //引入react的定义dom的支持
import ReactDOM from "react-dom" //引入react对内存dom的操作和渲染的支持

//采用class定义组件
class Person{//组件名称叫做Person

    constructor(name,age){
        this.name = name;//这里定义的是实例属性
        this.age = age;
    }

    static card = "aaa";//这里采用static定义了一个静态属性,静态属性可以通过类名直接访问,静态属性表示直接挂在在Person类上的
}

//通过构造器来创建上面组件的实例
// const person = new Person();//这种表示调用了无参构造方法
const person = new Person("zhangsan");//这种表示调用了一个参数的构造方法来创建Person实例
console.log(person)
console.log(person.name);//通过对象实例获取属性值
console.log(Person.card);//直接通过类访问静态属性


// ----------------------------------------下面是采用function定义类的方式-------------------------------------------------------------------//

function Student(name,age){
    this.name = name;
    this.age = age;
}

const student = new Student("ff",12);
console.log(student)
console.log(student.name);

//采用函数的形式定义类,那么我们就可以把函数名当作类名,所以可以直接使用函数名来定义静态属性
Student.info = "this is Student stati properties";
console.log(Student.info);//通过函数名访问静态属性