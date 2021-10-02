let input = document.querySelector('.input');
const BUTTON = document.getElementById("button");
let exit = document.querySelector('.items_list');
let obj = [];



 BUTTON.addEventListener('click',htmlItem);


function htmlItem(){
    let object = localStorage.setItem('object',JSON.stringify(items));
    let data = new Date ();
    const day = data.getDay();
    const month = data.getMonth();
    const year = data.getFullYear();
    console.log(object);
    let items = {
        text:input.value,
        day:day,
        month:month,
        year:year,
    }

    

    function item (i) {
        return`
        <div class = "item">
            <p>${i.text}</p>
            <p> ${i.day} - ${i.month} - ${i.year} </p>
        </div>
        `
    }
exit.insertAdjacentHTML("beforebegin",item(items));
}