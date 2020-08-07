var fromCur = document.getElementById("fromCurrency");
var fromAmount = document.getElementById("convertFrom");
var toCur = document.getElementById("toCurrency");
var toAmount = document.getElementById("convertTo");
var changeFromCur = document.getElementById("changeFromCur");
var changeToCur= document.getElementById("changeToCur");

// const exchange = document.getElementById('arrows-exchange');
// const rateEl = document.getElementById('rate');

fromAmount.addEventListener('input', calculate);
toAmount.addEventListener('input', calculate);


// const dataURL = '';
function fromFlagAndCurrency() {
	var changeSrc = fromCur.options[fromCur.selectedIndex].getAttribute("fromSrc");
  var changeCur = fromCur.options[fromCur.selectedIndex].getAttribute("fromCur");
  fromImage.setAttribute("src", changeSrc);
  changeFromCur.innerHTML=changeCur;
}

 fromCur.addEventListener("change", function() {
    fromFlagAndCurrency();
   calculate();
  }); 

function toFlagAndCurrency() {
	var changeSrc = toCur.options[toCur.selectedIndex].getAttribute("toSrc");
  var changeCur = toCur.options[toCur.selectedIndex].getAttribute("toCur");
  toImage.setAttribute("src", changeSrc);
  changeToCur.innerHTML=changeCur;
}

 toCur.addEventListener("change", function() {
    toFlagAndCurrency();
    calculate();
  }); 



function calculate() {
      const fromCurrency = fromCur.value;
      const toCurrency = toCur.value;

      fetch(`https://openexchangerates.org/api/latest.json?app_id=4555d2dde46a429b8df586d7398c6f2e`)
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
  
		.then(res => res.json())
    .then(res => {
			const rate = res.rates[toCurrency];
			toAmount.value = (fromAmount.value * rate).toFixed(2);
      
		})
    
    .catch((error)=> {
      console.log(error);
  })
}

calculate();


(function setTime(){
  var today = new Date();
  
  const month = today.toLocaleString('default', { month: 'long' });
  const ordinalDate = today.getDate() + ( [,'st','nd','rd'][/1?.$/.exec(today.getDate())] || 'th' );
  var date = ordinalDate+' '+month+', '+today.getFullYear();
  
  var time = format(today.getHours()) + ":" + format(today.getMinutes()) + ":" + format(today.getSeconds());
  var dateTime = date+' &nbsp;||&nbsp; '+time;
  
   var t = setTimeout(setTime, 100);
  document.getElementById("t1").innerHTML = dateTime;

  
  // add zero to numbers less than 10
  function format(number){
    if (number < 10) 
    {
      number = "0" + number;
    }; 
  return number;
  }
})();
