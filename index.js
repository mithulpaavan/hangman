const start_page = document.querySelector('.start-page');
const btns = document.querySelectorAll('.btn')
let category;
let datas = {
    animals:[
    "Alligator",
    "Tiger",
    "Lion",
    "Alpaca",
    "Donkey",
    "Ant",
    "Armadillo",
    "Anteater",
    "Antelope",
    ],
    fruits:[
        "papaya",
        "pomegranate",
        "rasberries",
        "watermelon",
        "peach",
        "sapota",
        "orange",
        "apple"
    ],
    cars:[
        "toyota",
        "lamborgini",
        "audi",
        "suzuki",
        "honda",
        "ford",
        "supra",
        "rolls royce"
    ]
}

window.onload = ()=>{
    if(start_page.classList[1] == "hide"){
        start_page.classList.remove('hide')
    }


btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        category = e.target.id;
        console.log(category)
        start_page.classList.add('hide')
        create_main_page(category);
    })
})}

let create_main_page = (name)=>{
    let main = document.createElement("div")
    let word = datas[name][Math.floor(Math.random()*datas[name].length)]
    console.log(word)
    main.className = "main-page";
    document.body.append(main)
    create_components(main,word,name)
}

let create_components = (main,word,name)=>{
    let display = document.createElement("div")
    display.className = "display";
    let keys = document.createElement("div")
    keys.className = "keys"
    main.append(display,keys)
    let set = new Set(word.toUpperCase());
    let array = Array.from(word.toUpperCase())
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let letter_array = Array.from(letters)
    for(var i = 0; i < array.length; i++){
        let box = document.createElement("div")
        box.innerHTML = "_"
        box.className = "box"
        display.append(box)
    }
    for(var i = 0; i < letter_array.length; i++){
        let letter_box = document.createElement("div")
        letter_box.className = "letter-box";
        letter_box.id = letter_array[i]
        letter_box.innerHTML = letter_array[i];
        keys.append(letter_box)
    }
   let every_box = document.querySelectorAll('.letter-box');
   every_box.forEach((lett)=>{
    lett.addEventListener('click', ()=>{
        var box;
        var box_array;
        let selected_letter = lett.id
        console.log(set,array)
        if(set.has(selected_letter)){
            let dash_array = array.map(arr=>"_")
            let check_array = [];
            box = document.querySelectorAll('.box')
            array.forEach((value,index)=>{
                if(value == selected_letter){
                    dash_array[index] = selected_letter
                    box[index].innerText = dash_array[index]
                    console.log(dash_array) 
                }
            })
            var iswin = false;
            if(array.length == 0){
                iswin = true
                console.log(iswin)
            }
            console.log("its there")
        }
        else{
            console.log("its not there")
        }
    })
   })
}



