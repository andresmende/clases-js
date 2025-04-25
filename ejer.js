// realizar una funcion que almacene en un arreglo todos los numero pares desde a hasta b

function valor(a=4 , b =3) {
    let num=[];
    

    for(i= a ; i <= b ; i++){
        // console.log(i);
         if(i% 2 === 0)//num.push(i);
         {
            console.log(i);
         }
    }
 console.log(num);
}

valor(1,100);