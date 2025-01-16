let valores = [4,2,7,1,8,9]
valores.sort
/*
for (let pos = 0; pos < valores.length;pos++){
    console.log(`A Posicão ${pos} tem o valor ${valores[pos]}`)
}
*/ 

for(let pos in valores){
    console.log(`A Posicão ${pos} tem o valor ${valores[pos]}`)
}