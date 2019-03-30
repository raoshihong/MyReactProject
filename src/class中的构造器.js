import React from "react" //引入react的定义dom的支持
import ReactDOM from "react-dom" //引入react对内存dom的操作和渲染的支持

//采用class定义组件
class Person{//组件名称叫做Person
    // //定义一个构造器,jsx中的类的构造方法跟java中的有点区别,一次只能有一个构造方法,如果像定义多个参数的,又调用少的参数,js是支持可变个数参数的
    // constructor(){//这个表示无参构造器

    // }
    // constructor(name){//一个参数的构造器
    //     this.name = name;//采用this来使用属性,实际上这个name是挂载在proto原型上的
    // }

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

//通过构造器来创建上面组件的实例
// const person = new Person();//这种表示调用了无参构造方法
const person = new Person("zhangsan");//这种表示调用了一个参数的构造方法来创建Person实例
console.log(person)
console.log(person.name);//通过对象实例获取属性值


// ----------------------------------------下面是采用function定义类的方式-------------------------------------------------------------------//

function Student(name,age){
    this.name = name;
    this.age = age;
}

const student = new Student("ff",12);
console.log(student)
console.log(student.name);