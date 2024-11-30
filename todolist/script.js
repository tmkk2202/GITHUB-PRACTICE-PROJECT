const inputText = document.querySelector('.inputBox');
const listContainer = document.querySelector('.listContainer');


counter = 0;
inputText.addEventListener('change', (x) => {
    const inputValue = x.target.value.trim();
    counter += 1;
    const subDiv = document.createElement('div');
    const subSpan = document.createElement('span');
    const numInputValue = counter + ". " + inputValue;
    const trash = document.createElement("i");
    trash.classList.add('fa-solid', 'fa-trash');
    listContainer.append(subDiv);
    subDiv.append(subSpan);
    subSpan.append(numInputValue, trash);
    inputText.value = "";

subSpan.addEventListener('click', () => {
    subSpan.classList.toggle('crossLine');
    })
trash.addEventListener('click',() => {
    subDiv.remove();
    })


})

