import React from 'react'

import styled from '@emotion/styled';

interface InputProps {
    value: string;
    setInputValue: (value: string) => void;
}

const Input = ({ value, setInputValue }: InputProps) => {
   
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
   
    return (
        <StyledInput value={value} onChange={handleInputChange}/>
    )
}

const StyledInput = styled.input`
    width: 250px;
`

export default Input