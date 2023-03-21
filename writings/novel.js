// To make character add section visible
const csec = document.getElementById('cinfo2')
const addccc = document.querySelector("#addCharecter")
addccc.addEventListener("click", () => {
    csec.style.display = "flex"
    csec.style.animation = "fadeIn 0.3s ease-in-out forwards"
})

// to add character photo when user add one
let addedPhoto;
let base64String;
const photoInput = document.getElementById('fileIput')
photoInput.addEventListener("change", (e) => {
    const unknownPic = document.getElementById("cpicc")
    addedPhoto = e.target.files[0]
    
    // to store to local storage
    let reader = new FileReader();
    reader.onload = function (e) {
        base64String = e.target.result;
        
        
        // localStorage.setItem("c1pic", base64String)
        
        // instead of storing this to local storage i am first storing this to an object 
        
        // The data objext 
        let cha1 = {
            c1pic: base64String,
        }

        const data = cha1.c1pic
        unknownPic.src = data
    }
    reader.readAsDataURL(addedPhoto)
})

// to make exit button working

const exit = document.getElementById("exit")
exit.addEventListener("click", () => {
    const csec = document.getElementById('cinfo2')
    csec.style.animation = "fadeOut 0.3s ease-in-out forwards"
    csec.style.display = "none"
    console.log("exit triggerd")
})

// to make age input display

const ageinput = document.getElementById("ageinpt")
const ageoutput = document.getElementById("ageOut")
let age;
ageinput.addEventListener("input", () => {
    ageoutput.value = ageinput.value
    age = ageinput.value
})

// To make gender Selection working


const male = document.getElementById("male")
const female = document.getElementById("female")
let winner;
male.addEventListener("click", () => {
    female.checked = false
    const img = document.getElementById("maleicon")
    img.style.height = "45px"
    img.style.width = "45px"

    const femaleicon = document.getElementById("femaleicon")
    femaleicon.style.height = "40px"
    femaleicon.style.width = "40px"
    winner = "male"
})

female.addEventListener("click", () => {
    male.checked = false
    console.log("female")

    const img = document.getElementById("femaleicon")
    img.style.height = "45px"
    img.style.width = "45px"

    const maleicon = document.getElementById("maleicon")
    maleicon.style.height = "40px"
    maleicon.style.width = "40px"
    winner = "female"
})
// Collect data when user click on add

// outside variables declearations
let Cname;
let Cage;
let Cgender;
let Cgoal;
let Cpersonility;
let charecter1;
let cphoto;
let Crole;
let adableul = document.getElementById('adable')
let trashcanall = document.querySelectorAll(".trashcan")
let numbersOfCharacters = document.getElementById("adable").children
for (let i = 1; i <= numbersOfCharacters.length; i++) {
    window["characterData" + i] = []
}

// logic that will run when user click add button
const addbtn = document.getElementById("add")
addbtn.addEventListener("click", () => {
    trashcanall = document.querySelectorAll(".trashcan")
    // all datas consts
    const malecheckbox = document.getElementById("male")
    Cname = document.getElementById("namecapital").value
    Cage = document.getElementById("ageinpt").value
    Cgoal = document.getElementById("goal").value
    Cpersonility = document.getElementById("gold").value
    Crole = document.getElementById("role").value
    cphoto = base64String

    if (malecheckbox.checked) {
        Cgender = "male";
    } else {
        Cgender = "female"
    }
    // Making an object from character data
    charecter1 = {
        name: Cname,
        age: Cage,
        gender: Cgender,
        goal: Cgoal,
        personility: Cpersonility,
        role: Crole,
        photo: cphoto,
    };
    csec.style.animation = "fadeOut 0.3s ease-in-out forwards"
    csec.style.display = "none"
    // add character from object data
    
    // all varibales declaration
    const ccc = document.createElement("div")
    const ccc2 = document.createElement("div")
    const cpic = document.createElement("img")
    const cname = document.createElement("p")
    const inertextdiv = document.createElement("div")
    const lastFlex = document.createElement("div")
    const genimg = document.createElement("img")
    const cage = document.createElement("p")
    const trashcan = document.createElement("img")
    const crole = document.createElement("p")
    
    // values setting
    cpic.className = "photo";
    crole.classList.add("age")
    crole.classList.add("margin")
    crole.textContent = Crole
    cpic.src = charecter1.photo
    cpic.classList.add("justt")
    ccc.className = "ccc2"
    lastFlex.className = "flex"
    cname.innerText = charecter1.name
    cname.className = "name"
    inertextdiv.className = "fd-c"
    cage.textContent = age;
    cage.className = "age"
    genimg.className = "gender"
    if (winner === "male") {
        genimg.src = "../asset/male.png"
    } else {
        genimg.src = "../asset/female.png"
    }
    trashcan.src = "../asset/delete.png"
    trashcan.classList.add("trashcan");

    ccc.appendChild(cpic)
    ccc.appendChild(inertextdiv)
    ccc.appendChild(trashcan)
    lastFlex.appendChild(genimg)
    lastFlex.appendChild(cage)
    lastFlex.appendChild(crole)
    inertextdiv.appendChild(cname)
    inertextdiv.appendChild(lastFlex)
    adableul.appendChild(ccc)
    trashcanall = document.querySelectorAll(".trashcan") 
    
    // Delete the character when user click on delete
    let hconfirm = document.getElementById("confirm")
    const yesbtn = document.getElementById("yes")
    const nobtn = document.getElementById("no")
    let cparent;

    for (let m = 0; m <= trashcanall.length; m++) {
        trashcanall.forEach((element) => {

            element.addEventListener("click", () => {
                const can = element.parentNode
                hconfirm.style.display = "flex"
                yesbtn.addEventListener("click", () => {
                    can.remove()
                    hconfirm.style.display = "none"

                })
                nobtn.addEventListener("click", () => {
                    hconfirm.style.display = "none"
                })
            })
        })
    }
})

// to collect all data when user click on save btn

const saveBtn = document.getElementById("svbtn")
const chas = document.querySelectorAll("adable li")
let allDataObj;

let novel1Data = {}
let triggerCount = 0
saveBtn.addEventListener("click", () => {

    
    // store all characters 
    let numbersOfCharacters = document.getElementById("adable").children

    for (let i = 1; i <= numbersOfCharacters.length; i++) {
        window["characterData" + i] = []
    }
    let chas = numbersOfCharacters
    console.log(chas.length)
    for (let i = 0; i < chas.length; i++) {
        let citms = chas[i];
        triggerCount = triggerCount + 1
            
        // ectract data from it
        let cphoto = citms.querySelector("img").getAttribute("src")
        let cname = citms.querySelector("div p").textContent
        let cage = citms.querySelector("div").querySelector("div").querySelector("p").textContent
        let gender = citms.querySelector("div").querySelector("div").querySelector("img").getAttribute("src")
        let title = document.getElementById("title").value
        let concept = document.getElementById("concept").value
        let DoW = document.getElementById("doow").value
        
        if(triggerCount == 0){
                    let cdobj = [cname,gender, cage, cphoto]
        novel1Data = {
            title: title,
            concept: concept,
            dateOfWork: DoW,
            character1: cdobj,
        }
        }else{
            let cdobj = [cname,gender, cage, cphoto]
            let adderName = "character" + triggerCount
            novel1Data[adderName] = cdobj
        }
        const jsonString = JSON.stringify(novel1Data)
        const base64 = btoa(jsonString)
        const dataURL = 'data:application/json;base64' + base64
        localStorage.setItem("n1", dataURL)
    }
})
