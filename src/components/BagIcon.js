import React from 'react'
import Order from './Order'
import { Button, Icon, Modal } from "semantic-ui-react"; 

function BagIcon(props) {
  const [open, setOpen] = React.useState(false)
  // const {bagList} = this.props
  // console.log(bagList)
  props.bagList.map(item => console.log(item))
  // console.log(this.props.bagList)

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
              <Order bagList={props.bagList}/>    
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)} primary>
              Checkout <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
        </Modal>
        )
}
export default BagIcon