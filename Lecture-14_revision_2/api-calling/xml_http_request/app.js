

// const req = new XMLHttpRequest();

// // console.log(req , "1");
// req.open('GET' , "https://api.tvmaze.com/search/shows?q=girls")

// req.send();
// // console.log(req , "2");

// req.onload = function(response){
//     console.log(this.response , "success 1"); 
//     // console.log(req.response , "success 2"); 
// }
// req.onerror = function(response){
//     console.log(this , "error");
// }

// -------------------------------------

// fetch / axios


fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(resp){
    return resp.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(err);
})



axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(resp){
    console.log(resp.data);
})
.catch(function(err){
    console.log(err);
})

