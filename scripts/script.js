
let total = 0;

function pressed(set) {
    console.log(set);

    const div = document.getElementById("payment");

    const ul = document.createElement('ul');
    ul.classList.add('flex', 'justify-between');

    let li4 = document.createElement('li');
    li4.classList.add('text-black');
    li4.innerText = set;


    let li5 = document.createElement('li')
    li5.innerText = 'Economy';
    li5.classList.add('text-black');

    let li6 = document.createElement('li');
    li6.innerText = 550; // Add the ticket price here
    li6.classList.add('text-black');


    div.appendChild(ul);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);


    tikla(set)
    // Add the ticket price to the total
    const ticketPrice = parseInt(li6.innerText);
    total += ticketPrice;

    

    const totalPrice = document.getElementById('total');
    totalPrice.innerText = total

    console.log(total);

    // unlock input field
    document.getElementById('copon').disabled = false;


    

}
    
   


function catched() {
    const input = document.getElementById('copon');
    let inputValue = input.value;
    const grandTotal = document.getElementById('grandTotal');
    let discount = 0;

    if (inputValue === 'NEWS15') {
        discount = total * 0.15;

    } else if (inputValue === 'Couple20') {
        discount = total * 0.20;
    }

    const grandTotalElement = total - discount;
    grandTotal.innerText = grandTotalElement;


}

function tikla(ki) {
    const selected = document.getElementById(ki);
        selected.classList.add('bg-green-500', 'disabled')
}



function hide (display){
    const element = document.getElementById(display);
    element.classList.add = "hidden";
}

function show (display){
    const element = document.getElementById(display);
    element.classList.remove = "hidden";
}









