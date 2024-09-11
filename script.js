function handleNoClick() {
  window.location.href = 'Index1.html';
}function handleNoClick() {
  window.location.href = 'Index1.html';
}
function handleNoClick1() {
    window.location.href = 'Index2.html';
  }function handleNoClick1() {
    window.location.href = 'Index2.html';
  }function handleNoClick2() {
    window.location.href = 'Index3.html';
  }function handleNoClick2() {
    window.location.href = 'Index3.html';
  }
function handleYesClick() {
  window.location.href = 'yes.html';
}function handleYesClick() {
  window.location.href = 'yes.html';
}
function moveButton() {
  const noButton = document.getElementById('no-button');
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  noButton.style.top = `${y}px`;
  noButton.style.left = `${x}px`;
  noButton.style.position = 'absolute';
}
  