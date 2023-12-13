import { Dialog, DialogContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';

const Modal = ({ open, onClose, children, width = 600, ...props }) => {
  const phoneSize = useMediaQuery('(max-width:480px)');

  const useStyles = makeStyles(
    () => ({
      dialog: {
        '& .MuiDialog-paper': {
          width: '100%',
          maxWidth: width,
          boxShadow: '0px 12.8px 28.8px rgba(0, 0, 0, 0.22), 0px 2.4px 7.4px rgba(0, 0, 0, 0.18)',
          borderRadius: phoneSize ? '0' : '12px'
        }
      },
      content: {
        overflowX: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }),
    { name: 'FmFDialog' }
  );

  const classes = useStyles();

  return (
    <Dialog
      fullScreen={ phoneSize }
      open={ open }
      onClose={ onClose }
      scroll='body'
      { ...props }
      className={ classes.dialog }
      disableScrollLock={ true }>
      <DialogContent className={ classes.content }>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
