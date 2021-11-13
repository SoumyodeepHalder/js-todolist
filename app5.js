function update() {
    let download = localStorage.getItem('toDoListItems')
    list = document.getElementsByClassName('listContainer')
    if (!download) {
        list[0].innerHTML = "<h1>no tasks</h1>";
    }
    else {
        download = JSON.parse(download)
        let str = "";
        for (i = 0; i < download.length; i++) {
            console.log('loop no', i)
            let currentArr = [];
            currentArr = download[i];
            console.log(`CurrentArr[${i}]=`, currentArr)
            str += `
            <div class="aTask">
                <div class="taskArea">
                    <div class="sl_no taskBox">
                        <h1>${i + 1}</h1>
                    </div>
                    <div class="task taskBox">
                        <h1 class="taskTitle">${currentArr[0]}</h1>
                    </div>
                    <div class="description taskBox">
                        <h1>${currentArr[1]}</h1>
                    </div>
                    <div class="delete taskBox">
                        <button class="btn" onclick="del(${i})">delete</button>
                    </div>
                </div>
                <hr>
            </div>`
        };
        list[0].innerHTML = str;
    }
}
function del(i) {
    console.log('delete req')
    let download = localStorage.getItem('toDoListItems')
    download = JSON.parse(download)
    download.splice(i, 1)
    localStorage.setItem('toDoListItems', JSON.stringify(download));
    update()
}
function clearAll(){
    console.log('clear all req')
    localStorage.clear()
    update()
}
// programm starts form here
update()
add = document.getElementsByClassName('add');
add[0].addEventListener('click', () => {
    download = localStorage.getItem('toDoListItems')
    if (download == null) {
        download = [];
    }
    else {
        download = JSON.parse(download);
    }
    titl = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    download.push([titl, desc]);
    localStorage.setItem('toDoListItems', JSON.stringify(download));
    update();
    window.location.reload()
})