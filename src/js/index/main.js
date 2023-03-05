let counter = document.getElementById("visits-counter");

fetch('/visits')
  .then(response => response.json())
  .then(data => {
    const visitsData = data;
    counter.innerHTML = `Thanks for visiting!<br>Visits: <font color='red'>${visitsData.visits}</font>`;
  })
  .catch(error => console.error(error));