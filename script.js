let nombre;
let miNombre =[];

function crearArray() {
nombre=document.getElementById("string").value;
nombre=nombre.toLowerCase();
miNombre =[];
miNombre=nombre.split("");  
   for(i=0; i<miNombre.length; i++){
     console.log(miNombre[i])
     document.getElementById("imprirAquiElNombre").innerHTML = miNombre;
   }

}
 // exercici 2
 function validaconsonant(letra){
   var regexp = /([b|c|d|f|g|h|l|m|n|p|q|r|s|t|v|z|w|x|y|j|k])/g;
   return regexp.test(letra);
 }
function vowelCounter() {
  nombre=document.getElementById("string2").value;
  nombre=nombre.toLowerCase();
  miNombre=nombre.split("");
  let text="";
  var letra;
    for (letra of miNombre){     
      if((letra =="a") || (letra =="e") || (letra =="o") || (letra =="i") || (letra =="u")){
         console.log("He encontrado la vocale " + letra);
         text+= "He encontrado la vocale " + letra +"<br>";
         
       }else if(!(validaconsonant(letra))){
        console.log("Los nombres de personan no contienen numero, como el numero " + letra);
        text+="Los nombres de personan no contienen numero, como el numero " + letra+ "<br>"; 
        
       
             
       }else{
        console.log("He encontrado la consonant " + letra);
        text+="He encontrado la consonant " + letra + "<br>";
        
       }
       document.getElementById("imprimirAqui").innerHTML = text;
      }
     }

     // Exercici 3 
     function arrayMap(){
      nombre=document.getElementById("string3").value;
      nombre=nombre.toLowerCase();
      miNombre=nombre.split("");     
      var repeated = new Array;

      miNombre.map(function(letra){
          repeated[letra] = ((repeated[letra] || 0) + 1);
      })
      console.log(repeated);
     }


     // Exercici 4 
     function dosArray(){
       let nombre=document.getElementById("nom").value;
       let apellido=document.getElementById("cognom").value;
       let miApellido= new Array;
       let espacio=" ";

       miNombre=nombre.split("");
       miApellido=apellido.split("");

      let  nombreCompleto = [].concat(miNombre, espacio, miApellido);
        console.log(nombreCompleto);
        document.getElementById("exercici4").innerHTML=nombreCompleto;



     }
    
    
     
   