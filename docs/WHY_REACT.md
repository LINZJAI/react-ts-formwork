# 为什么选择`React`，而不是`Vue`？

## Vue

Vue在三大框架中，有着国内最多的用户群体。官方维护并推荐的vue + vue-router + vuex已经能够满足几乎所有类型项目的开发，第三方组件库和插件也算丰富和成熟。官方中文文档和快速上手的特点深受大家喜爱……，有点多得数不过来。

然而这个低门槛框架也存在一些致命的问题：

1. 对代码的入侵性太强，Vue本身存在过多的封装。

  例如，官方推荐的template写法，本身来说既不属于html，也不属于js，必须严格按照要求书写。因为不属于html，编辑器在代码高亮和语法提示上需要依赖于插件，目前这类插件还或多或少不够完善；不属于js，丢失js本身的特性，例如变量定义与否无法在template中表现等等。

  再例如，在组件的定义中，必须按照官方特定格式去定义data、props、methods等，这会对不熟悉内部实现的开发者带来一些困扰，如methods中定义的方法会自动指向组件实例本身，`this.data`却无法获取的data中的数据。换句话说，我们无法用原生的js思维去解决这类问题。

  这类语法糖在带来便利的同时，也带来不少隐患，用法上的限制也一定程度限制了开发者的思维。

2. 对TypeScript的支持，几乎是“鸡肋”。

  官方在vue@2.5.0中改进了类型声明，同时也出现了vue-class-component、vue-property-decorator等以帮助对TypeScript的支持。但是就目前而言，仍然不能很好发挥TypeScript的作用。首先，script中定义的任何变量类型，无法在template有效提示，至少类型提示是不能做到，其次父子组件传参类型无法提示和验证，还有类似mixin、store等全局变量恐怕没有较好的办法提示。这样一来，书写变量类型就失去了意义。

3. 组件库选择较少，大多不活跃，或者不再维护了。

  Vue的组件库确实已经有一定数量了，但是要说功能完善、常年活跃的组件库却是没多少，而大多数零散的组件库更是没有人维护了。技术选型相对比较唯一，有利有弊吧。

## React

React在三大框架当中拥有最广阔和最活跃的用户群体，在上述提到的三个问题上有比较突出的优势。

1. 代码入侵性低。

  早在react@15开始，官方就建议使用es6 class方式定义组件，除了一些生命周期函数外，便不存在其他语法或用法的限制（有人可能会说JSX，后面再说），也不存在任何语法糖（当然有利有弊），你可以完全以js的思维去实现。官方文档相比Vue也要少得多，主要是API确实要比Vue要少得多。当然这不代表React不支持，就比如Vue中的prop、event、slot是三个独立的功能，并且是Vue特有的实现方式，所有用了许多篇幅去讲述；而React中的prop、event、children都指的是prop，而且这不就是原生js的传值吗。

  JSX被太多人诟病，包括本人在内在第一次接触时都说以反感的态度。学习JSX的难点更多不是它难以理解，而是难以接受。只要把它当做是js，标签就是变量，一切都说得通，也就不存在入侵性的问题了。也正因为它就是js的拓展，所以它具备js的一切特性。就连Vue都加入对JSX的支持，也足够说明它的吸引力吧。

2. 对TypeScript几乎完美的支持。

  TypeScript官方对React和JSX都特别关照，从官方支持JSX，到最近最近更新对React本身的支持（如defaultProps），包括大多数流行的组件库引入类型定义，TypeScript结合React的使用，可以说不存在任何障碍了，开发体验不比angular差。

3. 组件库丰富完善，社区活跃。

  这样看来，在对项目的规范性和可维护性上说，React即其生态做的远比Vue要好，当然也存在一些缺点。

1. React的思维方式相比Vue有较大的区别，可以看[官方文档](https://reactjs.org/docs/thinking-in-react.html)，

2. React虽然没有封装太多的语法糖，包括开放的API也比较少，换句话说底层的都有了，上层的就需要开发人员去组织了。

3. React没有双向绑定，在复杂的表单处理上需要做许多重复工作（事件绑定）。

4. 不少人认为JSX增加了React的学习难度。

总的来说，开发人员在React的使用上占据更多的主动性，同时也更依赖于个人能力。但是这对于程序员来说，何乐而不为？

最后强烈推荐`react in patterns`这本书，[中文](https://github.com/SangKa/react-in-patterns-cn)，[英文](https://github.com/krasimir/react-in-patterns)。