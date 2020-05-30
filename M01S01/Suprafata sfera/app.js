var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
    result = 0;

    result = 4 * Math.PI * Math.pow(radius, 2);
    result = result.toFixed(5);

    elementResult.innerText = result;

    e.preventDefault();
}, false);