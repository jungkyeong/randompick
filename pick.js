const btn= document.querySelector("button");


const asd= (event)=>{
    
    let a= Math.random(event)*100;
    let aa=Number.parseFloat(a).toFixed(0);

    if(aa<10){
        console.log("S 등급!");
    }

    else if(aa<30&&aa>=10){
        console.log("A 등급!");
    }

    else if(aa>=30&&aa<60){
        console.log("B 등급!");
    }

    else {
        console.log("C 등급!");
    }

    console.log(aa);
}
btn.addEventListener("click",asd);