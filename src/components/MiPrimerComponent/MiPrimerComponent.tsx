import { FC } from "react"

interface IPropsMiPrimerComponen{
    text: string
    color: string
    fontSize?: number
}
export const MiPrimerComponent: FC<IPropsMiPrimerComponen> = ({
  text, 
  color, 
  fontSize
}) => {
  return(
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}><p>{text}</p></div>
  ) 
}