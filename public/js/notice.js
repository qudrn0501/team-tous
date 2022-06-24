const pageClass = document.querySelectorAll('.page_all');
const pageName = document.getElementsByName('page_all');

function pageAct(){
    for(i = 1; i <= pageName.length; i++){
        if ( window.location.pathname == `/notice/${i}`) {
            let j = i-1;
            pageName[j].className += ' page_active';
            for(k=0; k<j ||){

            }
        }
    }
}

pageAct();