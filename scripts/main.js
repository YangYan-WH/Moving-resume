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
            border:1px solid grey;
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
        #code{
            width:40%;
            position:fixed;
            left:0;
            transform: rotate(-3deg) translate(40px,10px);
        }
        `
var result2 = `
        #paper{
            position:fixed;
            right:0;
            width:50%;
            height:100vh;
            background:white;
            border:1px solid black;
        }
        pre.content{
            padding-left:16px;
            font-weight:600;
        }`
var md = `
# 自我介绍

我叫杨言  

1990年7月出生  

自学前端  
`
function writeCode(prefix, code, fn) {
    var domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    var n = 0;
    var id = setInterval(function () {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            // fn.call()
            fn && fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn) {
    var domPaper = document.querySelector('#paper>.content')
    var n = 0

    var id = setInterval(function () {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)//Prism.highlight(markdown + markdown.substring(0, n), Prism.languages.markdown, 'markdown')
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 10)
}
writeCode('', result, function () { //writeCode call the function
    createPaper(function() {
        writeCode(result, result2,function(){
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}