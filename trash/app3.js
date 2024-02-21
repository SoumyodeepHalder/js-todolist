add = document.getElementsByClassName('add');
add[0].addEventListener('click', ()=>{
    if (localStorage.getItem('toDoListItems')==null){
        console.log("inside if toDoListItems=null")
        titl=document.getElementById('title').value;
        desc=document.getElementById('description').value;
        inputArr=[];
        inputArr.push([titl,desc]);
        localStorage.setItem('toDoListItems', JSON.stringify(inputArr));
    }
    else{
        console.log('inside if toDoListItems!=null')
        existingArr=localStorage.getItem('toDoListItems');
        existingArr=JSON.parse(existingArr);
        titl=document.getElementById('title').value;
        desc=document.getElementById('description').value;
        existingArr.push([titl,desc]);
        localStorage.setItem('toDoListItems', JSON.stringify(existingArr));
    };
    console.log('updating html')
    arr=localStorage.getItem('toDoListItems');
    arr=JSON.parse(arr)
    console.log('parsed arr=',arr)
    list=document.getElementsByClassName('list');
    console.log('list=',list);
    console.log('arr.length=',arr.length)
    let str = "";
    for (i=0; i<arr.length; i++){
        console.log('loop no',i)
        let currentArr=[];
        currentArr=arr[i];
        console.log(`CurrentArr[${i}]=`,currentArr)
        str += `
            <div class="taskArea">
                <div class="sl_no taskBox">
                    <h1>${i+1}</h1>
                </div>
                <div class="task taskBox">
                    <h1 class="taskTitle">${currentArr[0]}</h1>
                </div>
                <div class="description taskBox">
                    <h1>${currentArr[1]}</h1>
                </div>
                <div class="delete taskBox">
                    <button class="btn">delete</button>
                </div>
            </div>
            <hr>`
    };
    list[0].innerHTML=str;
})