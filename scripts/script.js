const seates = document.getElementsByClassName('seates');
let count = 40;
let countSeat = 0;

for (const seat of seates) {
    // console.log(seat);
    seat.addEventListener('click', (e) => {
        
        count -= 1;
        countSeat++;

        const seatName = e.target.innerText;
        console.log(seatName);


        const priceList = document.getElementById("priceList");
        const ul = document.createElement("ul");

        const liSeat = document.createElement("li");
        liSeat.innerText = seatName;

        const liClass = document.createElement("li");
        liClass.innerText = "Econmy";

        const liPrice = document.createElement("li");
        liPrice.innerText = 550;


        ul.appendChild(liSeat);
        ul.appendChild(liClass);
        ul.appendChild(liPrice);
        priceList.appendChild(ul);

        const seatSet = document.getElementById("count-seat");
        seatSet.innerText = countSeat


        const totalCast = document.getElementById("total").innerText;
        const convertedTotalCast = parseInt(totalCast);
        const sumTotal = convertedTotalCast + parseInt(liPrice.innerText);

        apply(sumTotal)

        setInnerText("total", sumTotal);


        setInnerText("left-seat", count);

        e.target.classList.add('disabled');
    })


}


function apply() {
    const copon = document.getElementById("copon").value;



    if (copon === 'Couple20') {
        grandTotal("total", 0.20);
    } else if (copon === 'NEWS15') {
        grandTotal("total", 0.15);
    }
}

// this is grand total area  /////
function grandTotal(id, num) {
    const totalCast = document.getElementById(id).innerText;
    const convertedTotalCast = parseInt(totalCast);

    const ttt = convertedTotalCast * num;
    const fixed = convertedTotalCast - ttt;

    setInnerText('grandTotal', fixed);
}



//  this function set inner text
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


function buy() {
    const showElement = document.getElementById("mainSection");
    showElement.classList.add("hidden");
    const hideElement = document.getElementById("payment");
    hideElement.classList.remove("hidden");
}



