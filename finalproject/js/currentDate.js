let date = new Date();
var options = { day:'numeric', month: 'long', year: 'numeric'};

document.getElementById('currentDate').textContent = date.toLocaleDateString("en-US", options);

/*-----fraiday banner-------*/
if (date.getDay() === 4) {
    let bannerFriday = document.createElement('div');
    bannerFriday.classList.add('fridayBanner');
    bannerFriday.textContent = 'Saturday = > Preston Pancakes in the Park!At 9: 00 AM.';

    const ban = document.querySelector('body');
    ban.prepend(bannerFriday);
}
