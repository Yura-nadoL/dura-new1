// read -more
const btn = document.querySelector('.content-question__read-more');
const text = document.querySelector('.content-question__text');
const cardHolder = document.querySelector('.question__row');

cardHolder.addEventListener("click", e => {
   const current = e.target;
   const isReadMoreBtn = current.className.includes('content-question__read-more');

   if (!isReadMoreBtn) return;

   const currentText = e.target.parentNode.querySelector('.content-question__text');
   currentText.classList.toggle('active');

   current.textContent = current.textContent.includes('Read More') ? 'Read Less' : 'Read More';
})