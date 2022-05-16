function countdown () {
    const birthday = new Date('January 28, 2023 00:00');
    const now = new Date();
    const result = birthday - now;
    
    const msInSecond = 1000;
    const msInMinute = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 24;

    const displayDay = Math.floor(result / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((result%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((result%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((result%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    setInterval(countdown, 1000);
    if (result <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timer);
        happyBirthDay();
    }
}
let timer = setInterval(countdown, 1000); 

function happyBirthDay () {
    const heading = document.querySelector('h1');
    heading.classList.add('list');
    heading.textContent = 'Наша любимая доченька! Поздравляем тебя с юбилеем с 10-летием!Ты красивая, веселая, отзывчивая и нежная. Обязательно сохрани в себе эти черты. А еще будь доброй, постарайся развивать в себе и совершенствовать это важнейшее качество. Оставаться добрым человеком сложно. Но именно эта черта привлечет к тебе хороших людей и окружит настоящими, верными друзьями. Не болей, не грусти и знай, что мы тебя крепко любим и всегда будем рядом! С днём Рождения, Сафийе!';
}

countdown();
const btnOne = document.querySelector('.play');
btnOne.addEventListener('click', function(){
    const myAudio = document.querySelector('#myAudio').play();
})

const btnTwo = document.querySelector('.pause');
btnTwo.addEventListener('click', function() {
    const myAudio = document.querySelector('#myAudio').pause();
})
