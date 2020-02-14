// Prevents null selections of DOM elements
(function() {
  document.addEventListener('DOMContentLoaded', main);
})();

function main() {
  // Elements in DOM
  var toggleMenuButton = document.getElementById('menuToggler');
  var navigationElement = document.getElementById('navigation');
  var counterButton = document.getElementById('counterButton');
  var counterValue = document.getElementById('counterValue');

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

    function Store() {}

    Store.prototype.subscribe = function(listener) {
      subscriptions.push(listener);
    };

    Store.prototype.dispatch = function(action) {
      state = reducer(state, action);
      subscriptions.forEach(function(subscription) { subscription(state); });
    };

    return new Store();
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

    if (counterValue) counterValue.innerText = state.playerTries;
  });

  // Toggle the navigation in the page
  function toggleNavigation() {
    store.dispatch({ type: 'TOGGLE_NAVIGATION' });
  }

  function incrementCount() {
    store.dispatch({ type: 'ADD_TRY' });
  }

  // Add event listeners
  if(toggleMenuButton)  toggleMenuButton.onclick  = toggleNavigation;
  if(navigationElement) navigationElement.onclick = toggleNavigation;
  if(counterButton)     counterButton.onclick     = incrementCount;
}
