function changeContent(content){
    if(content==="accueil"){
        if(document.getElementsByClassName('competence')[0].classList.contains('visible')){
            document.getElementsByClassName('competence')[0].classList.remove('visible');
            document.getElementsByClassName('competence')[0].classList.add('hidden');
            document.getElementsByClassName('accueil')[0].classList.remove('hidden');
            document.getElementsByClassName('accueil')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('projet')[0].classList.contains('visible')){
            document.getElementsByClassName('projet')[0].classList.remove('visible');
            document.getElementsByClassName('projet')[0].classList.add('hidden');
            document.getElementsByClassName('accueil')[0].classList.remove('hidden');
            document.getElementsByClassName('accueil')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('propos')[0].classList.contains('visible')){
            document.getElementsByClassName('propos')[0].classList.remove('visible');
            document.getElementsByClassName('propos')[0].classList.add('hidden');
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
        else if(document.getElementsByClassName('projet')[0].classList.contains('visible')){
            document.getElementsByClassName('projet')[0].classList.remove('visible');
            document.getElementsByClassName('projet')[0].classList.add('hidden');
            document.getElementsByClassName('competence')[0].classList.remove('hidden');
            document.getElementsByClassName('competence')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('propos')[0].classList.contains('visible')){
            document.getElementsByClassName('propos')[0].classList.remove('visible');
            document.getElementsByClassName('propos')[0].classList.add('hidden');
            document.getElementsByClassName('competence')[0].classList.remove('hidden');
            document.getElementsByClassName('competence')[0].classList.add('visible');
        }
    }
    else if(content==="projet"){
        if(document.getElementsByClassName('accueil')[0].classList.contains('visible')){
            document.getElementsByClassName('accueil')[0].classList.remove('visible');
            document.getElementsByClassName('accueil')[0].classList.add('hidden');
            document.getElementsByClassName('projet')[0].classList.remove('hidden');
            document.getElementsByClassName('projet')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('propos')[0].classList.contains('visible')){
            document.getElementsByClassName('propos')[0].classList.remove('visible');
            document.getElementsByClassName('propos')[0].classList.add('hidden');
            document.getElementsByClassName('projet')[0].classList.remove('hidden');
            document.getElementsByClassName('projet')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('competence')[0].classList.contains('visible')){
            document.getElementsByClassName('competence')[0].classList.remove('visible');
            document.getElementsByClassName('competence')[0].classList.add('hidden');
            document.getElementsByClassName('projet')[0].classList.remove('hidden');
            document.getElementsByClassName('projet')[0].classList.add('visible');
        }

    }
    else if(content==="propos"){
        if(document.getElementsByClassName('accueil')[0].classList.contains('visible')){
            document.getElementsByClassName('accueil')[0].classList.remove('visible');
            document.getElementsByClassName('accueil')[0].classList.add('hidden');
            document.getElementsByClassName('propos')[0].classList.remove('hidden');
            document.getElementsByClassName('propos')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('competence')[0].classList.contains('visible')){
            document.getElementsByClassName('competence')[0].classList.remove('visible');
            document.getElementsByClassName('competence')[0].classList.add('hidden');
            document.getElementsByClassName('propos')[0].classList.remove('hidden');
            document.getElementsByClassName('propos')[0].classList.add('visible');
        }
        else if(document.getElementsByClassName('projet')[0].classList.contains('visible')){
            document.getElementsByClassName('projet')[0].classList.remove('visible');
            document.getElementsByClassName('projet')[0].classList.add('hidden');
            document.getElementsByClassName('propos')[0].classList.remove('hidden');
            document.getElementsByClassName('propos')[0].classList.add('visible');
        }
    }
}