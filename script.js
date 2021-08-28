const fTalent = document.getElementById('ftalent');
const fWork = document.getElementById('fwork');
const whyUpwork = document.getElementById('whyupwork');

const pseudoContent = document.getElementById('pseudo-content');
const pseudoContent1 = document.getElementById('pseudo-content1');
const pseudoContent2 = document.getElementById('pseudo-content2');





const kanan = document.querySelector('.kanan');
const kanan1 = document.querySelector('.kanan1');
const kanan2 = document.querySelector('.kanan2');

const hover1= document.getElementsByClassName('hover1')[0];
const hover2= document.getElementsByClassName('hover2')[0];
const hover3= document.getElementsByClassName('hover3')[0];

hovers = [hover1,hover2,hover3];

function psuedoActive(node,element,modClass){
    node.addEventListener('mouseover',function(){
    element.classList.remove(modClass);
    
    });
    node.addEventListener('mouseleave',function(){
        element.classList.add(modClass);

    });
    
}
psuedoActive(fTalent,pseudoContent,'display-none');
psuedoActive(fwork,pseudoContent1,'display-none');
psuedoActive(whyUpwork,pseudoContent2,'display-none');


function mOver(hov,dispNone,dispNone1,dispFlex) {
    hov.addEventListener('mouseover', function() {
        dispNone.style.display = 'none';
        dispNone1.style.display = 'none';
        dispFlex.style.display = 'flex';
        hovers.forEach(hover => {
            if(hover.classList.contains('active')) {
                hover.classList.remove('active');
            };
            return
        });
        
        hov.classList.add('active');
    });
    return
};

mOver(hover1,kanan1,kanan2,kanan);
mOver(hover2,kanan,kanan2,kanan1);
mOver(hover3,kanan,kanan1,kanan2);

