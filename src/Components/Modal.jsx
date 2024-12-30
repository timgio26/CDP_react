import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { FormCust } from './FormCust';
import { AddCustomer } from './apiCustomer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal({children}) {
    const [isloading,setisloading]=useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function confirmHandler(data){
    try {
        setisloading(true)
        const resp = await AddCustomer(data)
        setisloading(false)
        setOpen(false)
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <div>
      <div onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
            <FormCust onCancel={handleClose} onConfirm={confirmHandler} isloading={isloading}/>
        </Box>
      </Modal>
    </div>
  );
}
