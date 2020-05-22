function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'boy.jpg')
            } else if (idade < 25){
                //jovem
                img.setAttribute('src', 'youg man.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'man.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'old man.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'girl.jpg')
            } else if (idade < 25){
                //jovem
                img.setAttribute('src', 'young woman.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'woman.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'old woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}