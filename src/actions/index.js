export const SET_FADER_INVISIBLE = 'SET_FADER_INVISIBLE'
export const SET_FADER_VISIBLE = 'SET_FADER_VISIBLE'

export const setFaderInvisible = () => 
{  
  return {
    type: SET_FADER_INVISIBLE
  }
}

export const setFaderVisible = () =>
{  
  return {
    type: SET_FADER_VISIBLE
  }
}
