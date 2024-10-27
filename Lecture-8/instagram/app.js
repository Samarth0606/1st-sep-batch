function step1(fn){
    console.log('plz wait i am selection image');
    setTimeout( function(){
        fn("selected image");
    } , 4000 )
}

function step2(image , fn){
    console.log(`plz wait applying filter to the ${image}`);
    setTimeout(function(){
        fn("filtered image")
    } , 2000)
}

function step3(filter , fn){
    console.log(`plz wait adding caption to the ${filter}`);
    setTimeout(function(){
        fn("captioned image")
    } , 5000)
}
function step4(caption){
    console.log(`plz wait uploading the ${caption}`);
    setTimeout(function(){
        console.log("image finally uploaded");
    } , 3000)
}

// callback hell
step1( function(image){ 
    console.log(image);
    step2(image , function(filter){
        console.log(filter);
        step3(filter , function(caption){
            console.log(caption);
            step4(caption);
        } )
    } ) 
} )










