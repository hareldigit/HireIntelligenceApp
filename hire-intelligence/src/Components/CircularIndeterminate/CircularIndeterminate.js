import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStateValue } from '../../StateProvider'

function CircularIndeterminate() {
  const classes = useStyles()
  const [{ indeterminate }, dispatch] = useStateValue()
  return (
    <div className={classes.root}>{indeterminate && <CircularProgress />}</div>
  )
}

export default CircularIndeterminate

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: '100%',
    height: '100%',
  },
}))
