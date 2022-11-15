function ValiderTaille(){
    let tailles = Number(document.getElementById('taille').value);
    if(tailles == document.getElementById('taille').value){
    document.getElementById('taille').disabled = true;
    }
    if (tailles == 1) {
    document.getElementById('case1').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
    }
    if (tailles == 2) {
    document.getElementById('case1').style.display = 'block';
    document.getElementById('case2').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
    }
    if (tailles == 3) {
    document.getElementById('case1').style.display = 'block';
    document.getElementById('case2').style.display = 'block';
    document.getElementById('case3').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
    }
    if (tailles == 4) {
    document.getElementById('case1').style.display = 'block';
    document.getElementById('case2').style.display = 'block';
    document.getElementById('case3').style.display = 'block';
    document.getElementById('case4').style.display = 'block';
    ocument.getElementById('btn2').style.display = 'block';
    }id="btn1" 
    if (tailles == 5) {
    document.getElementById('case1').style.display = 'block';
    document.getElementById('case2').style.display = 'block';
    document.getElementById('case3').style.display = 'block';
    document.getElementById('case4').style.display = 'block';
    document.getElementById('case5').style.display = 'block';
    document.getElementById('btn2').style.display = 'block';
    }
}
let trier =[];
function trierTbl() {
    var taillebtn = document.getElementById('taille').value;
    var  Number1 = document.getElementById ('case1').value;
    var  Number2 = document.getElementById ('case2').value;
    var  Number3 = document.getElementById ('case3').value;
    var  Number4 = document.getElementById ('case4').value;
    var  Number5 = document.getElementById ('case5').value;
    var  Number6 = document.getElementById ('case6').value;
    var  Number7 = document.getElementById ('case7').value;
    var  Number8 = document.getElementById ('case8').value;
    if (taillebtn==1) {
        trier.push(Number1);
        showNumers();
    }
    if (taillebtn==2) {
        trier.push(Number1);
        trier.push(Number2);
        showNumers();
    }
    if (taillebtn==3) {
        trier.push(Number1);
        trier.push(Number2);
        trier.push(Number3);
        showNumers();
    }
    if (taillebtn==4) {
        trier.push(Number1);
        trier.push(Number2);
        trier.push(Number3);
        trier.push(Number4);
        showNumers();
    }
    if (taillebtn==5) {
        trier.push(Number1);
        trier.push(Number2);
        trier.push(Number3);
        trier.push(Number4);
        trier.push(Number5);
        showNumers();
    }
    if (taillebtn==6) {
        trier.push(Number1);
        trier.push(Number2);
        trier.push(Number3);
        trier.push(Number4);
        trier.push(Number5);
        trier.push(Number6);
        showNumers();
    }
    if (taillebtn==7) {
        trier.push (Number1);
        trier.push (Number2);
        trier.push (Number3);
        trier.push (Number4);
        trier.push (Number5);
        trier.push (Number6);
        trier.push (Number7);
        showNumers();
    }
    if (taillebtn==8) {
        trier.push (Number1);
        trier.push (Number2);
        trier.push (Number3);
        trier.push (Number4);
        trier.push (Number5);
        trier.push (Number6);
        trier.push (Number7);
        trier.push (Number8);
        showNumers();
    }
}
function showNumers() {
    var afch="";
    function sort( trier) {
        for (var i = 0; i < trier.length; i++) {
            var min=i;
            for (var j = i+1; j < trier.length; j++) {
                if (trier[j] < trier[min]) {
                    min = j;
                }   
            }
            var tmp = trier[i];
            trier[i] = trier[min];
            trier[min] = tmp;
        }    
        return    
    };   
    sort(trier);
    for (var i = 0; i < trier.length; i++) {
        afch += `
            <table style="border-collapse:collapse;margin-top:20px;" border="2">
                    <tr style="width:100px;height:fit-content;">    
                    <td style="font-size:20px;text-align:center;width:50px;height:50px;margin:0 0 0 10px;">${trier[i]}</td> 
                    </tr>    
            </table>
        `;
    }
    document.getElementById('display').innerHTML = afch;
    document.getElementById('display').style.display='flex';
    document.getElementById('display').style.textAlign='center';
}

function ValiderTaille2(){
    let tailles = Number(document.getElementById('taille2').value);
    if(tailles == document.getElementById('taille2').value){
    document.getElementById('taille2').disabled = true;
    }
    if (tailles == 1) {
    document.getElementById('cas1').style.display = 'block';
    }
    if (tailles == 2) {
    document.getElementById('cas1').style.display = 'block';
    document.getElementById('cas2').style.display = 'block';
    }
    if (tailles == 3) {
    document.getElementById('cas1').style.display = 'block';
    document.getElementById('cas2').style.display = 'block';
    document.getElementById('cas3').style.display = 'block';
    }
    if (tailles == 4) {
    document.getElementById('cas1').style.display = 'block';
    document.getElementById('cas2').style.display = 'block';
    document.getElementById('cas3').style.display = 'block';
    document.getElementById('cas4').style.display = 'block';
    }
    if (tailles == 5) {
    document.getElementById('cas1').style.display = 'block';
    document.getElementById('cas2').style.display = 'block';
    document.getElementById('cas3').style.display = 'block';
    document.getElementById('cas4').style.display = 'block';
    document.getElementById('cas5').style.display = 'block';
    }
}


document.getElementById('tableaux').onclick=function(){
    document.getElementById('tri').classList.toggle('hide');
    document.getElementById('recherche').classList.toggle('hide');

}
document.getElementById('chaines').onclick=function(){
    document.getElementById('RS').classList.toggle('hide');
    document.getElementById('voyelles').classList.toggle('hide');

}
document.getElementById('boucles').onclick=function(){
    document.getElementById('multiblication').classList.toggle('hide');
    document.getElementById('guess').classList.toggle('hide');
    document.getElementById('lonsage').classList.toggle('hide');

}
let menu = document.getElementById('menu-btn');
menu.addEventListener('click', ()=>{
    document.querySelector('body>nav').classList.toggle('show')
})
let menuIn = document.getElementById('menu-btn-in');
menuIn.addEventListener('click', ()=>{
    document.querySelector('body>nav').classList.toggle('show')
})

