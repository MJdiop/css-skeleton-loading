console.log('Working !!!');

const API = 'https://jsonplaceholder.typicode.com/posts/?_limit=9';
const grid = document.getElementById('grid');
const cardTemplate = document.getElementById('card-template');

for (let i = 0; i < 9; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}

fetch(API)
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    grid.innerHTML = '';
    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.getElementById('data-title').textContent = post.title;
      div.getElementById('data-body').textContent = post.body;
      grid.append(div);
    });
  });
