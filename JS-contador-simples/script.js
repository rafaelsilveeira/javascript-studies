function contar(){
    let inicio = document.getElementById('txtinicio');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso');
    let res = document.querySelector('div#result');
//    var i = inicio.value
   

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //    window.alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossível contar. Faltam dados!';
    }else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){ //Contagem crescente
                res.innerHTML += `${c} \u{1F449}`;
            }
        } else {
            for(let c = i; c >= f; c -= p){ // Contagem regressiva
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
//    res.innerHTML = (`TESTE ${i}`);
//    i = i++;
//    res.innerHTML = (`${i}`);
    /*
    do{
        res.innerHTML = (`${i}`);
        i = i + passo.value;
        if(i <= fim.value){
            res.innerHTML = (`-> ${i}`);
        }
    }while(i<=fim.value)
        
    /*
    for(i=inicio.value;i<=fim.value;i=passo.value){
            res.innerHTML = (`${i} -> `);
        }
    
    //res.innerHTML = (`TESTE ${inicio.value} / ${fim.value} / ${passo.value}`);
*/
}