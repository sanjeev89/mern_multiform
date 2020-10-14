export default (state, action) => {
    switch(action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step+1
            }
        case 'PREV_STEP':
            return {
                ...state,
                step: state.step-1
            }
        case 'FORM_ONE':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }
        case 'FORM_TWO':
            return {
                ...state,
                occupation: action.payload.occupation,
                bio: action.payload.bio,
                city: action.payload.city
            };
        case 'ALL_DATA' : 
            console.log("I am state ", state)
            console.log("kjhjhjj", action.payload)
            return {
                ...state,
                db: action.payload
            };
        case 'ADD_DATA':
            return {
                ...state,
                db: [action.payload, ...state.db]
            };
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
      default:
        return "ERROR";
    }
  }