var menu = document.getElementById('menu');
var menuOpt = document.getElementById('menu-opt');
var content = document.getElementById('intro');
var content2 = document.getElementById('about-me');
var content3 = document.getElementById('intro');
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if(showSidebar) {
    menuOpt.style.left = '0vw';
    menuOpt.style.animationName = 'showSidebar';
    content.style.filter = 'blur(5px)';
    content2.style.filter = 'blur(5px)';
    content3.style.filter = 'blur(5px)';
  }else {
    menuOpt.style.left = '-100vw';
    menuOpt.style.animationName = '';
    content.style.filter = '';
    content2.style.filter = '';
    content3.style.filter = '';
  }
}

function closeSidebar() {
  if(showSidebar) {
    toggleSidebar();
  }
}

window.addEventListener('resize', function(event) {
  if(window.innerWidth > 1150 && showSidebar) {
    toggleSidebar();
  }
})