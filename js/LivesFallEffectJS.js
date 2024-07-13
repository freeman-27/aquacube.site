var timeoutToRunFunction;
 
$(document).ready(function startAnimation(){
		timeoutToRunFunction = setTimeout(flowersAnimation, 5000);		
		});

		function flowersAnimation(){
			$("body").jSnow({
			vSize: 2000, //Размер области
			flakes: 300, //Количество элементов.
			flakeColor: ["white", "blue", "cyan"], // цвет  элементов
			flakeMinSize: 5, //Размер минимальный
			flakeMaxSize: 15, //Размер максимальный
			fallingSpeedMin: -1, //Минимальная скорость
			fallingSpeedMax: -2, //Максимальная скорость
			flakeCode:["&#9675;", "&#9675;", "&#9711;", "o", "O"] // Форма элементов
			});
		}

//flowers simbols u-code: &#127800; &#x1F338;
