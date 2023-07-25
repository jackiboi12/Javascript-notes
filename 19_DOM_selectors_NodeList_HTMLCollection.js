// browser commands-> browser ke console pr chalengi
// document.getElementById("title") //returns value jiska id = title
// document.getElementById("title").id  //title
// document.getElementById("title").class  //undefined
// document.getElementById("title").className  //heading
// document.getElementById("title").getAttribute('id')  //title
// document.getElementById("title").getAttribute('class')  //heading
// document.getElementById("title").setAttribute('class','test')  
// output toh undefined dega but class ka name change karega for sure


// const title = document.getElementById("title") 
// title.style.backgroundColor = "green"    //color change hojaayega
// title.style.padding = "15px" 


//title.innerHTML //Output-> DOM WITH CHAI AND CODE 
//title.textContent //Output-> DOM WITH CHAI AND CODE 
//title.innerText //Output-> DOM WITH CHAI AND CODE 
//difference btw All three->
// innerText bas visible cheeze show karega jo page pr hongi
// innerContent sab show karega jo bhi load hua hoga 
// innerHTML will return everything + All HTML attributes


// document.querySelector('h1') //return first h1
// document.querySelector('#title') 
// document.querySelector('.heading') 
// document.querySelector('input[type="password"]') 
// document.querySelector('input[type="password"]') 
// document.querySelector('p:first-child') 


// const myUl =  document.querySelector('ul') 
// const turnGreen = myUl.querySelector('li')
//turnGreen.style.backgroundColor = "green"
// turnGreen.innerText   //'one'
// turnGreen.innerText="five"   //'five'

// document.querySelectorAll('li')
// const templiList = document.querySelectorAll('li')
// templiList   //it is nodelist therefore map use nahi karskte
// templiList[0].style.color = "green"  
// templiList.forEach(function (l){
//     l.style.backgroundColor = 'green'
// })


// const myH1 = document.querySelectorAll('h1')
// myH1[0].style.color = "green"


//this is a HTML collection
// const tempClassList = document.getElementsByClassName('list_item')
//Convert into Nodelist
// const myConvertedArray=Array.from(tempClassList)
// myConvertedArray.forEach(function(li){
//     li.style.color = 'orange'
// })







