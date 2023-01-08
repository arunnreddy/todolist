let todos=[{title:"hai"},{title:"hello"}]

function alltodos(){
    let result="";
    todos.map((ele,index)=>{result+=`<p style="text-align:left;padding-left:50px">${ele.title}<button style="float:right" onclick="deletetodo(${index})">DELETE</button></p>`})
    document.getElementById("task").innerHTML=result

}

function addtodo(){
let title=document.getElementById("hai").value
todos.push({title})
console.log(todos)
document.getElementById("hai").value=''
alltodos()

}

function deletetodo(indexx){
console.log(todos)
    let result=todos.filter((element,index)=>indexx!= index)
    console.log("res",result)

    todos=result
 
    alltodos()

}