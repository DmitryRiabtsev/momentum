//DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');
const btn = document.querySelector('.btn');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const quote = document.getElementById('quote');
const btnQuote = document.getElementById('btn-quote')

const monthBase = {
	'1':'Январь',
	'2':'Февраль',
	'3':'Март',
	'4':'Апрель',
	'5':'Май',
	'6':'Июнь',
	'7':'Июль',
	'8':'Август',
	'9':'Сентябрь',
	'10':'Октябрь',
	'11':'Ноябрь',
	'12':'Декабрь'
};

const dayBase = {
	'0':'Воскресенье',
	'1':'Понедельник',
	'2':'Вторник',
	'3':'Среда',
	'4':'Четверг',
	'5':'Пятница',
	'6':'Суббота'
};

const QUOTE_BASE = {
	"1":"Если что-то работает — то не трогай это.©",
	"2":"Самый лучший способ изучать язык программирования — это писать на нем программы.©",
	"3":"Хороший программист — это тот, кто смотрит в обе стороны, переходя дорогу с односторонним движением.©",
	"4":"В любой программе есть хотя-бы одна ошибка.©",
	"5":"Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.©",
	"6":"Для начала изучите теорию. Затем обретите собственный стиль программирования. И, наконец, забудьте об этой ерунде и просто пишите код.©",
	"7":"Не переживайте, если что-то идёт не так. Если бы работало абсолютно всё, не работали бы вы.©",
	"8":"В мире нет такого языка программирования, на котором разработчики не смогли бы написать плохую программу.©",
	"9":"Есть два способа написать программу без ошибок, но работает только третий.©",
	"10":"Ошибки свойственны человеку, но для нечеловеческих ляпов нужен компьютер.©",
}

//Отображение времени
function showTime() {
	//let today = new Date(2020, 10, 6, 12, 20, 20);
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();


	time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

	setTimeout(showTime, 1000);

}

function quoteRandom() {
	let quoteMax = 10;
	function random(){
		return Math.floor(Math.random()*quoteMax)
	}
	let k = random(quoteMax);
    quote.textContent = `${QUOTE_BASE[k+1]}`;	

}

quoteRandom();

function showDate() {
	let todayDate = new Date();
	let year = todayDate.getFullYear();
	let mon;
	let dat = todayDate.getDate();
	let day;
	for(let monthKey in monthBase){
		if(monthKey == todayDate.getMonth()+1){
			mon = monthBase[monthKey];
		} 
	}
	for(let dayKay in dayBase){
		if(dayKay == todayDate.getDay()){
			day = dayBase[dayKay]
		}
	}

	date.innerHTML = `${day}<span>, </span>${addZero(dat)}<span> </span>${mon}<span> </span>${year}`;

	setTimeout(showDate, 10000);
}

function addZero(n){
	return(parseInt(n, 10) < 10 ? '0' : '' )+n;
}  
     
function randomImage(){
	let maxImage = 10;
	let timeOfDay;
    //let today = new Date(2020, 10, 6, 4, 20, 20);
	let today = new Date();
	let hour = today.getHours();
	if(hour >= 6 && hour <= 12){
		 timeOfDay = 'morning';
		 greeting.textContent = 'Доброе утро';
	 } else if(hour >= 13 && hour <= 18){
		 timeOfDay = 'day';
		 greeting.textContent = 'Добрый день';
	 } else if(hour >=19 && hour <= 24) {
		 timeOfDay = 'evening';
		 greeting.textContent = 'Добрый вечер';
		 document.body.style.color = 'white';
	 }else if(hour <= 5){
		 timeOfDay = 'night';
		 greeting.textContent = 'Доброй ночи';
		 document.body.style.color = 'white';
	 }
	 
	  function random(){
		return Math.floor(Math.random()*maxImage);
	 } 
	 let j = random(maxImage);
    document.body.style.backgroundImage = `url(./images/${timeOfDay}/${addZero(j+1)}.jpg)`;
} 

function viewImages() {
	let maxImage = 20;
	let timeOfDay;
	
	//let today = new Date(2020, 10, 6, 4, 20, 20);
	let today = new Date();
	let hour = today.getHours();
	if(hour >= 6 && hour <= 12){
	 	timeOfDay = 'morning';
	 	greeting.textContent = 'Доброе утро';
	 } else if(hour >= 13 && hour <= 18){
	 	timeOfDay = 'day';
	 	greeting.textContent = 'Добрый день';
	 } else if(hour >=19 && hour <= 24) {
	 	timeOfDay = 'evening';
	 	greeting.textContent = 'Добрый вечер';
	 	document.body.style.color = 'white';
	 }else if(hour <= 5){
	 	timeOfDay = 'night';
	 	greeting.textContent = 'Доброй ночи';
	 	document.body.style.color = 'white';
	 }
    document.body.style.backgroundImage = `url(./images/${timeOfDay}/${addZero(i)}.jpg)`;
    i++;
    if (i == maxImage) {
        i = 1;
	}
}  

let i = 1;
setInterval("viewImages()",1000*60*60);
randomImage();

// get name
function getName() {
	if(localStorage.getItem('name') === null) {
		name.textContent = '[Имя]'
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//get focus
function getFocus() {
	if(localStorage.getItem('focus') === null) {
		focus.textContent = '[Задача]'
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}

function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=f20c9145137b5ea62e1fdbab5af72383&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  setTimeout(getWeather, 1000*60*60);
}
function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
btn.addEventListener('click', viewImages);
btnQuote.addEventListener('click', quoteRandom);

getFocus();
getName();
showDate();
showTime();