let name = prompt('What is your name?');
let outcome;
let time = prompt('Saat nechedi?')
let answer2;
let ders = prompt('Sen dersden ne qiymet aldin? (choose from 1 to 5)')



if (name == 'Akif') {
    outcome = 'Sen CS hech oynuya bilmirsen';
} else if (name == 'Elmeddin') {
    outcome = 'Champion!';
} else {
    outcome = 'Priyatno Poznakomitsa!';
}

if (time > 12) {
    answer2 = 'Its time to sleep!';
} else {
    answer2 = 'Yatmaqa hele vaxt var';
}

if (ders >= 4) {
    qiymet = 'Sen yaxshi oxuyursan!';
} else {
    qiymet = 'Qet derslerivi oxu!';
}


document.getElementById('start').innerHTML = outcome;
document.getElementById('second').innerHTML = answer2;
document.getElementById('third').innerHTML = qiymet;