var input = document.querySelector("#input");
var numberBtns = document.querySelectorAll(".number");
var operatorBtns = document.querySelectorAll(".operator");
var calChain = document.querySelector("#calChain"); // show calculation chain on screen
var inputLog = ""; // keep track of the calculation
var ans = ""; //stores answer for the next calculation
var operatorList = ["+", "-", "/", "×", "*"];


init();

function init() {
	displayNumbers();
	displayDecimal();
	displayOperator();
	displayResult();
	clearAll();
	clearEntry();
}

function displayNumbers(){
for(var i = 0; i < numberBtns.length; i++){
	numberBtns[i].addEventListener("click", function(){
		if(operatorList.indexOf(input.innerHTML[0]) != -1){
			input.innerHTML = input.innerHTML.slice(1, input.innerHTML.length);
		}

		input.innerHTML =="0"||input.innerHTML == "" + ans ? input.innerHTML = this.value : input.innerHTML += this.value;
		inputLog == "0"||inputLog == "" + ans ? inputLog = this.value : inputLog += this.value;
		calChain.innerHTML = inputLog;
		if(input.innerHTML.length>9){
			input.innerHTML = "LIMITED DIGIT!";
		}
		
	});
}
}

function displayOperator(){
	for(var i = 0;i<operatorBtns.length; i++){
		operatorBtns[i].addEventListener("click", function(){
			// console.log(operatorList.indexOf(inputLog[inputLog.length-1]));
			if(operatorList.indexOf(inputLog[inputLog.length-1]) === -1){
				input.innerHTML = this.value;
				inputLog += this.value;
				calChain.innerHTML = inputLog;
			}
			
			console.log(inputLog);
		});
	}
}
function displayDecimal(){
	document.getElementById('decimal').addEventListener("click", function(){
		if(input.innerHTML.indexOf(".") === -1){
			input.innerHTML += ".";
			inputLog += ".";
		}
	});
}
function displayResult(){
	document.getElementById("equal").addEventListener("click", function(){
		ans = Math.round(eval(inputLog)*100)/100;
		input.innerHTML = ans;
		calChain.innerHTML = inputLog + "=" + input.innerHTML;
		inputLog = "" + ans;
		if(input.innerHTML.length > 9){
			input.innerHTML = "LIMITED DIGIT!";
			calChain.innerHTML = "0";
		}
	});
	
	
}
function clearAll(){
	document.getElementById("AC").addEventListener("click", function(){
		input.innerHTML = "0";
		calChain.innerHTML = "0";
		inputLog = "";
		ans = "";
	});

}
function clearEntry(){
	document.getElementById("CE").addEventListener("click", function(){
		if(input.innerHTML !== ans){
			input.innerHTML = "0";
			inputLog = inputLog.slice(0, inputLog.length - 1);	
			calChain.innerHTML = inputLog;		
		} else{
			input.innerHTML = "0";
			inputLog = "";
			calChain.innerHTML = "0";
		}
		

	});
}

