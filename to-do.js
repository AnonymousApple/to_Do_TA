var form = document.querySelector('[type="button"]');
function onClick() {
  var el = document.getElementById('add-a-todo');
  var le = el.value
  var list = document.getElementById('group')
  var toDo = document.createElement('li');
  toDo.textContent = le;
  toDo.className = 'remove';
  list.appendChild(toDo);
  el.value = '';
}
form.addEventListener('click', function() {
  onClick();
});
