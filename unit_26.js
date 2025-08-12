// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
   let r = await fetch(URL + '/api/26/employee/read', {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    let out = '';
    data.result.forEach(emp => out += emp.age + ' ');
    document.querySelector('.out-1').innerHTML = out;
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.



async function f2() {
    let id = document.querySelector('.i-2').value;
    let r = await fetch (URL + '/api/26/employee/read?id=' + id, {
        method: 'GET',
        headers: { 'apikey': APIKEY}
    });
    let data = await r.json()
        document.querySelector('.out-2').innerHTML = data.result.email;
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3() {

    let id = document.querySelector('.i-3').value;
    let  r = await fetch (URL + '/api/26/employee/read/' + id, {
        method: 'POST',
        headers: {'apikey': APIKEY}
    });
    let data = await r.json()
    document.querySelector('.out-3').innerHTML = data.result.name;
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.


async function f4(){
    let r = await fetch (URL + '/api/26/sr/read', {
        method: 'POST',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json()
    let out = ''
    data.result.forEach(race => {
        out += race.title + ' ' 
    })
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.


async function f5() {
    let race = document.querySelector('.s-5').value;
    let r = await fetch(URL + '/api/26/sr/read?race=' + race, {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    document.querySelector('.out-5').innerHTML = data.result.description;
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6() {
    let r = await fetch(URL + '/api/26/run', {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    document.querySelector('.out-6-status').innerHTML = r.status;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement. 
// В начале функции делайте очистку .out-7.


async function f7() {
    let race = document.querySelector('.s-7').value;
    let r = await fetch(URL + '/api/26/sr/read/' + race, {
        method: 'POST',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    let out = document.querySelector('.out-7');
    out.innerHTML = '';
    let img = document.createElement('img');
    img.src = data.result.image;
    out.appendChild(img);
}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
    let r = await fetch(URL + '/api/26/random/random-number', {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    document.querySelector('.out-8').innerHTML = data['random-number'];
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
    let r = await fetch(URL + `/api/26/random/random-number?min=${min}&max=${max}`, {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    document.querySelector('.out-9').innerHTML = data['random-number'];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
    let fd = new FormData();
    fd.append('min', min);
    fd.append('max', max);
    let r = await fetch(URL + '/api/26/random/random-number', {
        method: 'POST',
        headers: { 'apikey': APIKEY },
        body: fd
    });
    let data = await r.json();
    document.querySelector('.out-10').innerHTML = data['random-number'];
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11() {
    let len = document.querySelector('.i-11').value;
    let r = await fetch(URL + '/api/26/random/random-string?length=' + len, {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    document.querySelector('.out-11').innerHTML = data['random-string'];
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.



async function f12() {
    let fd =  new FormData();
    fd.append('length', document.querySelector('.i-12').value);

    let symbols;
    if (document.querySelector('.ch-12').checked) {
        symbols = 1;
    } else {
        symbols = 0;
    }
    fd.append('symbols', symbols);

    let r = await fetch (URL + '/api/26/random/generate-password', {
        method: 'POST',
        headers: {'apikey': APIKEY},
        body: fd
    })
    let data = await r.json()
    document.querySelector('.out-12').innerHTML = data.password
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13() {
    let fd = new FormData();
    fd.append('length', document.querySelector('.i-13').value);

    let symbols;
    if (document.querySelector('.ch-131').checked) {
        symbols = 1;
    } else {
        symbols = 0;
    }
    fd.append('symbols', symbols);

    let uppercase;
    if (document.querySelector('.ch-132').checked) {
        uppercase = 1;
    } else {
        uppercase = 0;
    }
    fd.append('uppercase', uppercase);

    let r = await fetch(URL + '/api/26/random/generate-password', {
        method: 'POST',
        headers: { 'apikey': APIKEY },
        body: fd
    });
    let data = await r.json();
    document.querySelector('.out-13').innerHTML = data.password;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел. 

async function f14() {
    let r = await fetch (URL + '/api/26/gow/world', {
        method: 'GET',
        headers: {  'apikey': APIKEY  }
    });
    let data = await r.json();
    let out = '';
    data.result.forEach(world => {
        out += world.title + ' ';
    });
    document.querySelector('.out-14').innerHTML = data.worlds.map(item => item.title).join(' ');
}


async function f14() {
    let r = await fetch(URL + '/api/26/gow/world', {
        method: "GET",
        headers: {
            "apikey": APIKEY
        }
    })
    let data = await r.json();
    document.querySelector('.out-14').innerHTML = data.worlds.map(item => item.title).join(' ');
}
document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15() {
    let s15 = document.querySelector('.s-15').value;
    let r = await fetch(URL + "/api/26/gow/world/" + s15,  {
        method: "GET",
        headers: {
            "apikey": APIKEY
        }
    })
    let data = await r.json();
    document.querySelector('.out-15').innerHTML = data.world.description
}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW. 
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16() {
    let gov = document.querySelector('.s-16').value;
    let r = await fetch(URL + '/api/26/gow/governor/' + gov, {
        method: 'GET',
        headers: { 'apikey': APIKEY }
    });
    let data = await r.json();
    let out = document.querySelector('.out-16');
    out.innerHTML = '';
    let img = document.createElement('img');
    img.src = data.result.rune;
    out.appendChild(img);
}

async function f16() {
    let s16 = document.querySelector('.s-16').value;
    let out16 = document.querySelector('.out-16');
    out16.innerHTML = '';
    let r = await fetch(URL + '/api/26/gow/governor/' + s16, {
        method: "GET",
        headers: {"apikey": APIKEY}
    })
    let data = await r.json();
    let img = document.createElement('img');
    img.src = URL + data.world.rune;
    out16.appendChild(img);
}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17(){
    let r = await fetch(URL + '/api/26/get-time', {
        method: "POST",
        headers: {"apikey": APIKEY}
    })
    let data = await r.json();
    console.log(data)
    document.querySelector('.out-17').innerHTML = data.time['h'] + ':' + data.time['m']
}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

async function f18(){
let out18 = document.querySelector('.out-18');
    out18.innerHTML = '';
    let r = await fetch(URL + '/api/26/gow/rune', {
        method: "POST",
        headers: {"apikey": APIKEY}
    })
    let data = await r.json();
    let html = '';
    for (let world in data.rune) {
        let image = data.rune[world];
        html += `<img src="https://api.itgid.info${image}" alt="${world}">`;
    }
    out18.innerHTML = html;
}


document.querySelector('.b-18').onclick = f18;
