const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red";
para.style.color = 'red'

content.appendChild(para);

const title3 = document.createElement('h3');
title3.classList.add('title3');
title3.textContent = "I'm a blue h3!";
title3.style.color = 'blue';

content.appendChild(title3);

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.border = "2px solid black";
content2.style.background = "pink";

const title1 = document.createElement('h1')
title1.classList.add('title1');
title1.textContent = "I'm in a div";

content2.appendChild(title1);

const para1 = document.createElement('p');
para1.classList.add('para1');
para1.textContent = "ME TOO !";

content2.appendChild(para1)

container.appendChild(content2)
