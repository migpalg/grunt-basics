// Prevents null selections of DOM elements
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    main();
  });
})()

function main() {
  // Initial state of the app
  var initialState = {
    playerTries: 0,
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
      case 'ADD_TRY':
        return Object.assign(state, {
          playerTries: state.playerTries + 1,
        });
      default:
        return state;
    }
  }

  // Function to create stores of states, this is a Redux pattern
  // to manage the state of the application.
  function createStore(reducer) {
    var subscriptions = [];
    var state = reducer(null, {});

    function store() {}

    store.prototype.subscribe = function(listener) {
      subscriptions.push(listener);
    }

    store.prototype.dispatch = function(action) {
      state = reducer(state, action);
      subscriptions.forEach(function(subscription) { subscription(state); });
    }

    return new store();
  }

  var store = createStore(reducer);

  // Makes DOM content reactive to the state of the store created
  store.subscribe(function(state) {
    if (state.isNavigationVisible) {
      navigationElement.classList.add('open');
      toggleMenuButton.classList.add('active');
    } else {
      navigationElement.classList.remove('open');
      toggleMenuButton.classList.remove('active');
    }
  });

  // Elements in DOM
  var toggleMenuButton = document.getElementById('menuToggler');
  var navigationElement = document.getElementById('navigation');

  // Toggle the navigation in the page
  function toggleNavigation() {
    store.dispatch({ type: 'TOGGLE_NAVIGATION' });
  }

  // Add event listeners
  toggleMenuButton.onclick = toggleNavigation;
  navigationElement.onclick = toggleNavigation;

}

