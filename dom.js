
//you can comment in vs code by pressing ctrl + c+ k and uncomment by ctrl+c+u
//In this section we would just experiement with DOM properties of JavaScript doing
//various changes to the HTML using just JS.



// To examine the whole structure of the document

// console.dir(document)

//We can check any attribute of the document using the .someattribute of the document object

// console.log(document.body)

// Get elements by ID (We can use other ways like getting elements of the document 
//by ID,ClassName,TagName etc.)

//console.log(document.getElementById('header-title'));
var header = document.getElementById('header-title')
var headerChanger = document.getElementById('main-header');

//few ways to change the contemt of the elements, here the header title
//innerHTML
//innerText
//textContent

//header.textContent = 'Hello World'
header.innerHTML = '<font color= "white" >Shopping List</font>'
//header.innerText = 'hello world';


//change the style of the header element

headerChanger.style.backgroundColor = "#71ade8";
headerChanger.style.padding = "20px 20px";
header.style.marginLeft = "50px";


// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
//var li = document.getElementsByTagName('li');
//console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
var headermain = document.querySelector('#main-header');
headermain.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
//console.log(input);
//input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Submit"

// var item = document.querySelector('.list-group-item');
//console.log(item)
// var item = document.querySelector('.list-group-item');
//item.style.color = 'lightBlue';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';
//Examine Document object
//console.dir(document)


// console.log(document.domain);
// console.log(document.URL);
document.title = 'Shopping-List';





//The main Code for the shopping list application

// we need to submit a new item, search a item or delete a existing item

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
//itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

var newItem = document.getElementById('item').value;

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  
  var newItem = document.getElementById('item').value;
  

    if(localStorage.getItem('itemD')===null)
    {

        var itemD = [];
        itemD.push(newItem);

        localStorage.setItem('itemD', JSON.stringify(itemD));

    }
    
    else 
    {
        var itemD = JSON.parse(localStorage.getItem('itemD'));

        itemD.push(newItem);
        //reset back
        localStorage.setItem('itemD', JSON.stringify(itemD));
    }

    fetchItem();

}

function fetchItem(){
    //e.preventDefault();
    var newItem = document.getElementById('item').value;
    var itemList = document.getElementById('items');
    console.log(newItem)
    // Get bookmarks from localStorage
    var itemD = JSON.parse(localStorage.getItem('itemD'));
    // Get output id
    //console.log(itemD)
    var itemResults = document.getElementById('itemResults');
    
    itemResults.innerHTML='';
    X='Delete';

    for(var i = 0; i < itemD.length; i++){

        itemResults.innerHTML += '<li class="list-group-item">'+ '<a href="#" >'+ itemD[i] + '</a>' +
                                 '<button onclick="deleteItem(\''+itemD[i]+'\')" class="btn btn-danger btn-sm float-right delete">'+ X +'</button>'+'</li>';
        
        
    }

    // Build output
    // // Create new li element
    // var li = document.createElement('li');
    // // Add class
    // li.className = 'list-group-item';
    // // Add text node with input value
    // li.appendChild(document.createTextNode(newItem));

    // // Create del button element
    // var deleteBtn = document.createElement('button');

    // // Add classes to del button
    // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // // Append text node
    // deleteBtn.appendChild(document.createTextNode('X'));

    // // Append button to li
    // li.appendChild(deleteBtn);

    // // Append li to list
    // itemList.appendChild(li);

  //observe here that deleteBtn is the child of li and li is the child of itemList

  //save to local storage

  // save bookmarks in local storage

  }

 function deleteItem(item){

    var itemD = JSON.parse(localStorage.getItem('itemD'));   
    
    for(var i = 0; i<itemD.length;i++){
        console.log(itemD[i])
        console.log(item)
        if(itemD[i]==item){
            itemD.splice(i,1);
        }

    }

    localStorage.setItem('itemD', JSON.stringify(itemD));


 }




// Filter Items

function filterItems(e){
  // convert text to lowercase
  //e.preventDefault();
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();

  ul = document.getElementById("itemResults");
  li = ul.getElementsByTagName('li');
  console.log(input);
  
  
  for (i = 0; i < li.length; i++) {
    console.log(li[i]);
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
    {
        li[i].style.display = "";
    }
     else
    {
        li[i].style.display = "none";
    }
    // if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //     li[i].style.display = "";
    // } else {
    //     li[i].style.display = "none";
    // }
}

  
 
}






























