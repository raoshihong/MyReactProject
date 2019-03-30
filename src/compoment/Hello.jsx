import React from "react" //因为下面使用了jsx语法,所以需要引入React

var obj = {
    age : 10,
    gender: 1
}

var obj1 = {
    name : "rsa",
    ...obj  //这里使用...快速展开obj对象
}

//封装到一个文件中后的组件，需要使用export default 进行导出,就是类似与public
export default function HelloWorld(args){
    return <div>{args.name}  {obj1.age}</div>
}

// export default HelloWorld  //这样到处也可以