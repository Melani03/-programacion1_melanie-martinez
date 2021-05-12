

function calcular(){

    const a= document.querySelector ("#inp_a").value;
    const b= document.querySelector ("#inp_b").value;
    const c= document.querySelector ("#inp_c").value;

    let bloque1= (Math.pow(b,2))-(4*a*c);
    let raiz = Math.sqrt(bloque1)
    let bloque2= (2*a)
    let bloque3= raiz/bloque2
    let raiz1= -b + bloque3
    let raiz2= -b - bloque3 
    
}
    
 

 