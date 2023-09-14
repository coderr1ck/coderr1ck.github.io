var ans = ""
var visans = ""
var screen = document.getElementById("screen")
var obj = document.querySelectorAll(".button_key");

obj.forEach(element => {
    element.addEventListener('click',function(e){
        if (element.innerText != "C" && element.innerText != "=" && element.innerText != "⇐"){
            if(element.innerText == "÷"){
                visans += "÷" 
                ans+="/"
            }
            else if(element.innerText == "×"){
                visans += "×" 
                ans+="*"
            }else{
                ans+=element.innerText
                visans+=element.innerText
            }
            screen.innerText = visans;
            console.log(ans)               
        }
        if(element.innerText == "="){
            ans = eval(ans)
            visans = Math.round(ans*100)/100;
            screen.innerText = visans;
            console.log(ans)
        }
        if(element.innerText == "C"){
            ans = ""
            visans = ""
            screen.innerText = visans;
        }

    });
});

