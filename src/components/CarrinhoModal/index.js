import React, { useRef } from 'react'
import { Modalize } from 'react-native-modalize';
import Carrinho from '../../pages/Carrinho';


const CarrinhoModal = (props) => {



  return (
    <>
      <Modalize
      ref={props.modalRef}
        alwaysOpen={75}
        modalHeight={400}
        handlePosition='inside'
      >
        <Carrinho />
      </Modalize>
    </>
  )
}

export default CarrinhoModal;