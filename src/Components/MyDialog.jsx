import { DialogContent, DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export function MyDialog({open,close,onConfirm,data}){
  function handleConfirm() {
    // console.log("confirm");
    onConfirm();
  }
  function handleCancel() {
    // console.log("close");
    close();
  }

  // console.log(data);
  return (
    <Dialog open={open}>
      <DialogTitle>Confirm delete Customer?</DialogTitle>
      <DialogContent>
        <DialogContentText>Name: {data?.name}</DialogContentText>
        <DialogActions className='mt-3'>
          <button
            className="hover:bg-red-500 border-red-200 border-2 py-2 px-5"
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            className="hover:border-slate-500 border-2 py-2 px-5"
            onClick={handleCancel}
          >
            cancel
          </button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}