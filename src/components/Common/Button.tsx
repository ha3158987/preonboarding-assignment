import React from 'react'

import styled from '@emotion/styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType: 'add' | 'delete';
}

const Button = ({ btnType, ...props }: ButtonProps) => {
    return (
        <>
        { btnType === 'add' && <StyledButton {...props}>{'Add'}</StyledButton>}
        { btnType === 'delete' && <StyledButton {...props}>{'Delete'}</StyledButton>}
        </>
    )
}

const StyledButton = styled.button`
    border: 1px solid black;
`

export default Button;