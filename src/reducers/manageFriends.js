let state = { friends: [{ name: 'Avi', hometown: 'NYC', id: 100}] };
let action = {
  type: "ADD_FRIEND",
  friend: {
    name: "Joe",
    hometown: "Boston",
    id: 101,
  },
};

export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends, action.friend]};
        case 'REMOVE_FRIEND':
          return {friends: [...state.friends.filter( friend => friend.id != action.id)]};
    default:
       return state;
    }
}
