
// fetch -> JS ❌ -> WEB API -> returns a promise -> gives u partial data 
// wait -> JSON() -> returns a promise -> gives u entire data

// fetch with promise (way-1)
// fetch("https://api.tvmaze.com/search/shows?q=girls")
// .then((data)=>{
//     return data.json();
// })
// .then((resp)=>{
//     console.log(resp , "resp");
// })
// .catch((err)=>{
//     console.log(err , "err");
// })

// -----------------------------

// fetch with async-await (way-2)
// async function callApi(){
//     let data = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     let resp = await data.json();
//     console.log(resp);
// }
// callApi()

// ----------------------------------------------------------------------

{/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */}

// axios -> 3rd party library -> returns a promise -> gives u entire data at once

// axios with promise
// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then(function(resp){
//     console.log(resp.data);
// })
// .catch(function(err){
//     console.log(err);
// })

// ------------

// axios with async-await

// async function callAxiosApi(){
//     let resp = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
//     console.log(resp.data); 
// }

// callAxiosApi()




