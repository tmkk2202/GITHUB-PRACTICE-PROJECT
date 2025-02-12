
const button = document.querySelector('button')
const bottom = document.querySelector(".bottom");

const funcAlert = () => {
	const botDiv = document.createElement("div");
	botDiv.classList.add("alertClass");
	const divText =
		"Server is uploaded successfully sdfg xcvzbcvzx  dfgasgbfd dfsagsadg asdfgasdgadsg dsafsdgfda dsfew dsagvasbfdgsfsdgfds dsgafdg dsafdsafsdfkjaklsdjfklajsldkfjkdsajklfjlka";
	botDiv.append(divText);
	bottom.innerHTML = "";
	bottom.append(botDiv);
	botDiv.style.bottom = `-${botDiv.offsetHeight}px`;
	setTimeout(() => {
		botDiv.style.bottom = "0px";
	}, 100);
	setTimeout(() => {
		botDiv.style.bottom = `-${botDiv.offsetHeight}px`;
	}, 1000);
};


button.addEventListener('click', () => {
	funcAlert();
});


// const btn = document.querySelector(".btn");
// const parentd = document.querySelector(".parent");

// const toastAlert = () => {
//     parentd.innerHTML = '';
//     const toasta = document.createElement('div');
//     toasta.classList.add("toastClass");
//     toasta.append("your file is successfully uploded.");
//     parentd.append(toasta);
//     toasta.style.bottom = `-${toasta.offsetHeight}px`;
//     setTimeout(() => {
//         toasta.style.bottom = `0`;
//     }, 100);
//     setTimeout(() => {
//         toasta.style.bottom = `-${toasta.offsetHeight}px`;

//     }, 1000);

// };

// btn.addEventListener("click", () => {
//     toastAlert();
// });
