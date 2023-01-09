//VALIDASI RESERVATION
let validate = () => {
    let inputname = document.getElementById('inputname')
    let inputphonenumber = document.getElementById('inputphonenumber')
    let inputboxdob = document.getElementById('inputboxdob')
    let inputperson = document.getElementById('inputperson')
    let inputcode = document.getElementById('inputcode')
    let inputtable = document.getElementById('inputtable')
    let inputagreement = document.getElementById('inputagreement')
    let errorMsg = []
  
    validateinputname(inputname, errorMsg)
    validateinputphonenumber(inputphonenumber, errorMsg)
    validateinputboxdob(inputboxdob, errorMsg)
    validateinputperson(inputperson, errorMsg)
    validateinputcode(inputcode, errorMsg)
    validateinputtable(inputtable, errorMsg)
    validateinputagreement(inputagreement, errorMsg)
  
    if (errorMsg.length === 0) {
        alert('Reservation Success!')
    }else{
        alert(errorMsg.join('\n'))
    }
}
  
validateinputname = (inputname, errorMsg)=>{
    if (inputname.value === ""){
        errorMsg.push('name required')
    }else if (inputname.value.length < 3){
        errorMsg.push('name length must more than equal to 3')
    }else if (!inputname.value.match(/^[a-zA-Z ]+$/)){
        errorMsg.push('name must alphabeth')
    }
}

validateinputphonenumber = (inputphonenumber, errorMsg)=>{
    if (inputphonenumber.value === ""){
        errorMsg.push('phone number required')
    }else if (inputphonenumber.value.length !=12){
        errorMsg.push('phone number must 12 number')
    }
}

validateinputboxdob = (inputboxdob, errorMsg)=>{
    if (inputboxdob.value === ""){
        errorMsg.push('time required')
    }
}

validateinputperson = (inputperson, errorMsg)=>{
    if (inputperson.value === ""){
        errorMsg.push('total person required')
    }
}

validateinputcode = (inputcode, errorMsg)=>{
    if (inputcode.value === ""){
        errorMsg.push('code required')
    }else if (!inputcode.value.startsWith('AB')){
        errorMsg.push('code must starts with AB')
    }else if (inputcode.value.length != 5){
        errorMsg.push('code length must more than equal to 5')
    }
}

validateinputtable = (inputtable, errorMsg)=>{
    if (inputtable.value === ""){
        errorMsg.push('table required')
    }
}

let validateinputagreement = (inputagreement, errorMsg) => {
    if (!inputagreement.checked){
        errorMsg.push('you must agree to order to continue')
    }
}

// MENU TIME
let ababast = new Date();
    if (ababast.getTimezoneOffset() == 0){ 
            (abTime=ababast.getTime()+(7*60*60*1000))
        }else{
            (abTime=ababast.getTime());
        }
ababast.setTime(abTime);
let day = ababast.getDay();
let date = ababast.getDate();
let month = ababast.getMonth();
let year = ababast.getFullYear();
let dayababatime = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
let monthababatime = new Array("January","February","March","April","May","June","July",
                        "August","September","October","November","December");
document.getElementById("timer").innerHTML = 
dayababatime[day]+" "+date+" "+monthababatime[month]+" "+year+", "+((ababast.getHours()<10) ? "0":"")+ababast.getHours()+":"+((ababast.getMinutes() < 10)? "0":"")+ababast.getMinutes()+(" wib");