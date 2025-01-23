const addlist = document.querySelectorAll("select");

for (let select of addlist) {
    for(currCode in countryList ){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption); 
    }
}


const Currencyinput = document.querySelector("#input_currency");
const Currencyoutput = document.querySelector("#output_currency");
const input = document.querySelector(".number");
const btn = document.querySelector("#go");
const inputc = document.querySelector(".inputc");
const outputc = document.querySelector(".outputc");
const inputi = document.querySelector(".inputi");
const outputi = document.querySelector(".outputi");
const output = document.querySelector("#output");

Currencyinput.addEventListener("change",() =>{              
    inputc.innerText = countryList[Currencyinput.value];
    inputi.style.backgroundImage = `url('https://flagsapi.com/${img[Currencyinput.value]}/flat/64.png')`;
})

Currencyoutput.addEventListener("change",() =>{              
    outputc.innerText = countryList[Currencyoutput.value]
    outputi.style.backgroundImage = `url('https://flagsapi.com/${img[Currencyoutput.value]}/shiny/64.png')`;
})

btn.addEventListener("click",async(evt) => {
    evt.preventDefault();
    
    if(input.value == "" || parseInt(input.value) < 1) {
        input.value = "1";
    }
    const URL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${Currencyoutput.value}_${Currencyinput.value}.json`
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data['rate'];
        let finalvalue = parseInt(input.value) * rate ;
        output.innerText = `The final amount in ${Currencyoutput.value} is ${finalvalue} and rate is ${rate}`;
})



