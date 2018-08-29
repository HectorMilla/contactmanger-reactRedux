import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACTS
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
}
