
    // <div class="firstContainer">
    //     <input type="text" class="form-control" placeholder="enter product name">
    //     <div class="listContainer"></div>
    // </div>
    
//  <i class="fa-regular fa-trash-can"></i>


const inputBox = document.getElementsByClassName('formContainer')[0];
const listContainer = document.getElementsByClassName('listContainer')[0];


let itemId = 1;
const funX = (x) => {
    const inputValue = x.target.value.trim();
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parentDiv');

    const spanDiv = document.createElement('div');
    spanDiv.classList.add('spanDiv');

    const spanTag = document.createElement('span');
    spanTag.classList.add('spanTag');
    spanTag.id = itemId;
    const id_value = itemId.toString() + '. ' + inputValue;
    itemId += 1;
    inputBox.value = "";

    const lineFun = () => {
        // const exitfunc = parentDiv.classList.contains('crossLine');
        // exitfunc ? parentDiv.classList.remove("crossLine") : parentDiv.classList.add('crossLine');
        parentDiv.classList.toggle('crossLine');
    }

    parentDiv.addEventListener('click', lineFun);

    const iconBin = document.createElement('i');
    iconBin.classList.add('fa-regular', 'fa-trash-can');

    iconBin.addEventListener('click', () => {
        parentDiv.remove();
    })



    listContainer.append(parentDiv);
    parentDiv.append(spanDiv,iconBin);
    spanDiv.append(spanTag);
    spanTag.append(id_value);

   

}


inputBox.addEventListener('change', funX);


















// const textBox = document.getElementsByClassName('form-control')[0];
// const ParentContainer = document.getElementsByClassName('ParentContainer')[0];


// let listId = 0 ;
// const funcX = (x) => {
//     const textValue = x.target.value;
//     const spanContainer = document.createElement('div');
//     spanContainer.classList.add('spanContainer');
//     const divSpan = document.createElement('div');
//     divSpan.classList.add('divSpan');
//     divSpan.addEventListener('click', () => {
//         const exitline = divSpan.classList.contains('lineCross');
//         exitline ? divSpan.classList.remove('lineCross') : divSpan.classList.add('lineCross');
//     });

//     const trashCan = document.createElement('i');
//     trashCan.classList.add('fa-regular', 'fa-trash-can')
//     trashCan.addEventListener('click', () => {
//         spanContainer.remove();
//     });
    

    
//     const spanList = document.createElement('span');
//     spanList.id = listId;
//     listId += 1;
//     const textId = listId.toString() + ". " + textValue;
//     textBox.value = "";


//     ParentContainer.append(spanContainer);
//     spanContainer.append(divSpan, trashCan);
//     divSpan.append(spanList);
//     spanList.append(textId);

// }
// textBox.addEventListener('change', funcX);



//----------------------------------------------------------------------------------

// const enterText = document.getElementsByClassName('form-control')[0];
// const spanContainter = document.getElementsByClassName("spanContainter")[0];

// let spanId = 1;
// const runFunc = (eventx) => {
//     const enterValue = eventx.target.value;
//     const spanList = document.createElement('div');
//     spanList.classList.add('spanList');
    
//     const spanDiv = document.createElement('div');
//     const enterSpan = document.createElement('span');
//     enterSpan.id = spanId;
//     spanDiv.classList.add('enterSpan');
//     spanDiv.addEventListener('click', () => {
//         const strikeExit = spanDiv.classList.contains('lineStrike');
//         strikeExit ? spanDiv.classList.remove('lineStrike') : spanDiv.classList.add('lineStrike');
//     });
    
//     const spanNo = spanId.toString() + ". " + enterValue;
//     const trashIcon = document.createElement("i");
//     trashIcon.classList.add('fa-regular', 'fa-trash-can');
//     trashIcon.addEventListener('click', () => {
//         spanList.remove();
//     })


//     enterSpan.append(spanNo);
//     spanDiv.append(enterSpan);
//     spanList.append(spanDiv,trashIcon);
//     spanContainter.append(spanList);
    
    

    
    
    

//     const strikeFunc = () => {

//     }
//     spanId += 1;
//     enterText.value = "";


// }

// enterText.addEventListener('change', runFunc);
