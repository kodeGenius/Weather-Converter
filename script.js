const celcius = ()=>{
	let val = document.getElementById("check").value;
	let cal = val - 273;
	document.getElementById("lo").innerHTML = `${val} kelvin will have the temperature of ${cal} degrees celsius.`;
	}
const fahrenheit = ()=>{
	let val = document.getElementById("check1").value;
	let cal = Math.floor(val * (9/5) + 32);
	document.getElementById("lo1").innerHTML = `${val} degrees celsius will have the temperature of ${cal} degrees Fahrenheit.`;
	}
const newton = ()=>{
	let val = document.getElementById("check2").value;
	let cal = Math.floor(val * (33/100));
	document.getElementById("lo2").innerHTML = `${val} degrees celsius will have the temperature of ${cal} degrees Newton.`;
	}