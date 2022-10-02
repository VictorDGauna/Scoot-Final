let date = new Date();
let currentYear = date.getFullYear();


let lastModified = document.lastModified;
document.getElementById('currentDate').textContent = lastModified;

/*-----fraiday banner-------*/
if (date.getDay() === 4) {
    let bannerFriday = document.createElement('div');
    bannerFriday.classList.add('fridayBanner');
    bannerFriday.textContent = 'Saturday = > Preston Pancakes in the Park!At 9: 00 AM.';

    const ban = document.querySelector('body');
    ban.prepend(bannerFriday);
}
