// local item data
const items = [
  {
    id: 1,
    info: 'Sia - Snowman',
    img: './images/001.png'
  },
  {
    id: 2,
    info: 'Justin Bieber - Mistletoe',
    img: './images/002.png'
  },
  {
    id: 3,
    info: '이무진 - 눈이 오잖아(feat.헤이즈)',
    img: './images/003.png'
  },
  {
    id: 4,
    info: '아이유 - 미리 메리 크리스마스(feat.천둥)',
    img: './images/004.png'
  },
];

// select items
const img = document.getElementById('album-img');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = items[currentItem];
  img.src = item.img;
  info.textContent = item.info;
});

// show Item
function showItem(i) {
  const item = items[i];
  img.src = item.img;
  info.textContent = item.info;
}

// show next Item
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > items.length - 1) {
    currentItem = 0;
  }
  showItem(currentItem);
});
// show prev Item
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showItem(currentItem);
});