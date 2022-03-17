const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

document.onclick = function() 
{
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
}

document.onclick = function(clickEvent) 
{
  if(clickEvent.target.id !== "menu" && clickEvent.target.id !== "toggle") 
  {
    menu.classList.remove('active');
  }

  else
  {
    menu.classList.add('active');
  }
}


