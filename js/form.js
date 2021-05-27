// Form Validator Script

function validate() {
    let qty = document.querySelector('#qty').value
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email')
    let num = document.querySelector('#phonenumber').value
    let postalCode = document.querySelector('#postalCode').value

    var eM = document.getElementById('errMsg')
    eM.innerText = ""
   
    
    if(qty < 1)
    {
        eM.innerText = "Quantity must be at least 1!"
        return false;
    }
    if(name.length < 3 || name.length > 30)
    {
        eM.innerText = "Name must be between 3 - 30 characters!"
        return false
    }

    if(num.length != 12 && num.length != 10)
    {
        eM.innerText = "Incorrect phone number format!"
        return false
    }

    if(postalCode.length != 6)
    {
        eM.innerText = "Incorrect postal code format!"
        return false
    }

    return true
}



// -- PAYMENT SCRIPT --
document.addEventListener('DOMContentLoaded', function(){
    let payment = document.querySelector('#paymentMethod')

    payment.addEventListener('change', function(){
        let paymentType = document.querySelector('#paymentMethod').value
        document.getElementById('QRCODE').src = ''
        document.getElementById('paymentLink').textContent = ''
        document.getElementById('QRSpan').style.visibility = "hidden"

        if(paymentType == "QRIS")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR1.png"
            return
        }

        if(paymentType == "OVO")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR2.png"
            return
        }

        if(paymentType == "Dana")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR3.png"
            return
        }

        if(paymentType == "Go-Pay")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR/QR4.png"
            return
        }
  
        const characters = '0123456789';
        const len = characters.length;
        
        let result = ' ';

        for (let i = 0; i < 16; i++ ) 
        {
            result += characters.charAt(Math.floor(Math.random() * len));
        }

        document.getElementById('paymentLink').textContent = `Virtual Account Number:\n${result}`        
    })
})

// Product container script
document.addEventListener('DOMContentLoaded', () => {
    let qty = document.querySelector('#qty')
    let totalPrice = document.getElementById('total-price')
    let price = document.querySelector('#product-price').value
    let productPrice = document.getElementById('product-price')
    productPrice.innerText = 'Product Price: Rp. ' + price
    totalPrice.innerText = 'Total: Rp. ' + price
    
    qty.addEventListener('change', () => {
        let changedQty = document.querySelector('#qty').value
        totalPrice.innerText = 'Total: Rp. ' + changedQty * price
    })
})

var products = {
    1: {productName: "LeGoat 16 Phantom Black", productPrice: 1800000},
    2: {productName: "LeGoat 16 Red-Gray", productPrice: 1800000},
    3: {productName: "Air Yordan 3 Black", productPrice: 2300000},
    4: {productName: "Air Yordan x DOR", productPrice: 80000000},
    5: {productName: "Air Yordan Bred", productPrice: 2000000},
    7: {productName: "Kirye 5 Pastel", productPrice: 1800000},
    8: {productName: "KD Bright", productPrice: 2100000},
    9: {productName: "Kirye 5 Street", productPrice: 1800000},
    10: {productName: "Zion Z1 White", productPrice: 1900000},
    11: {productName: "DON Mailman", productPrice: 1950000},
    12: {productName: "LeGoat 16 Sheeesh", productPrice: 2100000},
    13: {productName: "Greek Freak 2 Blue", productPrice: 1700000},
    14: {productName: "DON EcoFriendly", productPrice: 1950000},
    15: {productName: "KD 5 Gray", productPrice: 2100000}
}

// Load product info using url
function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

$(document).ready(function () {
    const imageSource = getURLParameter('imgsrc');
    $('#currentProduct').attr('src', imageSource);
});
