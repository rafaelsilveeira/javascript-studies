let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100){
        return true;
    } else {
        return false;
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
            item.text = `Valor ${num.value} adicionado.`;
            lista.appendChild(item);
            res.innerHTML = '';
    } else {
        window.alert(`Valor inválido ou já existe na lista.`);
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0

        for(let i in valores){
            soma += valores[i]; // soma = soma + valores[i]
            maior = Math.max(...valores)// if (valores[i] > maior){ maior = valores[i];}
            menor = Math.min(...valores)// if (valores[i] < menor){ menor = valores[i];}
        }
        media = soma/tot;
        
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média é ${media}.</p>`;

    }
}

/*
        if (pos.indexOf(num) == -1){
            pos.push(num);
            alert(`posição ${pos.indexOf(num)}`);
            
            let item = document.createElement('option');
            item.text = `Valor ${num} adicionado na posição ${pos.indexOf(num)}.`;
            lista.appendChild(item);
        
            res.innerHTML = `vetor ${pos}`;
        }



    }
    
    
}

function localizar(){
    if (num.value.length == 0){
        alert('Por favor, informe um número e tente novamente.');
    } else if (num.value <1 || num.value >100){
        alert('Número inválido! Por favor, informe um número entre 1 e 100.');
    }  else {
        num = Number(num.value);
        
        for(let i=0; i<100; i++){
            pos[i] = Number(pos[i].value);
            if (pos[i] == 0){
                pos[i] = num;
                res.innerHTML = `Numero ${num} salvo em vetor ${pos[0]}`;
            } else if (pos[i] == 0 && pos.indexOf(num) == -1){
                pos[i] = num

                let item = document.createElement('option');
                item.text = `Valor ${num} adicionado na posição ${i}.`;
                lista.appendChild(item);

                res.innerHTML = `Numero ${num} vetor ${pos[i]}`;
            } else{
                res.innerHTML(`O número ${num} já existe na lista.`)
            }
        }
        
}*/