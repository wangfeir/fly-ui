import React, { useState } from 'react'
import classNames from 'classnames'
import { CloseOutlined } from '@ant-design/icons';
/**
 * 用来表示状态的icon组件
 * type: success｜info｜warning｜error
 */
import StatusIcon, { IconStatus } from '../StatusIcon/statusIcon'
export enum AlertType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error",
}


interface BaseAlertProps {
  type?: string,
  message: string,
  closable?: boolean,
  closeText?: string,
  description?: string   // 信息详情
  showIcon?: boolean,

}
type AlertDivProps = BaseAlertProps & React.AllHTMLAttributes<HTMLElement>

export type AlertProps = Partial<BaseAlertProps&AlertDivProps>

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type = 'info',
    message,
    closable,
    closeText,
    description,
    showIcon,
    ...restProps

  } = props
  const [show, setShow] = useState(true)
  const classes = classNames('alert',
    { 
      [`alert-${type}`]: type, 
      [`alert-${closable}`]: closable, 
      [`alert-description`]: description,
      [`alert-icon`]: showIcon,
      [`alert-icon-not`]: !showIcon,
      [`alert-close`]: closable,
      [`alert-close-text`]:closeText
    })

  const closeShow = closable || closeText

  return (
    <>
      {show && <div className={classes} {...restProps}>
        {/* 默认样式 */}
        {showIcon && <div className='alert-icon-box'>
          <StatusIcon icon={type} type={description ? 'lg' : 'sm'} status={description ? IconStatus.OutLined : IconStatus.Filled} />
        </div>}
        {!description && <div className="alert-context">
          <span>
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className='close-btn' onClick={() => { setShow(false) }}>
            {closeText ? closeText : <CloseOutlined style={{ 'fontSize': '.8rem' }} />}
          </button>}
        </div>}
        {/* 包含description的样式 */}
        {description && <div className="alert-context">
          <span className="alert-message">
            {message}
          </span>
          {/* 关闭按钮 */}
          {closeShow && <button className='close-btn' onClick={() => { setShow(false) }}>
            {closeText ? closeText : <CloseOutlined style={{ 'fontSize': '.8rem' }} />}
          </button>}
          <p className="alert-description">
            {description}
          </p>
        </div>}
      </div>}
    </>
  )
}

export default Alert;