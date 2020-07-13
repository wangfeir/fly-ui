import React from 'react'
import classNames from 'classnames'

export enum AlertType{
  Success="success",
  Info="info",
  Warning="warning",
  Error="error",
}


interface AlertProps{
  type:string,
  message:string
}

const Alert:React.FC<AlertProps> = (props) =>{
  const {
    type,
    message
  } = props
  const classes = classNames('alert',{[`alert-${type}`]:type})
  return(
    <div className={classes}>
      {message}
    </div>
  )
}

export default Alert;