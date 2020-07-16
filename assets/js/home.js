
// var checkbox = document.querySelector("input[name=checkbox]");

// a{
//   if(i.checked) {
//         console.log('hi')
//     } else {
//         // Checkbox is not checked..
//     }
// };


var checkbox = document.getElementsByClassName("checkbox");
console.log(checkbox)

// checkbox.map(checkbox=>{
//   if(checkbox.checked){
//     console.log('hi')
//   }
// })

for(i of checkbox){
  i.addEventListener('change',()=>{
    if(i.checked){
      console.log(i)

    }
  })
}

var checkboxElems = document.getElementsByClassName("checkbox");
for (var i = 0; i < checkboxElems.length; i++) {
  checkboxElems[i].addEventListener("click", displayCheck);
}


function displayCheck(){
  let arr =[];
  var del = document.getElementsByClassName('delete');

  console.log(del[0].href)

  var s="";

  for(i=0;i<checkboxElems.length;i++){
    if(checkboxElems[i].checked){
      arr.push(checkboxElems[i].id)
    }
  }
  for (id of arr){
    s+="&ids[]="+id;
  }
  console.log(arr)
  var arrStr = encodeURIComponent(JSON.stringify(arr));
  del[0].href = `http://localhost:8100/delete-item/?`+s
}

// var getParams = function (url) {
// 	var params = {};
// 	var parser = document.createElement('a');
// 	parser.href = url;
// 	var query = parser.search.substring(1);
// 	var vars = query.split('&');
// 	for (var i = 0; i < vars.length; i++) {
// 		var pair = vars[i].split('=');
// 		params[pair[0]] = decodeURIComponent(pair[1]);
// 	}
// 	console.log(params) ;
// };
// getParams(window.location.href);


