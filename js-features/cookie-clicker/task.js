let clickerCounter = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");

image.onclick = function(){
  if (image.width == 200){ 
    image.width = 220;
  } else {
    image.width = 200;
  }
  clickerCounter.textContent++; 
}


/*Повышенный уровень сложности (не обязательно)
Добавьте параметр «Скорость клика». Он должен показывать среднее количество кликов в секунду. Значение обновляется при каждом новом клике.
Буду очень благодарень если поможете*/