import React,{useState} from 'react'
import { FiSun as IconSun } from "react-icons/fi";
import { FiMoon as IconMoon } from "react-icons/fi";
export const Controls:React.FC = () => {
  const [theme,setTheme]=useState<boolean | undefined>(true)
  const handleTheme=()=>{
    setTheme(!theme)
  }
  return (
    <div className='controls'>
      <button className="controls__theme" onClick={handleTheme}>
        {
          theme ?
          <IconSun/>
          :
          <IconMoon/>
        }
      </button>
      <select className="controls__idiom" name='idiom' id='idiom'>
        <option value="EN">EN</option>
        <option value="ES">ES</option>
      </select>
    </div>
  )
}
