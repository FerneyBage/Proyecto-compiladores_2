function Union(l1,l2){
    let l3=l1.concat(l2);
    l3=eliminarRep(l3); 
    return l3;
}
function Interseccion(l1,l2){
    let l3=[];
    for(let i=0;i<l1.length;i++){
        if(0 <= l2.indexOf(l1[i])){
            l3.push(l1[i]);
        }
    }
    return l3;
}
function Diferencia(l1,l2){
    let l3=[];
    for(let i=0;i<l1.length;i++){
        if(0 > l2.indexOf(l1[i])){
            l3.push(l1[i]);
        }
    }
    return l3;
}
function Cardinal(C){
    return C.length;
}
function InversaP(Palabrac){
    let PalabraI="";
    for(let i=0;i<=Palabrac.length;i++){
        PalabraI+=Palabrac.charAt(Palabrac.length-i) ;
    }
    return PalabraI;
}
function InversaL(LenguajeC){
    let LenguajeI=[];
    
  for( let i=LenguajeC.length-1;i>=0;i--){
    let aux=LenguajeC[i];
    LenguajeI.push(InversaP(aux));
  }
  return LenguajeI;
}
function Concatenacion(lista1,lista2,V){
    let l1=0,l2=0,tm=lista1.length,tam2=lista2.length;
    let Final=[]; 
    while(l1<tm){
        if(l2<tam2){
            if(lista1[l1]!=V && lista2[l2]!=V){
                Final.push(lista1[l1]+lista2[l2]);
            }else if(lista1[l1]===V){
                Final.push(lista2[l2]);
            }else if(lista2[l2]===V){
                Final.push(lista1[l1]);
            }
            l2++; 
        }
        if(l2==tam2){
            l1++;
            l2=0;
        }
    }
    return Final;
}
function Potencia(LI,LF,P,V){
    for(let i=0;i<P-1;i++){
        LF=Concatenacion(LI,LF,v);
    }
    return LF;
}