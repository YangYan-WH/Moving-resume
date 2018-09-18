//var html = Prism.highlight(text, Prism.languages.css, 'css');

var result = `/*
        *大家好,我是杨言
        *我将以动画的形式介绍我自己
        *用文字介绍太单调了
        *我用代码来介绍我自己
        */
        *{
            transition: all 1s;
        }
        html{
            background: rgb(222,222,222);
            font-size:16px;
        }
        #code{
            border:1px solid red;
            padding:16px;
        }
        /*我将对代码进行高亮*/
        .token.selector{
            color: #690;
        }
        .token.property{
            color: #905;
        }
        .token.function{
            color:#dd4a68; 
        }
        /* 接下来有个3d效果*/
        body{
            transform:rotate3d(1, 2.0, 3.0, 360deg);
        }
        /* 我来介绍一下我自己 */
        /* 我需要一张白纸 */
    `
 
var n = 0;
var id = setInterval(function () {
    n += 1
    code.innerHTML = result.substring(0, n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
    styleTag.innerHTML = result.substring(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
        fn2()
        fn3(result)
    }
}, 10)

function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function fn3(preResult){
    var result3 = `
        #paper{
            width:100px;
            height:100px;
            background:red;
        }
    `
    var n = 0;
    var id = setInterval(function () {
        n += 1
        code.innerHTML = preResult + result3.substring(0, n)
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css')
        styleTag.innerHTML = preResult + result3.substring(0, n)
        if (n >= result.length) { 
            window.clearInterval(id)
        }
    },20)    
}