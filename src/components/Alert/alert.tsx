import React, { useState } from 'react'
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
  closeText?: string,
  description?: string   // 信息详情
  showIcon?: boolean,

}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type,
    message,
    closable,
    closeText,
    description,
    showIcon
  } = props
  const [show, setShow] = useState(true)
  const classes = classNames('alert', { [`alert-${type}`]: type, [`alert-${closable}`]: closable, [`alert-${description}`]: description })
  const closeShow = closable || closeText

  return (
    <>
      {show && <div className={classes}>
        {/* 默认样式 */}
        {!description && <div className="alert-default-context">
          <span>
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className="alert-close-btn" onClick={() => { setShow(false) }}>
            {closeText ? closeText : <CloseOutlined />}
          </button>}
        </div>}
        {/* 包含description的样式 */}
        {description && <div className="alert-description-context">
          <span className="alert-description-context-message">
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className="alert-close-btn" onClick={() => { setShow(false) }}>
            {closeText ? closeText : <CloseOutlined />}
          </button>}
          <p className="alert-description-context-description">
            {description}
          </p>
        </div>}
      </div>}
    </>
  )
}

export default Alert;