const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p')
para.classList.add('para');
para.textContent = "Hey I'm red";
para.style.color = 'red'

content.appendChild(para);

const title3 = document.createElement('h3')
title3.classList.add('title3');
title3.textContent = "I'm a blue h3!";
title3.style.color = 'blue';

content.appendChild(title3);
