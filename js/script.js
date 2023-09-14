const global = {
  currentPage: window.location.pathname,
};

function init() {
  console.log(global.currentPage);

  switch (global.currentPage) {
    case '/':
      console.log('home');
      break;
    default:
      console.log('dont know');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);
