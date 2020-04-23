document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit", function(event) {
    
    let input = document.querySelector('#new-task-description')
     // This line finds the text input square 
    let list = document.createElement('li')
    // This line creates the li tags 
    let ul = document.querySelector("#tasks")
    console.log(ul)
    // This line find the ul tags that I'll put the list inside
    ul.append(list)
    list.append(input.value)
  event.preventDefault();
  });

  
 
   
  
  


  




});



// 


// 2. put input.value inside those tags 
// 3. do this each time a new code is submitted 



  