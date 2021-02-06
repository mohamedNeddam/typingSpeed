const sp = document.querySelectorAll("span");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const input = document.querySelector("#test-area");
const text = "moh amed";
let mytext = "";
console.log(sp[1].innerHTML);

var test1;


var array = ['The best way to understand the difference between UI/UX designer and UI/UX developer is to understand the skill set they need to possess. Coming first to the UI/UX designer, as stated earlier, they need to research and design. In other words, they need to understand and analyze the needs of the users and formulate concept and design ideas that those users will love to use. Therefore, they need to have an understanding of online users’ behaviors, psychology, and all the relevant aspects. In fact, one needs to walk in the shoes of the online users and get a complete hold of what is cooking inside their heads while they are browsing' ,
            'L’UX Design se définit donc comme l’ensemble des moyens mis en œuvre pour concevoir une interface qui répond pleinement aux besoins en utilisabilité de chaque utilisateur. L’objectif étant de fournir la meilleure expérience utilisateur possible.',
            "A UX engineer’s focus on technical elements of a user’s experience is part of what separates them from other types of software engineers. Decisions about what to build and how it’s built are rooted in user research. This data either comes directly from the UX engineer’s conversations with users or by analyzing how those users engage with a prototype. The UX engineer’s job is to reduce any potential friction through the final production stages of the digital product.",
            "Testing is important for a UX engineering role because it helps catch and fix issues before a product ships. UX designers are also responsible for testing their prototypes. However, the goal of a UX engineer is different; they are concerned, first and foremost, with how well the product functions technically. Testing a product lets a UX engineer know if adjustments need to be made to the code or if a new code needs to be written.",
            "A UI/UX designer is more concerned with the look and feel of the interface. He is into customer surveying, user analysis, and then doing design research of the competitors, and then conceptualizing the design ideas. After that, he is concerned with the branding and graphics development. On the other hand, a UI/UX engineer is concerned with responsiveness and interactivity. The first thing he pays attention to is UI",
            "If you ask anyone in UX what their “superpower” is, many may say empathy. At its core, the field of UX is about understanding your target user and then designing according to what will truly benefit their life. Empathy in particular is the ability to understand and share the feelings of another."
        ];
var textContent;
 
const updateText = () => {
    textContent = array[Math.floor(Math.random() * array.length)];
    document.querySelector(".text").textContent = textContent;
}

updateText();

const startfun = () => {
 
    test1 = setInterval(() => {
        if( sp[2].innerHTML > 60){
            sp[2].innerHTML= 0;
            sp[1].innerHTML++;
        }else if(sp[1].innerHTML > 60){
            sp[1].innerHTML= 0;
            sp[0].innerHTML++;
        }else{
            sp[2].innerHTML++;
        }
        
    },1000/60);
   
}


const stopfunc = () => {
    clearInterval(test1);
}

const resetfunc = () => {
    clearInterval(test1);
    sp[2].innerHTML= 00;
    sp[0].innerHTML= 00;
    sp[1].innerHTML= 00;
    input.value = null;
    i = 0;
    input.style.border = "2px solid #e3c3bc";
    updateText();
}
var i = 0;

 

const funckey = (e) => {
    if(i == 0){
        startfun();
        i++;
    }
        
 
    if(input.value.length != textContent.length && input.value == textContent.substr(0,input.value.length) ){

        input.style.border = "6px solid green";

    }else if( input.value != textContent.substr(0,input.value.length)){

        input.style.border = "6px solid red";   

    }else{
        stopfunc();
        input.style.border = "6px solid  #900C3F ";
        
    }
   

}




//start.addEventListener("click",startfun,false);
//stop.addEventListener("click",stopfunc,false);
reset.addEventListener("click",resetfunc,false);

input.addEventListener("keyup",funckey,false);

