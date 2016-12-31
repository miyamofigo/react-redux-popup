import React from 'react';
import { connect } from 'react-redux'
import { setFaderInvisible, setFaderVisible } from '../actions'
import '../build/css/App.css';

const css =  {
  fader: "fader",
  faderInvisible: "fader-invisible",
  popupContainer: "popup-container",
  popupCloseButtonArea: "popup-close-button-area"
}

const Fader = ({visibility, ...rest}) =>
  <div {...rest} className={(() => {
    if (visibility) 
      return css.fader
    else 
      return css.faderInvisible 
  })()}/>

const PopupContainer = ({config, ...rest}) => 
  <div {...rest} className={css.popupContainer}
    style={config}/>

const PopupCloseButtonArea = ({onClick, ...rest}) => 
  <div {...rest} className={css.popupCloseButtonArea}
    onClick={onClick}/>

const PopupCloseButton = () => (
  <svg viewBox="0 0 20 20">
    <path d="M 5,5 L 15,15 M 15,5 L 5,15"
      stroke="black"
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"/>
  </svg>
)

const mapStateToProps = state => {
  return {
    visibility: state.faderVisibility
  }
}

const mapDispatchToProps = dispatch => 
{ 
  return {
    activate: () =>
      dispatch(setFaderInvisible()),
    deactivate: () =>
      dispatch(setFaderVisible())
  }
}

const Popup = ({config, 
  visibility, 
  onClick,
  ...rest}) => (
  <Fader visibility={visibility}>
    <PopupContainer {...rest} config={config}>
      <PopupCloseButtonArea onClick={onClick}>
        <PopupCloseButton/>
      </PopupCloseButtonArea>
    </PopupContainer>
  </Fader>
)

const NaiveApp = ({config,
  visibility, 
  activate, 
  deactivate}) => 
  (<div>
     <p>Hello World</p>
     <a href="#" onClick={deactivate}>Activate</a>
     <Popup config={config}
       visibility={visibility}
       onClick={activate}/>
   </div>)

export default connect(mapStateToProps,
  mapDispatchToProps)(NaiveApp)
