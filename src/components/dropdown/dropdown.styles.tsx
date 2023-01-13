import styled from 'styled-components'

interface InputContainerProps {
    error?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
    background-color: #34373e;
    // border-radius: 4px;
    // height: 40px;
    width: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 9px;
    cursor: pointer;
    &:focus {
        outline: none !important;
    };
    border: ${props => props.error ? '1px solid #DA5B70' : ''}
`
interface InputProps {
    selected: boolean
}

export const Input = styled.div<InputProps>`
//    max-width: 100%;
   color: ${props => props.selected ? '#FFFFFF' : '#ACB0C1'};
//    font-family: Lato;
   font-size: 15px;
   font-weight: 500;
   letter-spacing: 0;
   line-height: 35px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
   
`

interface DropdownContainerProps {
    width?: number;
    open: boolean;
    showScroll?: boolean
}
export const DropdownContainer = styled.ul<DropdownContainerProps>`
    display: ${props => !props.open ? 'none': ''};
    background-color: #4A4F65;
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.23);
    max-height: 247px;
    width: ${props => props.width ? props.width + 'px' : 'max-content'};
    position: absolute;
    margin-top: 3px;
    list-style: none;
    padding: 0;
    overflow: auto;
    &::-webkit-scrollbar {
        display: ${props => props.showScroll ? "initial" : "none"};
        width: ${props => props.showScroll ? "5px" : 0};
        padding: ${props => props.showScroll ? "10px" : 0};
    }

    // height: ${props => props.open ? '100%' : 0};
    -ms-overflow-style: none;
    scrollbar-width: none;
    transition: all 0.3s;
    z-index: 99;
`
interface DropdownItemProps {
    active?: boolean;
    open: boolean;
    noDataText?: boolean
}
export const DropdownItem = styled.li<DropdownItemProps>`
    padding: 10px;
    display: flex;
    align-items: center;
    color: ${props => props.noDataText ? '#ACB0C1' : '#FFFFFF'};
    // font-family: Lato;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 20px;
    cursor: pointer;
    background: ${props => props.active ? '#33394C' : ''};
    &:hover {
        background: ${props => props.noDataText ? 'initials' : '#33394C'};
    };
    &:focus {
        outline: none !important;
    };
    opacity: ${props => props.open ? 1 : 0};
    transition: opacity 1s;
`

export const ErrorMessage = styled.div`
    color: #DA5B70;
    // font-family: Lato;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 16px;
    margin-top: 8px;
`