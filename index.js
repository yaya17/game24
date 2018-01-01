/// <reference path="C:\Joyce\Compute24\Compute24\Scripts/jquery-3.2.1.js" />


$("#btnCal").click(function () {
    var values = $("#inputValues").val()
    var go = function () {
        var ns = values.split(/[ ,]+/);
        console.log(ns);
        doThing(ns);
        var c;

        function doThing(arr) {
            c = c || [];
            var ops = ["+", "-", "*", "/"];
            for (i = 0; i < ops.length; i++) {
                for (j = 0; j < ops.length; j++) {
                    for (k = 0; k < ops.length; k++) {
                        var expressions = [arr[0] + ops[i] + arr[1] + ops[j] + arr[2] + ops[k] + arr[3], "(" + arr[0] + ops[i] + arr[1] + ")" + ops[j] + arr[2] + ops[k] + arr[3], arr[0] + ops[i] + "(" + arr[1] + ops[j] + arr[2] + ops[k] + arr[3] + ")", "(" + arr[0] + ops[i] + arr[1] + ops[j] + arr[2] + ")" + ops[k] + arr[3], "("+arr[0] + ops[i] + arr[1]+")" + ops[j] + "(" +arr[2] + ops[k] + arr[3]+")"];
                        expressions.forEach((e, i) => {
                            if (eval(expressions[i]) == 24) {
                                if (expressions[i] != undefined)
                                    c.push(expressions[i]);
                            }
                        })

                    } 
                }
            }
        }

        var o = [0, 1, 2, 3];
        var r = [];
        o.forEach(i=>
            o.forEach(j=>
                o.forEach(k=>
                    o.forEach(l=> {
                        if (new Set([i, j, k, l]).size == 4)
                            r.push([i, j, k, l]);
                    }
                    )
                )
            )
        )
        var a = r.map(e=>e.map(i=>ns[i]));
        console.log(a);


        a.forEach((e, i) =>a[i] = a[i].join());
        a = new Set(a);
        let b = Array.from(a);
        b.forEach((e, i) =>b[i] = b[i].split(",")); b.forEach((e, i) =>b[i] = doThing(b[i]));
        c = new Set(c);
        console.log(c)
        let d =  Array.from(c);
        d.forEach((e, i) =>d[i] = d[i] + "<br/>");
        $("#divAnswers").html(d)
    }
    go()
})

$("#btnGenerate").click(function () {
   var values  = new Array(4).fill().map((i)=> Math.ceil(Math.random()*13)) 
   $("#inputValues").val(values.join(','));
   
   $("#divCards").html("")
   displayCards(values);
});

function displayCards(values){
    values.forEach((e,i)=>{
        var a = $("#divCards").html() || "";
        a = a + '<img src="/cards/' + values[i] + '.jpg" height="200px" width="160px"></img>'
        $("#divCards").html(a);
    }
)}