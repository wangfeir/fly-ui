import React from 'react'
import classNames from 'classnames'
// import { AntDesignOutline, DashboardOutline, TwitterOutline } from '@ant-design/icons';
// import AntdIcon from '@ant-design/icons-react';
// AntdIcon.add(AntDesignOutline, DashboardOutline);
import { CloseOutlined } from '@ant-design/icons';
export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}


interface AlertProps {
  type: string,
  message: string,
  closable?: boolean,
  closeText?:string
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type,
    message,
    closable,
    closeText
  } = props
  const classes = classNames('alert', { [`alert-${type}`]: type, [`alert-${closable}`]: closable })
  const closeShow = closable||closeText
  return (
    <div className={classes}>
      <p>
        {message}
      </p>
      {closeShow && <button className="alert-close-btn">
        {closeText?closeText:<CloseOutlined />}
      </button>}
    </div>
  )
}

export default Alert;