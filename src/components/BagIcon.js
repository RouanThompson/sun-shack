import React from 'react'
import Order from './Order'
import { Button, Icon, Modal } from "semantic-ui-react"; 

function BagIcon(props) {
  const [open, setOpen] = React.useState(false)
  props.bagList.map(item => console.log("BagIcon: ", item))


  let renderBagItems = () => {
    return props.bagList.map(
      item => <Order 
        key={item.id} 
        name={item.name} 
        brand={item.brand} 
        price={item.price} 
        quantity={props.quantity} 
        updateTotal={props.updateTotal}/>)
  }
  
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Bag</Button>}
    >

    <Modal.Header>Checkout</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
            {renderBagItems()}
            <div style={{color: "green", marginLeft: 500}}>TOTAL:  {props.total}</div>    
        </Modal.Description>
      </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} primary>
            Place Order <Icon name='chevron right' />
          </Button>
        </Modal.Actions>
    </Modal>
  )
}
export default BagIcon