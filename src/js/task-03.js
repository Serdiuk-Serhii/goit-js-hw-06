const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

listEl.classList.add('imgList');

const imgListEL = document.querySelector('.imgList');

imgListEL.style.display = 'flex';
imgListEL.style.flexWrap = 'wrap';
imgListEL.style.justifyContent = 'center';
imgListEL.style.alignItems = 'center';

imgListEL.style.gap = '20px';
imgListEL.style.listStyle = 'none';

const itemsEl = images.map(image => {
  const item = `<li><img src ='${image.url}' alt = '${image.alt}' width = 500px></li>`
  return item;

});

listEl.insertAdjacentHTML('afterbegin', itemsEl);



console.log(listEl);