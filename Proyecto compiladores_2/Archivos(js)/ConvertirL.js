function recibirLeng(){
    var Leng_1="";
    var leng_2="";
    leng_1=document.getElementById("Lenguaaje 1").value;
    leng_2=document.getElementById("Lenguaaje 2").value;
    Lista_1=Conlist(leng_1);
    Lista_2=Conlist(leng_2);
    Lista_1=eliminarRep(Lista_1);
   
}
function recibirAlfa(){
    var Leng_1="";
    var leng_2="";
    leng_1=document.getElementById("Alfabeto 1").value;
    leng_2=document.getElementById("Alfabeto 2").value;
    Lista_1=Conlist(leng_1);
    Lista_2=Conlist(leng_2);
    Lista_1=eliminarRep(Lista_1);
}
function Conlist(s,V){
    let conc="";
    let lista=[];
    if(s.charAt(0)!="{"){
        s="{"+s;
    }
    if(s.charAt(s.length-1)!="}"){
        s=s+"}";
    }
    for(let i=1;i<s.length-1;i++){
        if(s.charAt(i)!=','){
            if(s.charAt(i)!=V){
                if(conc!=V){
                    conc+=s.charAt(i);
                }else{
                    conc=s.charAt(i);
                }
            }else{
                if(conc===""){
                    conc=V;
                }
            }
        }else{
            if(conc!=''){
             lista.push(conc);
             conc="";
            }
        }
        if(i===s.length-2 && conc!='' && conc!=","){
         lista.push(conc);
        }
    }
    return lista;
}
function recibirWord(){
    var Word="";
    Word=document.getElementById("Palabra").value;
}
function eliminarRep(s){
    for(let i=0;i<s.length;i++){
        for(let j=0;j<s.length;j++){
            if(i!=j){
                if(s[i]===s[j]){
                    s.splice(j,1);
                }
            }
        }
    }
    return s;
}
