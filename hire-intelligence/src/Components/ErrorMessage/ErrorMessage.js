import React from 'react'
import { useStateValue } from '../../StateProvider'
import { Alert } from '@material-ui/lab'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'

function ErrorMessage() {
  const [{ error }, dispatch] = useStateValue()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch({ type: 'SET_ERROR', error: null })
  }
  return (
    <div className="errorMessage">
      {error && (
        <Snackbar
          open={true}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  dispatch({ type: 'SET_ERROR', error: null })
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {error.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  )
}

export default ErrorMessage
