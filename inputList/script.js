

const input_text = document.getElementsByClassName('form-control')[0];
const orderList = document.getElementsByClassName('list-group')[0];


const funcx = (xx) => {
    const inputValue = xx.target.value;
    const listItem = document.createElement('li');
    listItem.classList.add("list-group-item");
    listItem.append(inputValue);
    orderList.append(listItem);
    input_text.value = "";
}

input_text.addEventListener('change', funcx);






    // <div class="container">
    //     <input type="text" class="form-control" placeholder="enter product name">
    // </div>

