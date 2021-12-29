import React from 'react';
import {KeyboardTextStyles, KeyboardTextWrapper} from './KeyboardSectionText.styles';


const KeyboardSectionText:React.FC = () => {
  return (
    <KeyboardTextWrapper>
      <KeyboardTextStyles>
        The Typemaster keyboard boasts 
        top-notch build and practical design. 
        It offers a wide variety of switches and keycaps, 
        along with reliable wireless connectivity.
      </KeyboardTextStyles>
    </KeyboardTextWrapper>
  )
}

export default KeyboardSectionText;