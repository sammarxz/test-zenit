import React, { useState } from 'react'

import { Checkbox } from './checkbox'

interface TaskProps {
  className?: string;
  checked?: boolean;
  title: string;
}

const Task: React.FC<TaskProps> = ({ className, title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox className={className}>
        <input type="checkbox" checked={checked} />
        <label onClick={() => setChecked(!checked)}>
          <span></span>
          <ins>{title}</ins>
        </label>
      </Checkbox>
    </>
  )
}

export { Task }