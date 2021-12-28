import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'
import { Button } from 'semantic-ui-react'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <Button children={restProps.children}
                disabled={restProps.children === "disabled" ? true : false}
                color={red ? "red" : "grey"}
                basic
                onClick={restProps.onClick}
        ></Button>

)
}
/*<button
    className={finalClassName}
    {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
></button>*/

export default SuperButton
