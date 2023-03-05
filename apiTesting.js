// Initializing the base URL
const URL = ("https://random-data-api.com/api/v2/credit_cards")

let cardID = document.getElementById('id')
let cardNumber = document.getElementById('cardNumber')
let cardExp = document.getElementById('expDate')
let cardType = document.getElementById('cardType')
let cardUniqueID = document.getElementById('uniqueId')

// Changing the base URL to change the size of the data randomly
let randomSize = Math.ceil(10 * Math.random() + 1)
let URLplus = URL + '?size=' + randomSize

// Status
console.log("API connected via " + URLplus)

// Reading the data into JSON format
let data = fetch(URLplus)
    .then(response => response.json())
    .then(data => {

        /* The loop is correctly looping through and 
        storing the data for each data[i]
        */

        for (var i=0; i<data.length; i++) {
            ID = data[i].id;
            CCN = data[i].credit_card_number;
            CCED = data[i].credit_card_expiry_date;
            CCT = data[i].credit_card_type;
            UID = data[i].uid;

            // for the Card ID (the first column)
            let newTR1 = document.createElement('tr')
            let idText1 = document.createTextNode(ID)
            newTR1.appendChild(idText1)
            cardID.appendChild(newTR1)

            // for the Card Number (2nd column)
            let newTR2 = document.createElement('tr')
            let idText2 = document.createTextNode(CCN)
            newTR2.appendChild(idText2)
            cardNumber.appendChild(newTR2)

            // for the card Exp Date (3rd column)
            let newTR3 = document.createElement('tr')
            let idText3 = document.createTextNode(CCED)
            newTR3.appendChild(idText3)
            cardExp.appendChild(newTR3)

            // for the card type (4th column) 

            let newTR4 = document.createElement('tr')
            let idText4 = document.createTextNode(CCT)
            newTR4.appendChild(idText4)
            cardType.appendChild(newTR4)

            // for the unique id (5th column)
            let newTR5 = document.createElement('tr')
            let idText5 = document.createTextNode(UID)
            newTR5.appendChild(idText5)
            cardUniqueID.appendChild(newTR5)            
        }   

    })
    .catch(err => {
        console.log('Error, failed to connect to ' + URLplus)
    })
