const forms = {"1": `<h2>Personal info</h2>
<p>Please provide your name, email address, and phone number.</p>
<h5>Name</h5>
<input id="name" type="text" placeholder="e.g. Stephen King" oninput="validInput(this)">
<h5>Email Address</h5>
<input id="email" type="text" placeholder="e.g. stephenking@gmail.com" oninput="validInput(this)">
<h5>Phone Number</h5>
<input id="phone" type="text" placeholder="e.g. +905467383938" oninput="validInput(this)">`,
"2": `<h2>Select your plan</h2>
<p>You have the option of monthly or yearly billing.</p>
<div class="arcade" onclick="selectPlan(this)">
  <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg></div>
  <div>
    <h5>Arcade</h5>
    <p>$10/mo</p>
  </div>
</div>
<div class="advanced" onclick="selectPlan(this)">
  <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg></div>
  <div>
    <h5>Advanced</h5>
    <p>$12/mo</p>
  </div>
</div>
<div class="pro" onclick="selectPlan(this)">
  <div class="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg></div>
  <div>
    <h5>Pro</h5>
    <p>$15/mo</p>
  </div>
</div>
<div class="switch-section">
  <h5 class="monthly">Monthly</h5>
  <label class="switch">
    <input type="checkbox" onclick="checkBox()">
    <span class="slider round"></span>
  </label>
  <h5 class="yearly switch-color">Yearly</h5>
</div>`,
"monthly": `<h2>Pick add-ons</h2>
<p>Add-ons help enhance your gaming experience.</p>
<div id="add-on1" class="add-ons">
  <input id="cb-1" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Online service</h5>
    <p class="lower-font">Access to multiplayer games</p>
  </div>
  <h5 class="to-end">+$1/mo</h5>
</div>
<div id="add-on2" class="add-ons">
  <input id="cb-2" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Large storage</h5>
    <p class="lower-font">Extra 1TB of cloud save</p>
  </div>
  <h5 class="to-end">+$2/mo</h5>
</div>
<div id="add-on3" class="add-ons">
  <input id="cb-3" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Customizable profile</h5>
    <p class="lower-font">Custom theme on your profile</p>
  </div>
  <h5 class="to-end">+$2/mo</h5>
</div>`,
"yearly":`<h2>Pick add-ons</h2>
<p>Add-ons help enhance your gaming experience.</p>
<div id="add-on1" class="add-ons">
  <input id="cb-1" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Online service</h5>
    <p class="lower-font">Access to multiplayer games</p>
  </div>
  <h5 class="to-end">+$10/yr</h5>
</div>
<div id="add-on2" class="add-ons">
  <input id="cb-2" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Large storage</h5>
    <p class="lower-font">Extra 1TB of cloud save</p>
  </div>
  <h5 class="to-end">+$20/yr</h5>
</div>
<div id="add-on3" class="add-ons">
  <input id="cb-3" class="check-box" type="checkbox" onclick="checkBox2(this)">
  <div>
    <h5>Customizable profile</h5>
    <p class="lower-font">Custom theme on your profile</p>
  </div>
  <h5 class="to-end">+$20/yr</h5>
</div>`
,
"4": `<h2>Finishing up</h2>
<p>Double-check everything looks OK before confirming.</p>
<div class="final">

  <div class="info">
    <div>
      <h5 id="plan-name">Arcade (Monthly)</h4>
      <p>Change</p>
    </div>
    <h5 id="plan-price">$9/mo</h5>
  </div>
  <hr>

  <div class="informations">
    
  </div>

</div>
<div class="total">
  <p>Total (per month)</p>
  <h5 id="total-price">+$12/mo</h5>
</div>`}

const form = document.querySelector(".mid-section")

let formStatus = 1

let total = 0

function nextStep(input) {
    const btn1 = document.getElementById("btn-1")
    const btn2 = document.getElementById("btn-2")
    const btn3 = document.getElementById("btn-3")
    const btn4 = document.getElementById("btn-4")

    if(input.id==="btn-1") {
        formStatus = 1
    }else if(input.id==="btn-2"){
        formStatus = 2
    }else if(input.id==="btn-3"){
        formStatus = 3
    }else if(input.id==="btn-4"){
        formStatus = 4
    }else if(input.id==="go-back"){
        if(formStatus!==1){
            formStatus -= 1
        }else {
            formStatus = 4
        }
    }
    else {
        if(formStatus!==4){
            formStatus += 1
        }else {
            formStatus = 1
        }
    }

    if(formStatus!==3){
        form.innerHTML = forms[String(formStatus)]
    }else{
        if(payingType==="Monthly"){
            form.innerHTML = forms["monthly"]
        }else{
            form.innerHTML = forms["yearly"]
        }
    }

    if(formStatus===1) {
        btn1.classList.add("active-btn")
        btn2.classList.remove("active-btn")
        btn3.classList.remove("active-btn")
        btn4.classList.remove("active-btn")
    }else if(formStatus===2){
        btn1.classList.remove("active-btn")
        btn2.classList.add("active-btn")
        btn3.classList.remove("active-btn")
        btn4.classList.remove("active-btn")
    }else if(formStatus===3){
        btn1.classList.remove("active-btn")
        btn2.classList.remove("active-btn")
        btn3.classList.add("active-btn")
        btn4.classList.remove("active-btn")
        dic = {}
    }else if(formStatus===4){
        btn1.classList.remove("active-btn")
        btn2.classList.remove("active-btn")
        btn3.classList.remove("active-btn")
        btn4.classList.add("active-btn")
        str = plan + " " + "(" + payingType + ")"
        const infoDiv = document.querySelector(".informations")
        document.getElementById("plan-name").textContent =  str
        document.getElementById("plan-price").textContent =  planPrice
        
        total = Number(planPrice.split("")[1]+planPrice.split("")[2])

        for (const [key, value] of Object.entries(dic)) {
            const infoStr = 
            `<div class="info">
                <div>
                    <p>${key}</p>
                </div>
                <h5>${dic[key]}</h5>
            </div>`
            infoDiv.insertAdjacentHTML("beforeend", infoStr)
            if(payingType==="Monthly"){
                total += Number(dic[key].split("")[2])
            }else{
                total += Number(dic[key].split("")[2]+dic[key].split("")[3])
            }
            
        } 
        const totalLabel = document.querySelector("#total-price")
        let totalStr = ""
        if(payingType==="Monthly"){
            totalStr = "+$" + String(total) + "/mo"
        }else{
            totalStr = "+$" + String(total) + "/yr"
        }
        
        totalLabel.textContent = totalStr

    }
}


function validInput(input) {
    const text = input.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[A-Za-zğüşıöçĞÜŞİÖÇ]+([-']?[A-Za-zğüşıöçĞÜŞİÖÇ]+)?$/;
    const phoneNumberPattern = /^\+90\d{10}$/;

    if(input.id==="name"){
        if (namePattern.test(text)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        if(!text) {
            input.classList.remove('invalid');
            input.classList.remove('valid');
        }
    }else if(input.id==="email"){
        if (emailPattern.test(text)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        if(!text) {
            input.classList.remove('invalid');
            input.classList.remove('valid');
        }
    }else {
        if (phoneNumberPattern.test(text)) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }

        if(!text) {
            input.classList.remove('invalid');
            input.classList.remove('valid');
        }
    }
}

let plan = ""
let payingType = "Monthly"
let planPrice = ""
let addOnsList = []

function selectPlan(input) {
    document.querySelector(".arcade").classList.remove("selected-state")
    document.querySelector(".advanced").classList.remove("selected-state")
    document.querySelector(".pro").classList.remove("selected-state")

    input.classList.add("selected-state")

    plan = input.innerText.split("\n")[0]
    planPrice = input.innerText.split("\n")[2]
}

let toggleStatus = 0
function checkBox(input){
    if(toggleStatus===0){
        toggleStatus = 1
        document.querySelector(".monthly").classList.add("switch-color")
        document.querySelector(".yearly").classList.remove("switch-color")
        payingType = "Yearly"
    }else {
        toggleStatus = 0
        document.querySelector(".monthly").classList.remove("switch-color")
        document.querySelector(".yearly").classList.add("switch-color")
        payingType = "Monthly"
    }
}

let dic = {}

function checkBox2(input) {
    if(input.id==="cb-1"){
        const addOnName = document.getElementById("add-on1").textContent.split("\n")[3].trim()
        const addOnPrice = document.getElementById("add-on1").textContent.split("\n")[6].trim()
        if(input.checked){
            document.getElementById("add-on1").classList.add("selected-add-ons")
            dic[addOnName] = addOnPrice
        }else {
            document.getElementById("add-on1").classList.remove("selected-add-ons")
            delete dic[addOnName]
        }
    }else if(input.id==="cb-2"){
        const addOnName = document.getElementById("add-on2").textContent.split("\n")[3].trim()
        const addOnPrice = document.getElementById("add-on2").textContent.split("\n")[6].trim()
        if(input.checked){
            document.getElementById("add-on2").classList.add("selected-add-ons")
            dic[addOnName] = addOnPrice
        }else {
            document.getElementById("add-on2").classList.remove("selected-add-ons")
            delete dic[addOnName]
        }
    }else{
        const addOnName = document.getElementById("add-on3").textContent.split("\n")[3].trim()
        const addOnPrice = document.getElementById("add-on3").textContent.split("\n")[6].trim()
        if(input.checked){
            document.getElementById("add-on3").classList.add("selected-add-ons")
            dic[addOnName] = addOnPrice
        }else {
            document.getElementById("add-on3").classList.remove("selected-add-ons")
            delete dic[addOnName]
        }
    }
    //console.log(payingType, dic)
}
