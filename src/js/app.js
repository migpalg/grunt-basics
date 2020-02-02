(function() {
  document.addEventListener('DOMContentLoaded', function() {
    main();
  })
})()

function main() {
  // Elements in DOM
  var toggleMenuButton = document.getElementById('menuToggler');
  var navigationElement = document.getElementById('navigation');

  toggleMenuButton.addEventListener('click', function() {
    navigationElement.classList.toggle('open');
    toggleMenuButton.classList.toggle('active');
  });

  var initialState = {
    playerIntents: 0,
    isNavigationVisible: false,
  };
  
  function reducer(state, action) {
    if(!state) state = initialState;
  
    switch (action.type) {
      case 'TOGGLE_NAVIGATION':
        return Object.assign(state, {
          isNavigationVisible: !state.isNavigationVisible,
        });
      default:
        return state;
    }
  }
}

