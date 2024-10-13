

// check if your variable is inside block or not
//    case - 1 ->   no
            //1.1  var         -> global
            //1.2  let & const -> script
//    case - 2 ->  yes
            // case 2.1 -> is that block becoz of a function
                //no 
                // 2.1.1    var        -> global
                        // let & const -> block
                //yes
                // 2.1.2   var         -> functional
                        // let & const -> block

// local => block and functional scope togther are known as local scope

var a = 10;     //global
let b = 100;    //script
const c = 1000; //script

if(true){
    var d = 20;      // global
    let e = 200;     // block
    const f = 2000;  // block
}
function sam(){
    var g = 30;       // functional
    let h = 300;      // block
    const i = 3000;   // block
}
sam()












