document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/scraped-data')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('container');
        
        data.forEach(location => {
          const element = document.createElement('div');
          element.className = 'data-box';
          

          const ul = document.createElement('ul');
          location.menu.forEach(items => {
            const li = document.createElement('li');
            li.innerText = items;
            ul.appendChild(li);
          });
          element.innerHTML = `<blockquote>${location.name}</blockquote>`;
          element.appendChild(ul);


          container.appendChild(element);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch:', error);
      });
  });