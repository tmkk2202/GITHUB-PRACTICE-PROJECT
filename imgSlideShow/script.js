const img = document.getElementsByClassName("img")[0];
const btn = document.getElementById('btn');
const orgimg = img.src;

const imgArray = [
    'https://media.istockphoto.com/id/1443914796/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B8%82%E0%B8%B1%E0%B8%9A%E0%B8%A3%E0%B8%96%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B8%94%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%95%E0%B8%81%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A5%E0%B8%B9%E0%B8%81.jpg?s=612x612&w=0&k=20&c=GrFTpEIE59vd99XCeOIhVgeVSb8BTyKuIfdwyeyWgrA=',
    'https://media.istockphoto.com/id/1499706351/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%9E%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B8%84%E0%B8%B1%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%82%E0%B8%B2-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%81.jpg?s=612x612&w=0&k=20&c=je3xTImYurxgDHbbcuRYSaxSf3E5r1GhhwLqZTwCr1g=',
    'https://media.istockphoto.com/id/1152376474/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99.jpg?s=612x612&w=0&k=20&c=T7YcRefdjBX2JnYzc8R_FOcDUBXh_xAZBsvRDOhHamE=',
    'https://media.istockphoto.com/id/1913886042/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/family-enjoy-a-picnic-parents-carrying-son-and-daughter-at-the-beach-on-sunset-in-holiday.jpg?s=612x612&w=0&k=20&c=7ucAC_8LvVqd4tKV-g8zG2e5QBIfeEkwctaerxbKnPM=',
   'https://media.istockphoto.com/id/846693760/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=5sZqRrz8-S-SfI7O41LhyXGuSpVlEYeyaZqJWXfF9aI='
    
]

let imgcount = 0;



// const changefunc = () => {
//     if (imgcount === 5) {
//         img.src = orgimg;
//         imgcount = 0;
//         return;
//     }
//     img.src = imgArray[imgcount];
//     imgcount += 1;
  
// }

const changefunc = () => {
    if (imgcount === imgArray.length) {
        img.src = orgimg; // Reset to the original image
        imgcount = 0; // Reset the counter
    } else {
        img.src = imgArray[imgcount]; // Set to the next image in the array
        imgcount += 1; // Increment the counter
        console.log("imgcount number: ", imgcount);
    }
};


btn.addEventListener('click', changefunc);






















// const jsdiv = document.createElement("div");
// const jsnode= document.createTextNode("Create Text Node");
// jsdiv.appendChild(jsnode);

// const jsbody = document.getElementsByTagName('body')[0];

// jsbody.appendChild(jsdiv);


// const readE = document.getElementsByTagName('div')[0];
// console.log("text inside div: ", readE.textContent);

// readE.textContent = "update text";
// console.log("updated text is :", readE.textContent);

// // readE.remove();

// const jsdiv2 = document.createElement('div');
// const jsh1 = document.createTextNode("header1");
// jsdiv2.appendChild(jsh1);
// // jsbody.appendChild(jsdiv2);

// const jsdiv3 = document.createElement("div");
// const jsh2 = document.createTextNode('header 2');
// jsdiv3.appendChild(jsh2);

// // jsbody.appendChild(jsdiv3);

// jsbody.append(jsdiv, jsdiv2, jsdiv3);

// const jsdiv4 = document.createElement('div');
// jsdiv4.append('text add using append directly!');
// jsbody.appendChild(jsdiv4);

// try {
//     jsdiv.classList.add('jsdiv');
// } catch (err) {
//     console.log("sth went wrong", err)
// };

// try {
//     jsdiv1.classList.add('jsdiv2');
// } catch (err) {
//     console.log("sth went wrong", err)
// };

// try {
//     jsdiv3.classList.add('jsdiv3', 'addclass');
// } catch (err) {
//     console.log("sth went wrong", err)
// };
// try {
//     jsdiv4.classList.add('jsdiv4', "extra");
// } catch (err) {
//     console.log("sth went wrong", err)
// };


// jsdiv4.classList.remove("extra");

// const div5 = document.createElement("div");
// div5.classList.add('div5_style');
// div5.append("style test");
// jsbody.appendChild(div5);

// div5.classList.remove("div5_style");
// div5.classList.add('style');

// const styleJs = document.getElementsByClassName("style")[0];
// console.log("width  ;", styleJs.style.width); 
// console.log("height : ", getComputedStyle(styleJs).height);
// console.log("width : ", getComputedStyle(styleJs).width);
// console.log("bgColor:", getComputedStyle(styleJs).backgroundColor);

// const num2 = [[1, 2], [3, 4], [5, 6]];
// for (let i = 0; i < num2.length; i++){
//     let outsideA = num2[i];
//     for (let j = 0; j < outsideA.length; j++){
//         let insideA = outsideA[j];
//         console.log("Inside A:", insideA);
//         console.log('outside A:', outsideA);
//     }
// }

// const cities = ['ygn', 'mdy', 'lsh'];
// console.log(cities);

// const [x, y, z] = cities;
// console.log(cities);


// const obj = { name:"mama", age:"21", dob:"1988"};
// const { name, age, dob } = obj;

// let cal = (...x) => {
//     let total = 0;
//     for (let i = 0; i < x.length; i++){
        
//     }

// }

// const arrObj = [
//     { name: "aa", age: "11", email: "aa@gmail.com", couuntry: "usa" },
//     { name: "bb", age: "22", email: "bb@gmail.com", couuntry: "mm" },
//     { name: "cc", age: "33", email: "cc@gmail.com", couuntry: "ger" },
//     { name: "dd", age: "44", email: "dd@gmail.com", couuntry: "sg" },
//     { name: "ee", age: "55", email: "ee@gmail.com", couuntry: "th" },
//     { name: "ff", age: "66", email: "ff@gmail.com", couuntry: "usa" }
// ];

// for (let i = 0; i < arrObj.length; i++) {
//     let email = arrObj[i].email;
//     console.log(email);
//     console.log("send email to all", email);
// }

// // result
// // aa @gmail.com
// // bb@gmail.com
// // cc@gmail.com
// // dd@gmail.com
// // ee@gmail.com
// // ff@gmail.com

// const copyTest = [...arrObj];
// console.log(copyTest);






























