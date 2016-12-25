# icat

ICAT是由[@jndream](http://weibo.com/jndream)发起创建的一个开源JS袖珍库。她遵循的原则是简洁、灵活、轻量，It's Concise,Agile,Thin...

正如鸡尾酒受欢迎一样，ICAT就是调酒器，把所有知名的前端库打碎，按需进行搭配调和，成为一杯特制的“美酒”。<br>
加载器打碎的是知名前端库；mvc打碎的是知名的前端组件；各类碎片化重组，形成一个多姿多彩的世界。

ICAT简单的“换算关系”:<br>
\- underscore&backbone = core.js + mvc.js<br>
\- seajs = core.js + loader.js<br>
\- mobile-event = core.js + event.js<br>

官网地址：[http://vkdemo.sinaapp.com](http://vkdemo.sinaapp.com)。

#### 她的主要功能点:
- 优化代码组织，用app、namespace、Class、widget、util等方法；
- 优化event模型，用模拟事件的方式架构代理；
- 优化mvc模型，view模板可以随意添加hooks，模块化加载，获取或存储数据只需配置下即可；
- 优化js动态加载，路径灵活方便，include、require、use等方法各有各的使用场景。

#### 她的使用场景：
- 移动端开发，页面只需显式加载她和[main.js](https://github.com/valleykid/icat/blob/master/examples/gallery/js/main.source.js)，然后动态加载其他各种js即可。
- 桌面端开发，页面需要多加载一个shim插件来兼容各种浏览器（完善中...）。

## Getting Started
- demo1: [http://vkdemo.sinaapp.com/todo/index.html](http://vkdemo.sinaapp.com/todo/index.html) ([对比backbone](http://backbonejs.org/examples/todos/index.html))
- demo2: [http://vkdemo.sinaapp.com/gallery/index.html](http://vkdemo.sinaapp.com/gallery/index.html) ([对比backbone](http://addyosmani.com/resources/backbonegallery/index.php))
- demo3: [http://vkdemo.sinaapp.com/icatapp/index.html](http://vkdemo.sinaapp.com/icatapp/index.html)

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 valleykid  
Licensed under the MIT license.
