


// function sam(){
//     let arr = [10,20,30,40];
//     console.log(arr);
// }

// sam();

// arr.push(1000);

// ----------------------


function sam(){
    let arr = [10,20,30];
    function vohra(){
        arr.push(200);
        console.log(arr);  
    }
    return vohra;
}
let returnedVAL = sam();
returnedVAL()


