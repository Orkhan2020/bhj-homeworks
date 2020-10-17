
let countdown = setInterval(() => {
    const timer = document.getElementById('timer');
    if (timer.textContent == 0) {
        alert(`Вы победили в конкурсе`);
        clearInterval(countdown); document.location.assign('https://developer.mozilla.org/ru/docs/Web/API/Window/location');
    }
    else {
        timer.textContent--;
    }
}, 1000)


/* Повышенный уровень сложности #1 (не обязательно)
Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss (например, 04:25:19), где hh - двухзначное число часов, mm - минут, ss - секунд.
   Повышенный уровень сложности #2 (не обязательно)
   Можно сделать иначе: поместить невидимый на страницу тег a с атрибутом download и target="_blank" для старых браузеров (<a href="http://hello.kitty" download target="_blank">), поменять ей адрес (атрибут href) и вызвать метод click() у найденного элемента.
   Буду признателен если подскажите как правильно сделать так как очень сильно туплю Я лучше понимаю когда вижу какие либо примеры. Заранее спасибо
*/

