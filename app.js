const div = document.getElementsByTagName('div');
const a = document.getElementsByTagName('a');
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',function (e){
    cursor.setAttribute('style',"top: " +(e.pageY - 10)+"px; left: " + (e.pageX - 10)+"px;" );
    let number = 678;
    let mesure = e.y;
    let mesureX = e.x;
    if(window.innerWidth < 1756 || window.innerWidth >1756){
        mesure = e.y - window.innerWidth;
        mesureX = e.x - window.innerWidth; 
        
    }
        if( mesure<=  274  && mesureX>= 1500 ){
            for( let i = 0; i < e.y ; i++){
                number = number+1;
                cursor.style.background = `rgba(255 ,0,0,0.${number})`;
            }
        }
        // console.log(e);
        console.log(window.innerWidth);
        console.log(mesure);
})