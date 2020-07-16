import React, { useState } from 'react'
import classNames from 'classnames'
// import { AntDesignOutline, DashboardOutline, TwitterOutline } from '@ant-design/icons';
// import AntdIcon from '@ant-design/icons-react';
// AntdIcon.add(AntDesignOutline, DashboardOutline);
import StatusIcon,{IconStatus} from '../StatusIcon/statusIcon'
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
  const classes = classNames('alert', { [`alert-${type}`]: type, [`alert-${closable}`]: closable, [`alert-description`]: description })
  const descriptionClasses = classNames('alert-description-context', { [`alert-description-context-showIcon`]: showIcon, [`alert-description-context-notShowIcon`]: !showIcon })
  const defaultClasses = classNames('alert-default-context', { [`alert-default-context-showIcon`]: showIcon, [`alert-default-context-notShowIcon`]: !showIcon })
  const iconClasses = classNames('alert-icon', { [`alert-icon-${type}`]: type, [`alert-icon-description`]: description })
  const closeShow = closable || closeText

  return (
    <>
      {show && <div className={classes}>
        {/* 默认样式 */}
        {showIcon && <div className={iconClasses}>
          <StatusIcon icon={type}  type={description?'lg':'sm'} status={description?IconStatus.OutLined:IconStatus.Filled}/>
        </div>}
        {!description && <div className={defaultClasses}>
          <span>
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className="alert-close-btn" onClick={() => { setShow(false) }}>
            {closeText ? closeText :<CloseOutlined style={{'fontSize':'.8rem'}}/>}
          </button>}
        </div>}
        {/* 包含description的样式 */}
        {description && <div className={descriptionClasses}>
          <span className="alert-description-context-message">
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className="alert-close-btn" onClick={() => { setShow(false) }}>
            {closeText ? closeText : <CloseOutlined style={{'fontSize':'.8rem'}}/>}
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