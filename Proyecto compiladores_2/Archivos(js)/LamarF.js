let Lista_1;
let Lista_2;

function lenguajes(){
   var LengS=document.getElementById("lenguaje");
   var Sel_Len=LengS.options[LengS.selectedIndex].text;
   var ResultadoV=document.getElementById("Resultado");
   recibirLeng();

   switch (Sel_Len){   
      case "Potencia De Un Lenguaje": {
         let Num=document.getElementById("exponente").value;
         Num=parseInt(Num);
         ResultadoV.value = Potencia2(Lista_1, Lista_1, Num);
         break;
      }
      case "Inverso De Un Lenguaje": {
         ResultadoV.value = InversaL(Lista_1);
         break;
      }
      case "Cardinal De Un Lenguaje": {
         ResultadoV.value = "Cardinal Leguaje 1: " + Cardinal(Lista_1) + "\n" + "Cardinal Leguaje 2: " + Cardinal(Lista_2);
         break;
      }
      case "Union De Lenguajes": {
         ResultadoV.value = "{" + Union(Lista_1, Lista_2) + "}";
         break;
      }
      case "Diferencia De Lenguajes": {
         let R=Diferencia(Lista_1,Lista_2)
         if(R.length==0){
            ResultadoV.value="vacio";
         }else{
            ResultadoV.value=R;
         }
         break;
      }
      case "Intersección De Lenguajes": {
         let R=Interseccion(Lista_1,Lista_2)
         if(R.length==0){
            ResultadoV.value="vacio";
         }else{
            ResultadoV.value=R;
         }
         break;
      }
      case "Concatenación De Lenguajes": {
         ResultadoV.value=concatenacion(Lista_1,Lista_2);
         break;
      }
   }
      

}

function AlfabetosF(){
   var LengS=document.getElementById("alfabeto");
   var Sel_Alf=LengS.options[LengS.selectedIndex].text;
   var ResultadoV=document.getElementById("Resultado");
   recibirAlfa()

   switch(Sel_Alf){
      case "Union De Alfabetos":{
         ResultadoV.value=Union(Lista_1,Lista_2);
         break;
      }
      case "Diferencia De Alfabetos":{
         let R=Diferencia(Lista_1,Lista_2)
         if(R.length==0){
            ResultadoV.value="vacio";
         }else{
            ResultadoV.value=R;
         }
         break;
      }
      case "Intersección De Alfabetos":{
         let R=Interseccion(Lista_1,Lista_2)
         if(R.length==0){
            ResultadoV.value="vacio";
         }else{
            ResultadoV.value=R;
         }
         break;
      }
   }

}

function palabra(){
   var RecibirP=document.getElementById("Palabra").value;
   var ResultadoV=document.getElementById("Resultado");

   var PalS=document.getElementById("palabra");
   var Sel_Pal=PalS.options[PalS.selectedIndex].text;

   switch(Sel_Pal){
      case "Cardinal De Una Palabra":{
         ResultadoV.value= "Cardinal de la palabra: " + Cardinal(RecibirP);
         break;   
      }
      case "Inversa De Una Palabra" :{
         ResultadoV.value=InversaP(RecibirP);
         break;
      }
   }
}