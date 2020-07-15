import React, { useState } from 'react'
import { CloseCircleFilled, CloseCircleOutlined, ExclamationCircleFilled, ExclamationCircleOutlined, CheckCircleFilled, CheckCircleOutlined, InfoCircleOutlined, InfoCircleFilled } from '@ant-design/icons';
import classNames from 'classnames'

export enum IconStatus {
  Filled = 'filled',  // 实底风格
  CircleTwoTone = 'circleTwoTone', //双色风格
  OutLined = 'outLined', // 线体风格

}

interface StatusIconProps {
  icon: string
  type: string  // lg sm
  status: IconStatus
  color?: string
  size?: string
}

const StatusIcon: React.FC<StatusIconProps> = (props) => {
  const { icon, type, status } = props
  const classes = classNames('status-icon', { [`status-icon-${icon}`]: icon }, { [`status-icon-${type}`]: type })

  return (
    <>
      {/* 错误 提示图标 实底 叉号 */}
      {(icon === 'error' && status === 'filled') && <CloseCircleFilled className={classes} />}
      {/* 错误 提示图标 线体 叉号 */}
      {(icon === 'error' && status === 'outLined') && <CloseCircleOutlined className={classes} />}
      
      {/* 普通信息 提示图标 实底 叉号 */}
      {(icon === 'info' && status === 'filled') && <InfoCircleFilled className={classes} />}
      {/* 普通信息 提示图标 线体 叉号 */}
      {(icon === 'info' && status === 'outLined') && <InfoCircleOutlined className={classes} />}
      
      {/* 成功 提示图标 实底 叉号 */}
      {(icon === 'success' && status === 'filled') && <CheckCircleFilled className={classes} />}
      {/* 成功 提示图标 线体 叉号 */}
      {(icon === 'success' && status === 'outLined') && <CheckCircleOutlined className={classes} />}
      
      {/* 警告 提示图标 实底 叉号 */}
      {(icon === 'warning' && status === 'filled') && <ExclamationCircleFilled className={classes} />}
      {/* 警告 提示图标 线体 叉号 */}
      {(icon === 'warning' && status === 'outLined') && <ExclamationCircleOutlined className={classes} />}
    </>
  )
}
export default StatusIcon;