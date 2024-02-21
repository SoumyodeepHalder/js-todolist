function download(){
    let a = localStorage.getItem('toDoListItems');
    console.log("downloaded", a)
    a=JSON.parse(a);
    return a;
}
function fetchInputArr(){
    let titl = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    let a = [titl, desc];
    console.log("fetched", a)
    return a;
}
function pushArr(a, b){
    console.log("pushing input");
    a=[];
    a.push(b)
    return a;
}
function upload(a){
    console.log("uploading", a)
    localStorage.setItem('toDoListItems', JSON.stringify(a))
}
function update(file, taskArea){
    console.log("updating")
    console.log("file=",file)
    console.log("textArea=",taskArea)
    if (file == null){
        console.log("inside if downloaded null");
        taskArea.innerHTML = "<h1>no tasks</h1>"
    }
    else{
        console.log("updating html");
        file.forEach((elem, index) => {
            console.log("element0, element1 =",elem[0], elem[1]);
            console.log("index=",index);
            str = `<div class="taskArea">
            <div class="sl_no taskBox">
                <h1>${index}</h1>
            </div>
            <div class="task taskBox">
                <h1 class="taskTitle">${elem[0]}</h1>
            </div>
            <div class="description taskBox">
                <h1>${elem[1]}</h1>
            </div>
            <div class="delete taskBox">
                <button class="btn">delete</button>
            </div>
            </div>
            <hr>`
            let newRow = document.createElement('div');
            newRow.innerHTML = str;
            taskArea[index].appendChild(newRow);
        });
    }
    
}
// variables here
let downloaded = download();
let taskArea = document.getElementsByClassName('list');
let add = document.getElementsByClassName('add');
//programm starts form here
update(downloaded, taskArea);
add[0].addEventListener('click', ()=>{
    let inputed = fetchInputArr();
    let finalArr = pushArr(downloaded, inputed);
    upload(finalArr);
    update(finalArr, taskArea);
});