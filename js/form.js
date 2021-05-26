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
            document.getElementById('QRCODE').src = "Assets/QR1.png"
            return
        }

        if(paymentType == "OVO")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR2.png"
            return
        }

        if(paymentType == "Dana")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR3.png"
            return
        }

        if(paymentType == "Go-Pay")
        {
            document.getElementById('QRSpan').style.visibility = "visible"
            document.getElementById('QRCODE').src = "Assets/QR4.png"
            return
        }
  
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const len = characters.length;
        
        let result = ' ';

        for (let i = 0; i < 12; i++ ) 
        {
            result += characters.charAt(Math.floor(Math.random() * len));
        }

        document.getElementById('paymentLink').textContent = `Virtual Account Number: ${result}`        
    });
});

// Product container script