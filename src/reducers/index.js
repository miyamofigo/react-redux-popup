import * as actions from '../actions'

export const faderVisibility = (state = true, action) => 
{
  switch (action.type) {
  case actions.SET_FADER_INVISIBLE:
    return false 
  case actions.SET_FADER_VISIBLE:
    return true 
  default:
    return state 
  }
}
