var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
    result = 0;

    result = Math.PI * radius * radius;
    result = result.toFixed(5);

    elementResult.innerText = result;

    e.preventDefault();
}, false);

