window.jackpot = window.jackpot || {};
(function() {
    let isEven=function(){
        let threshhold=4.5;
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);

        if(isNaN(num1)||isNaN(num2))
        {
            alert("we have a mole");
            document.getElementById('jackpot').innerHTML="Jackpot Missed";
            return;
        }
        num1=num1%10;
        num2=num2%10;
        let jackpot=0;
        let result1=num1%2;
        if(result1 == 0)
        {
            result1=domagic(num1);
            alert("is even and ="+result1)
        }
        jackpot=(result1+num2)*threshhold;
       //alert("Jack pot"+ jackpot);
        document.getElementById('jackpot').innerHTML=jackpot;
    }
    let domagic = function(num){
        return((num+9)/2);
    }
    let inform = function(){
        console.log("keydown");
        document.getElementById('jackpot').innerHTML="Winning";

    }
    let cleard =function(){
        console.log("keyup");
        document.getElementById('jackpot').innerHTML="";
    }

    window.jackpot.init = function() {
        document.getElementById('magicbutton').addEventListener('click', isEven);
        document.getElementById("num1").addEventListener('keydown',inform)
        document.getElementById("num1").addEventListener('keyup',cleard)
    };
})();