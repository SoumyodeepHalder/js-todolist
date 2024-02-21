function update(localStorageArr){
    console.log('update function started')
    console.log("localStorageArr=", localStorageArr)
    localStorageArr.forEach((element, index)=>{
        let str = `<div class="taskArea">
        <div class="sl_no taskBox">
            <h1>${index}</h1>
        </div>
        <div class="task taskBox">
            <h1 class="taskTitle">${element[0]}</h1>
        </div>
        <div class="description taskBox">
            <h1>${element[1]}</h1>
        </div>
        <div class="delete taskBox">
            <button class="btn">delete</button>
        </div>
        </div>
        <hr>`
        let lists = document.getElementsByClassName('lists');
        lists.innerHtml=str;
    });
};
function printer(a){
    a.forEach((element, index) => {
        console.log(a[index])
    });
}
function fetchInputArr(){
    console.log('fetchInputArr started')
    titl=document.getElementById('title').value;
    desc=document.getElementById('description').value;
    let output = [titl, desc]
    console.log("fetchInputArr=",output)
    return output;
}
function pushArr(localStorageArr, inputArr){
    console.log('pushArr started')
    console.log('localStorageArr=', localStorageArr)
    console.log('inputArr=', inputArr)
    if (localStorageArr == undefined){
        localStorageArr = []
    };
    return localStorageArr.push(inputArr);
}
function upload(localStorageArr){
    console.log('upload started')
    localStorage.setItem("todoListItems", JSON.stringify(localStorageArr));
}
function download(){
    console.log('download started')
    let localStorageStr = localStorage.getItem('todoListItems');
    let localStorageAr=[];
    console.log("localStorageStr=", localStorageStr);
    if (localStorageStr != null){
        console.log('localStorageStr=', localStorageStr)
        if (localStorageStr != undefined){
            console.log("inside parser box")
            localStorageAr = JSON.parse(localStorageStr);
        }
    }
    console.log("download =", localStorageAr)
    return localStorageAr;
}

//programm starts form here

let localStorageArr = [];
localStorageArr = download();

let add = document.getElementsByClassName("add");
add[0].addEventListener("click", ()=>{
    console.log("someone has clicked on add button");
    let inputArr = fetchInputArr();
    pushArr(localStorageArr, inputArr);
    upload(localStorageArr);
    update(localStorageArr)
});