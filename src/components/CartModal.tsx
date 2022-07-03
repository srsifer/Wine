import React, { useContext } from 'react';
import PrevPageIcon from '../assets/prevPageIcon.svg'
import Modal from 'react-modal';
import { MyContext } from '../provider/Store';
import { DivcardItemCart, DivEmptyCartMenssage, DivHeaderModal, DivInformationOrder, DivNameAndRemoveItem, DivPriceAndTotal, ModalStylesDiv } from '../styles/components/ModalStyles';

const customStyles = {
  content: {
    top: '0',
    left: '',
    right: '0',
    bottom: '',
    marginRight: '',
    marginLeft: 'auto',
    height: '100vh',
    width: '350px',
    transform: '',
    backgroundColor: ' #f5f5f5'
  },
};


interface CartModalProps {
  modalIsOpen: boolean;
  closeModal: Function;
}

export default function CartModal(props: CartModalProps) {
  const { modalIsOpen, closeModal } = props;
  const { globalState, setGlobalState } = useContext(MyContext)

  if (globalState == undefined || globalState.length == 0) {
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => closeModal()}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <DivHeaderModal>
            <button onClick={() => closeModal()}><PrevPageIcon /></button>
          </DivHeaderModal>
            <DivEmptyCartMenssage>
              <h1>=(</h1>
              <h2>Você ainda não escolheu seus produtos</h2>
            </DivEmptyCartMenssage>
          <ModalStylesDiv>

          </ModalStylesDiv>

        </Modal>
      </div>
    )
  }

  const removeItemToLocalStorage = (itemId: number) => {
    const newCart = globalState.filter((item: any) => item.id !== itemId)
    localStorage.setItem('allProducts', JSON.stringify(newCart))
    setGlobalState(newCart)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DivHeaderModal>
          <button onClick={() => closeModal()}><PrevPageIcon /></button>
        </DivHeaderModal>
        <ModalStylesDiv>
          {
            globalState.map((item: any) => (
              <>
                <DivcardItemCart>
                  <img src={item.image} alt="" />
                  <DivInformationOrder>
                    <DivNameAndRemoveItem>
                      <h3>{item.name}</h3>
                      <button
                        onClick={() => removeItemToLocalStorage(item.id)}
                      >x</button>
                    </DivNameAndRemoveItem>
                    <DivPriceAndTotal>
                      <p>{item.quantity}</p>
                      <h2>{`R$ ${item.priceMember.toFixed(2)}`}</h2>
                    </DivPriceAndTotal>
                  </DivInformationOrder>
                </DivcardItemCart>
                <hr />
              </>
            ))
          }
        </ModalStylesDiv>

      </Modal>
    </div>
  )
}
