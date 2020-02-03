// Prevents null selections of DOM elements
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    main();
  });
})()

function main() {
  // Elements in DOM
  var toggleMenuButton = document.getElementById('menuToggler');
  var navigationElement = document.getElementById('navigation');

  // Toggle the navigation in the page
  function toggleNavigation() {
    navigationElement.classList.toggle('open');
    toggleMenuButton.classList.toggle('active');
  }

  // Add event listeners
  toggleMenuButton.onclick = toggleNavigation;
  navigationElement.onclick = toggleNavigation;

  // Initial state of the app
  var initialState = {
    playerIntents: 0,
    isNavigationVisible: false,
  };

  // Reducer of actions
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

