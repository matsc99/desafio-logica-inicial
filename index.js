// Classificador de nível herói
let nivelXP = 20000
let nomeHeroi = "MatSC"

if (nivelXP <= 1000){
    console.log(" O Herói " + nomeHeroi + " está no nível Ferro");
} 
else if (nivelXP >= 1001 && nivelXP <= 2000){
    console.log(" O Herói " + nomeHeroi + " está no nível Bronze");
}   
else if (nivelXP >= 2001 && nivelXP <= 5000){
    console.log(" O Herói " + nomeHeroi + " está no nível Prata");
} 
else if (nivelXP >= 3001 && nivelXP <= 7000){
    console.log(" O Herói " + nomeHeroi + " está no nível Ouro");
} 
else if (nivelXP >= 7001 && nivelXP <= 8000){
    console.log(" O Herói " + nomeHeroi + " está no nível Platina");
} 
else if (nivelXP >= 8001 && nivelXP <= 9000){
    console.log(" O Herói " + nomeHeroi + " está no nível Ascendente");
} 
else if (nivelXP >= 9001 && nivelXP <= 10000){
    console.log(" O Herói " + nomeHeroi + " está no nível Imortal");
}
else {
    console.log(" O Herói " + nomeHeroi + " está no nível Radiante");
} 
