function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imgmanha.png';
        document.body.style.background = '#ffd22e'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imgtarde.png';
        document.body.style.background = '#ab4432'
    } else {
        //BOA NOITE
        img.src = 'imgnoite.png';
        document.body.style.background = '#0c1c4a'
    }

}
