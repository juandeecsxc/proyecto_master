fetch('links.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('dashboard-container');
    data.forEach(dash => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${dash.title}</h3>
        <img src="images/${dash.img}" alt="${dash.title}">
        <a href="${dash.url}" target="_blank">Ver Interactivo</a>
      `;
      container.appendChild(card);
    });
  });