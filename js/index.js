function mostraVideos(tipo) {
    highlightSelectedButton(tipo);
    let videosGato = document.getElementsByClassName('video-gato');
    for (const video of videosGato) {
        console.log(videosGato)
        tipo === 'gatos' ? video.classList.remove('hidden') : video.classList.add('hidden');
    }
    let videosCachorro = document.getElementsByClassName('video-cachorro');
    for (const video of videosCachorro) {
        tipo === 'gatos' ? video.classList.add('hidden') : video.classList.remove('hidden');
    }

    let imgCachorro = document.getElementsByClassName('botao-cachorro');
    console.log(imgCachorro)

    for (const img of imgCachorro) {
        tipo === 'gatos' ? img.classList.add('hidden') : img.classList.remove('hidden');
    }
    let imgGato =document.getElementsByClassName('botao-gato')
    for(const img of imgGato){
        tipo === 'gatos' ? img.classList.remove('hidden') : img.classList.add('hidden');
    }

    let iCachorro= document.getElementsByClassName('I-cachorro');
    console.log(imgCachorro)

    for (const img of iCachorro) {
        tipo === 'gatos' ? img.classList.add('hidden') : img.classList.remove('hidden');
    }
    let iGato =document.getElementsByClassName('I-gato')
    for(const img of iGato){
        tipo === 'gatos' ? img.classList.remove('hidden') : img.classList.add('hidden');
    }
};
function highlightSelectedButton(tipo){
    let botaoGato = document.getElementById("botaoGato");
    let botaoCachorro = document.getElementById("botaoCachorro");

    if (tipo === 'gatos'){
        botaoCachorro.className = botaoCachorro.className.replace(/(?:^|\s)borderSelectionOn(?!\S)/g, '');
        botaoGato.className += ' borderSelectionOn';
        botaoGato.className = botaoGato.className.replace(/(?:^|\s)borderSelectionOff(?!\S)/g, '');
        if (!botaoCachorro.className.includes('borderSelectionOff')) {
            botaoCachorro.className += ' borderSelectionOff';
        }

    } else if (tipo === 'cachorros'){
        botaoGato.className = botaoGato.className.replace(/(?:^|\s)borderSelectionOn(?!\S)/g, '');
        botaoCachorro.className += ' borderSelectionOn';
        botaoCachorro.className = botaoCachorro.className.replace(/(?:^|\s)borderSelectionOff(?!\S)/g, '');
        if (!botaoGato.className.includes('borderSelectionOff')) {
            botaoGato.className += ' borderSelectionOff';
        }
    }
}
