function changeContent(content){
    if(content==="accueil"){
        if(document.getElementsByClassName('competence')[0].classList.contains('visible')){
            document.getElementsByClassName('competence')[0].classList.remove('visible');
            document.getElementsByClassName('competence')[0].classList.add('hidden');
            document.getElementsByClassName('accueil')[0].classList.remove('hidden');
            document.getElementsByClassName('accueil')[0].classList.add('visible');
        }
    }
    else if(content==="competence"){
        if(document.getElementsByClassName('accueil')[0].classList.contains('visible')){
            document.getElementsByClassName('accueil')[0].classList.remove('visible');
            document.getElementsByClassName('accueil')[0].classList.add('hidden');
            document.getElementsByClassName('competence')[0].classList.remove('hidden');
            document.getElementsByClassName('competence')[0].classList.add('visible');
        }
    }
}