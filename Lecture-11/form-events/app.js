


let formEl = document.querySelector('form');



// event -> submits 

formEl.addEventListener('submit' , function(e){
    // submit -> refreshes
    e.preventDefault();

    console.log(formEl.children[0].value)
    console.log(formEl.children[1].value)
})