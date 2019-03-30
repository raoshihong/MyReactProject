如何运行当前项目:
1.先进入项目根目录执行npm install 安装nodejs相关的库和项目中用到的相关的第三方库
2.执行npm run dev 部署启动项目



=====================
第一课  创建node项目,使用webpack打包
=====================

1.先在目录下创建一个文件夹myproject
2.cd myproject ,再执行npm init -y 初始化生成一个node项目
    此时的目录为
    myproject
        package.json  这个文件是整个node项目的配置文件,通过npm可以执行这个文件中指定的script脚本命令，可以通过npm安装依赖,添加到这个配置文件中
3.npm i cnpm -g 安装cnpm   cnpm和npm是相同的命令，只是cnpm 是国内的站点
4.npm i webpack -g  安装打包插件webpack ,-g表示全局安装,只有全局才能执行webpack命令
5.npm i webpack -D  本地安装,此时安装的依赖信息会写入到package.json中
    "devDependencies": {
    "webpack": "^4.29.5",
    "webpack-cli": "^3.2.3"
  }

6.npm i webpack-cli -g , npm i webpack-cli -D  安装webpack-cli 支持命令执行
7.在项目根目录下创建webpack.config.js配置文件，用来配置webpack打包的信息
    //这个文件时webpack执行命令时的配置文件
    module.exports = {//这里表示暴露一个打包的配置对象  因为webpack基于node构建的,所以这里支持node api语法
        mode : 'development' //production   这里需要指定mode
        //当执行webpack命令时,会找到这个配置文件,并读取这里的配置对象
        //可以指定 entry入口配置,但是到了webpack 4后使用预定大于配置,默认就是src/index.js作为入口
        // entry : 'index.js'
    }

8.在项目根目录下创建src目录，再在src下创建index.js文件作为项目的入口，webpack 4.0  后打包项目的默认入口为src/index.js
9.在项目根目录下 执行webpack命令进行打包
10.打包后，会默认在项目根目录下生成一个dist目录,下面就是打包的文件,会生成一个main.js文件
11.在src下创建一个index.html文件,在index.html中文件中引用main.js文件
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <title>首页</title>
            <script src="../dist/main.js"></script>
        </head>
        <body>
            <h1>这是首页</h1>
        </body>
    </html>
12.在浏览器中打开index.html文件,在console界面就可以看到输出


=====================
第二课  使用webpack-dev-server 编译打包运行项目
=====================
webpack-dev-server 可以将node项目快速编译打包运行在一个本地服务器上

1.cnpm webpack-dev-server -g 安装插件  ，执行cnpm webpack-dev-server -D 本地安装
    package.json配置
        "devDependencies": {
            "webpack": "^4.29.5",
            "webpack-cli": "^3.2.3",
            "webpack-dev-server": "^3.2.1"
        }
2.在package.json中配置script执行npm run dev 的脚本
    我们可以直接在项目根目录下执行webpack-dev-server命令，编译打包运行项目,当然我们可以使用更加简单的方式,将webpack-dev-server配置到package.json文件中的script脚本命令中,通过npm执行package.json中的命令来执行指定的命令
    package.json配置如下：
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "webpack-dev-server"
        },
    当我们执行npm run dev 命令，就代表的是执行上面的scripts中的dev命令,可以给webpack-dev-server指定参数
    --open chrome 表示运行服务直接在chrome浏览器中打开
    --port 3000 指定服务器运行的端口,默认8080
    --host 127.0.1.1 指定服务器地址
    --hot 表示热更新
    --progress 进度
    --compress 压缩
            {
                "name": "myproject",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "dev": "webpack-dev-server --open chrome --port 3000 --host 127.0.1.1 --hot --progress --compress"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "devDependencies": {
                    "webpack": "^4.29.5",
                    "webpack-cli": "^3.2.3",
                    "webpack-dev-server": "^3.2.1"
                }
            }

3.在浏览器中访问http://127.0.1.1:3000 就可以访问项目的根目录
    webpack-dev-server 默认会将main.js打包到内存中,我们可以通过http://127.0.1.1:3000/main.js访问,
    但是这个main.js我们在http://127.0.1.1:3000下是看不到这个文件的,因为这个文件是放到内存中的,而实际的main.js是放到dist下的

4.cnpm i html-webpack-plugin -g  , cnpm i html-webpack-plugin -D
使用html-webpack-plugin插件打包指定的html到内存中
    安装的插件依赖如下：
        "devDependencies": {
            "html-webpack-plugin": "^3.2.0",
            "webpack": "^4.29.5",
            "webpack-cli": "^3.2.3",
            "webpack-dev-server": "^3.2.1"
        }
5.在webpack.config.js配置文件中配置 html-webpack-plugin这个插件
    5.1因为webpack是支持node语法的,所以可以在webpack.config.js中引入html-webpack-plugin,并创建插件的实例
        //const表示定义变量
        const path = require('path')//表示引入path包中的path类
        const HtmlWebpackPlugin = require('html-webpack-plugin') //表示引入html-webpack-plugin中的HtmlWebpackPlugin类

        //通过new创建实例,构造方法有两个可选的参数
        // template表示指定哪个文件要输出到内存中
        // filename 表示输出到内存中的文件名
        const htmlPlugin = new HtmlWebpackPlugin({
            template : path.join(__dirname,'./src/index.html'), //path 就是上面引入的path类,join是一个拼接字符串的方法,__dirname表示当前文件的目录
            filename : 'index.html'
        }); 

    5.2让后,再将插件暴露给webpack脚本命令配置
        //这个文件时webpack执行命令时的配置文件
        module.exports = {//这里表示暴露一个打包的配置对象  因为webpack基于node构建的,所以这里支持node api语法
            mode : 'development', //production
            //当执行webpack命令时,会找到这个配置文件,并读取这里的配置对象
            //可以指定 entry入口配置,但是到了webpack 4后使用预定大于配置,默认就是src/index.js作为入口
            // entry : 'index.js'
            plugins :[
                htmlPlugin
            ] //在这里指定上面创建的插件实例
        }


6.在根目录下执行npm run dev
    此时webpack-dev-server会自动编译打包运行项目,自动打开浏览器访问http://127.0.1.1:3000 ，此时打开的页面就是上面配置的index.html首页
    生成的index.html中会自动配置main.js的<src> ,所以我们在创建index.html时可以不用写main.js的引入


=====================
第三课  使用React创建DOM和渲染DOM
=====================
1. cnpm i react react-dom -S
    安装react react-dom 第三方库,-S ：如果是测试，生产环境都需要的包，则需要使用-S进行安装，如果只是开发时的工具包，则使用-D参数
    react包 可以创建组件，创建虚拟DOM，管理生命周期
    react-dom 将创建好的组件、虚拟DOM渲染到页面上
    执行完上面的命令后，会在项目描述文件package.json中增加以下配置
    "dependencies": {
        "react": "^16.8.3",
        "react-dom": "^16.8.3"
    }

2. 在js中使用react和react-dom包中的组件
    // console.log("hello")

    import React from "react" // 表示引入react包中的React
    import ReactDOM from "react-dom"

    //通过React创建虚拟DOM
    /**
    * 参数1 : 创建DOM元素的类型,html标签名,字符串,默认为input
    * 参数2 : DOM元素的属性，可以是对象或者null,对象中使用key-value表示属性的名称和值
    * 参数3 : 子元素
    * 参数n : 子元素
    */
    const myH1 = React.createElement("h1",{'id':'myh1','titile':'this is a h1'},"这是一个h1");

    const myDiv = React.createElement("div",null,myH1);//这个表示创建一个<div>标签,这个标签没有属性,子节点为上面的myH1虚拟DOM

    //通过ReactDOM将创建的虚拟DOM渲染到页面上
    /**
    * 参数1 : 要渲染的虚拟DOM
    * 参数2 : 目标页面上的容器DOM, 比如在index.html页面中添加一个<div id="my"></div>标签作为容器
    */
    ReactDOM.render(myDiv,document.getElementById("my"));

===============
第四课  使用JSX 语法
==============
JSX语法是react提供的对js的扩展，能够在js中直接使用html代码，从而简化上面第三课中使用的React.createElement代码，默认js是无法使用html代码的，且webpack默认只能打包.js文件，像.vue , .png都不能大包，此时就需要安装相关的插件

1. 安装babel插件
    安装转换插件 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    安装解析语法插件  cnpm i babel-preset-env babel-preset-stage-0 babel-preset-react -D

    此时会在package.json中添加以下配置
     "devDependencies": {
        "babel-core": "^6.26.3",
        "babel-loader": "^8.0.5",
        "babel-plugin-transform-runtime": "^6.23.0",
        "babel-preset-env": "^1.7.0",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "html-webpack-plugin": "^3.2.0",
        "webpack": "^4.29.6",
        "webpack-cli": "^3.2.3",
        "webpack-dev-server": "^3.2.1"
    }

    如果运行npm run dev 时提示上面babel-core版本不对，则使用下面的命令先卸载
    npm uninstall babel-loader
    再执行以下命令重新安装带有版本的
    npm install babel-loader@7.1.5 -D

2. 配置webpack配置文件
    安装babel后,在webpack.config.js中配置babel的规则配置
    module :{//所有的第三方配置规则,都在这里配置
        rules: [//配置第三方匹配规则
            //这里表示在使用webpack编译项目时,如果遇到.js或者.jsx文件为后缀的,则使用babel-loader插件进行加载,exclude表示排除(一定要排除/node_modules,否则无法运行项目)
            {test : /\.js|.jsx$/,use:"babel-loader",exclude:/node_modules/ },

        ]
    }

3.在项目根目录下添加babel的配置文件
    文件名为.babelrc
        {
            "presets": ["env","stage-0","react"],
            "plugins": ["transform-runtime"]
        }

4.在js中使用jsx的语法
    const myDiv = <div><h1 id="myh1" title="this is a h1">这是一个h1</h1></div>


===============
第四课  JSX中使用js
==============
1.{} 表示可以写任何js代码
    //定义一个js常量
    let a = 11;

    //使用{}引用js变量,在{}中还可以进行计算
    const myDiv2 = <div>{a+10}</div>

    //定义一个js数组
    let attr = [10,11];

    let attr1 = [];

    //使用数组遍历
    attr.forEach(at=>{
        attr1.push(<div>{at}</div>);//push 添加元素,直接使用jsx,使用{}引用js变量
    })

    //直接使用数组中的map
    const bb = attr.map(at=>{
        return <div>{at}</div>
    })

    //通过ReactDOM将创建的虚拟DOM渲染到页面上
    /**
    * 参数1 : 要渲染的虚拟DOM
    * 参数2 : 目标页面上的容器DOM, 比如在index.html页面中添加一个<div id="my"></div>标签作为容器
    */
    // ReactDOM.render(bb,document.getElementById("my"));
    ReactDOM.render(<div>{bb}</div>,document.getElementById("my"));

2.注意事项
    在jsx中使用js数组进行遍历时一定要给map或者for，forEach包裹的标签添加key，否则会有异常(选择项不对的问题)，控制台会输出：react.development.js:188 Warning: Each child in a list should have a unique "key" prop.

    //直接使用数组中的map
    const bb = attr.map(at=>{
        return <div key={at}>{at}</div>//这里被map包裹的标签,需要添加key
    })

===============
第四课  创建组件,并使用组件和组件的属性
==============
下面时第一种创建组件的方式,采用函数的形式
1. 定义组件和使用组件
    // 定义组件
    function Hello(){
        // return null;//创建的组件必须要有返回值,要么为null，要么为DOM节点
        return <div>sss</div>
    }

    //在jsx中使用上面定义的组件
    const cc = <div><Hello></Hello></div>

2.在组件中定义属性,在创建组件的方法中使用隐式传递的props获取属性的值
    // 定义组件
    function Hello(props){//使用隐式的参数props,这里是形参,可以任意名称,可以借助chrome react插件查看props参数
        // return null;//创建的组件必须要有返回值,要么为null，要么为DOM节点

        //这里通过
        return <div>{props.name}--{props.age}</div>
    }

    const person = {
        age:10,
        job:'sdf'
    }

    //在jsx中使用上面定义的组件 
    //这里给组件添加属性,默认会通过props这个对象进行传递到组件的方法中
    const cc = <div><Hello name="sss" age={person.age} job={person.job}></Hello></div>




===============
第五课  封装组件,引入组件
==============
1.创建一个文件夹compoment,再创建一个组件单独文件Hello.jsx,在这个文件中定义自己的组件
    import React from "react" //因为下面使用了jsx语法,所以需要引入React

    //封装到一个文件中后的组件，需要使用export default 进行导出,就是类似与public
    export default function HelloWorld(args){
        return <div>{args.name}</div>
    }

    // export default HelloWorld  //这样到处也可以

2.在其他js文件中引入上面定义的组件,并进行渲染
    import React from "react"
    import ReactDOM from "react-dom"

    // import HelloWorld from "./compoment/Hello.jsx" //引入自己封装的库类,如果在webpack.config.js中没有配置的话,这里默认需要写文件后缀.jsx

    import HelloWorld from "./compoment/Hello" //如果在webpack.config.js中配置了resolve 资源后缀,则这里可以省略

    const dd = <HelloWorld name="lisi">sssss</HelloWorld>  //引用自定义的组件

    //进行渲染
    const contain = document.getElementById("my");
    ReactDOM.render(dd,contain);

3.配置webpack.config.js 配置文件,resolve资源配置
    resolve :{
        extensions:['.js','.jsx','.json'] //在这里配置了后,就会自动处理资源文件的后缀,在使用import from 导入时就可以省略后最
    }

===============
第六课  使用快速展开运算符,简化代码
==============
快速展开运算符，简化代码，就是不用一个一个去取出一个对象中的属性，而实直接使用...来快速展开

var obj = {
    age : 10,
    gender: 1
}

var obj1 = {
    name : "rsa",
    ...obj  //这里使用...快速展开obj对象
}

console.log(obj1.age)

===============
第七课  使用webpack设置项目根目录
==============
需要再webpack.config.js配置文件中配置

1.在webpack.config.js配置文件中加入alias命别名
    alias:{//使用alias命别名
            "@":path.join(__dirname,"./src")  //这里使用了path,所以需要引入path的包
        }

2.在项目中使用@这个别名
如下面的代码
import HelloWorld from "@/compoment/Hello" //如果在webpack.config.js中配置了resolve 资源后缀,则这里可以省略

===============
第八课  class的了解
==============
使用class是创建组件的另外一种方式,这里的class跟java语言中的class差不多,也是定义了一个类
下面来学习学习class

1.class中的构造器

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



2.class中的静态属性
    使用static来定义静态属性,静态属性可以通过类名直接访问
    static card = "aaa";//这里采用static定义了一个静态属性,静态属性可以通过类名直接访问
    例：
    
        //采用class定义组件
        class Person{//组件名称叫做Person

            constructor(name,age){
                this.name = name;//这里定义的是实例属性
                this.age = age;
            }

            static card = "aaa";//这里采用static定义了一个静态属性,静态属性可以通过类名直接访问
        }
    
    访问：
        console.log(Person.card);//直接通过类访问静态属性


3.class中定义实例方法和静态方法

    (1)实例方法
        实例方法实际上就是挂载在类的prototype属性上
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
        }

        //创建Person实例
        const person = new Person();
        console.log(person);
        person.play();//通过person实例调用实例方法


        // ----------------------------------------下面是采用function定义类的方式-------------------------------------------------------------------//

        function Student(name,age){
            this.name = name;
            this.age = age;
        }

        //采用函数的方式定义实例方法,实际上就是将方法挂载在Student的proto原型属性上
        Student.prototype.play = function(){
            console.log("Student play")
        }


    (2) 静态方法
        静态方法是直接挂载在类上的,所以通过类名直接调用静态方法

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


4.使用extends 实现继承关系

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


===============
第九课  使用class来创建组件
==============

使用class创建组件的几个步骤:
    1.继承React.Compoment组件类
    2.实现render()方法,并返回jsx dom
    3.通过ReactDOM.render()方法渲染class创建的组件

    import React from "react"
    import ReactDOM from "react-dom"

    //创建一个class,并实现React中的Component类
    class Person extends React.Component{
        
        //实现render渲染方法
        render(){
            //这个render方法必须有返回,可以为null,也可以为jsx代码
            return <div>asfsadf</div>
        }
    }

    //使用Person类创建jsx标签,在是哦那个ReactDOM.render时会自动调用类中的render方法的
    const cc = <div>sdfsdf<Person></Person></div>

    //调用ReactDOM中的render方法进行渲染指定的dom到指定的容器上
    ReactDOM.render(cc,document.getElementById("my"));

===============
第十课  在class来创建的组件中使用props属性变量
==============
props属性是用来获取自定义组件上定义的属性名称对应的值的,表示从界面到js,props属性是只读的,不能修改里面的值

    import React from "react"
    import ReactDOM from "react-dom"

    //创建一个class,并实现React中的Component类
    class Person extends React.Component{
        
        //实现render渲染方法
        render(){
            //这个render方法必须有返回,可以为null,也可以为jsx代码
            //在class中使用props属性获取组件中定义的属性变量,这里必须使用this.props
            return <div>asfsadf,{this.props.name}</div>
        }
    }

    //使用Person类创建jsx标签,在是哦那个ReactDOM.render时会自动调用类中的render方法的
    //在class创建的组件中定义属性name
    const cc = <div>sdfsdf<Person name="zhangsan"></Person></div>

    //调用ReactDOM中的render方法进行渲染指定的dom到指定的容器上
    ReactDOM.render(cc,document.getElementById("my"));


===============
第十一课  在class中使用this.state获取ajax返回的数据,并渲染到界面组件中
==============
this.state是React用来传递数据的,这个数据可以是通过ajax获取后端传递过来的数据,也可以是直接在js中定义的数据,this.state是可读可写的,只要更新了state的数据，那么绑定到state上的view也会根据这个model做出相应的变化

    import React from "react"
    import ReactDOM from "react-dom"

    //定义一个class,并继承React.Component
    class Person extends React.Component {

        //定义一个构造方法
        constructor(){
            super();//最好调用下父类的构造方法
            //定义一个state
            this.state = {
                msg : "aaaaa"
            }
        }

        //重写render函数,在调用ReactDOM.render方法时,会自动调用这个render方法
        render(){
            //修改state属性中的值
            this.state.msg = "haha";

            //使用state属性
            return <div>{this.state.msg}</div>
        }
    }

    //使用自定义的类创建组件标签
    const myPerson = <Person></Person>

    //将自定义的组件渲染到页面
    ReactDOM.render(myPerson,document.getElementById("my"));

===============
第十二课  将class创建的组件暴露给外部使用
==============

    1.创建一个Person.jsx文件，在文件中定义class组件，并通过export default暴露出去
    //在nodejs中 export default就相当于java中的public
    export default class Person extends React.Component {
        constructor(){
            super();
            this.state = {
                msg : "adfasdf",
                code: "111"
            }
        }

        render(){
            return <div>{this.state.msg}--{this.state.code}</div>;
        }
    }

    2.在其他文件中通过import引入自定义的组件
    //引入封装的自定义组件
    import Person from "@/compoment/Person"

    例：
        import React from "react"
        import ReactDOM from "react-dom"

        //引入封装的自定义组件
        import Person from "@/compoment/Person"

        //使用自定义的类创建组件标签
        const myPerson = <Person></Person>

        //将自定义的组件渲染到页面
        ReactDOM.render(myPerson,document.getElementById("my"));


===============
第十三课  评论列表的案例(使用class创建组件,使用state传递数据,使用props获取组件属性的值)
==============
    1.创建一个CommentList.jsx，定义CommentList组件
        import React from "react"
        //引入CommentItem组件
        import CommentItem from "@/compoment/CommentItem"

        //定义一个列表组件类
        export default class CommentList extends React.Component{
            constructor(){
                super();
                this.state = {
                    //定义数据
                    commentList : [
                        {id:1,name:"张三",content:"哈哈"},
                        {id:2,name:"里斯",content:"方法"},
                        {id:3,name:"王五",content:"单独"},
                        {id:4,name:"赵六",content:"嗯嗯"}
                    ]
                }
            }

            render(){
                //通过数组中的map将数据转换为标签并返回,使用state传递数据
                return <div>
                    {this.state.commentList.map(item=><CommentItem commentListData={item} key={item.id}></CommentItem>)}
                    </div>
            }
        }

    2.创建一个CommentItem.jsx文件，定义CommentItem组件
        import React from "react"

        export default class CommentItem extends React.Component{
            constructor(){
                super();
            }

            render(){
                //使用props接收传递过来的数据
                return <div>
                    <div>评论人:{this.props.commentListData.name}</div>
                    <div>评论内容:{this.props.commentListData.content}</div>
                </div>
            }
        }

    3.在其他地方使用CommentList组件,并渲染
        import React from "react"
        import ReactDOM from "react-dom"

        import CommentList from "@/compoment/CommentList"

        const commentList = <CommentList></CommentList>

        ReactDOM.render(commentList,document.getElementById("my"));

===============
第十四课  使用行内样式
==============
（1）
    //在jsx中行内样式style是一个js对象,不再是以前html中的直接一个字符串了
    //对象中的属性值如果是字符串则需要双引号
    例：
    <div style={{color:"red",fontSize:"30px"}}>评论列表</div>

（2）抽离行内样式
    既然行内样式style是一个js对象，那么就可以抽离出来,封装成一个js对象

        import React from "react"

        //将行内样式抽离
        const style = {
            itemNameStyle:{
                color:"red",fontSize:"20px"
            },
            itemContentStyle:{color:"blue"}
        }

        export default class CommentItem extends React.Component{
            constructor(){
                super();
            }

            render(){
                return <div>
                    <div style={style.itemNameStyle}>评论人:{this.props.commentListData.name}</div>
                    <div style={style.itemContentStyle}>评论内容:{this.props.commentListData.content}</div>
                </div>
            }
        }

===============
第十四课  使用样式表
==============
默认webpack是无法解析.css文件的,所以需要添加解析规则rules

npm i style-loader -D

