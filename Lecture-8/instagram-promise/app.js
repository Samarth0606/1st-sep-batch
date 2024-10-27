
// select image
function step1(){
    return new Promise( function( resolve , reject ){
        console.log("plzz wait i am selecting image");
        setTimeout(function(){
            resolve("selected image");
        } , 4000)
    } )
}

// filter
function step2(image){
    return new Promise( function( resolve , reject ){
        console.log(`plzz wait applyin filter ${image}`);
        setTimeout(function(){
            resolve("filtered image");
        } , 2000)
    } )
}

function step3(filter){
    return new Promise( function( resolve , reject ){
        console.log(`plzz wait adding caption to ${filter}`);
        setTimeout(function(){
            resolve("captioned image");
        } , 5000)
    } )
}
function step4(caption){
    return new Promise( function( resolve , reject ){
        console.log(`plzz wait uploading the ${caption}`);
        setTimeout(function(){
            resolve("image uploaded");
        } , 3000)
    } )
}

// vertical growth
step1()
.then( function(image){
    console.log(image);
    return step2(image)
} )
.then( function(filter){
    console.log(filter);
    return step3(filter)
} )
.then( function(caption){
    console.log(caption);
    return step4(caption)
} )
.then( function(upload){
    console.log(upload);
} )
.catch(function(err){
    console.log(err , "error");
})













