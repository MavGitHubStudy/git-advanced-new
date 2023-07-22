(function () {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', function () {
      let text = document.getElementById('text').nodeValue;
      alert('Длина строки: ' + text);
      /* comment */
    });
  });
})();
