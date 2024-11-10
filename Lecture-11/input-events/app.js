// let inpEl = document.querySelector('input');

// inpEl.addEventListener('input' , function(){
//     console.log("input got triggered");
// })

// ------------------------------------------

// let inpEl = document.querySelector('input');

// inpEl.addEventListener('input' , function(event){
//     console.log(event);                 //entire infomation about the event
//     console.log(event.target);          //target element
//     console.log(event.target.value);    //target element's value (getter)
//     event.target.value="vohra";         //setter
// } )

// ------

// inpEl.addEventListener('input' , function(event){
//     console.log(event);    //entire infomation about the event
//    console.log( inpEl.value );
// } )


// ------------------------------------------

// keydown , keyup

// let inpEl = document.querySelector('input');

// inpEl.addEventListener('keydown' , function(e){
//     console.log(e.target.value);
// })

// -----------------------
let inpEl = document.querySelector('input');

inpEl.addEventListener('keydown', function(e){
    console.log(e);
    
   if(e.key === "l"){
    console.log("balle balles");
    
   }
   if(e.which === 13){
    console.log("entered enter");
    
   }
    
})



