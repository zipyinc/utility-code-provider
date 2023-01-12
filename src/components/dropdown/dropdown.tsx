import React, { useState, useRef, useEffect } from "react";
import DropdownIcon from "../images/dropdown.svg";
import { Language } from "../interface/language.interface";
import {
  InputContainer,
  Input,
  DropdownContainer,
  DropdownItem,
  ErrorMessage,
} from "./dropdown.styles";

interface DropdownProps {
  placeholder?: string;
  data: any[];
  dataKey?: any;
  onChange: (name: string) => void;
  error: string;
  value: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  noDataText?: string;
  showScroll?: boolean;
}

function Dropdown(props: DropdownProps) {
  const [value, setValue] = useState<string>();
  const [dropdownWidth, setDropdownWidth] = useState<any>();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const dropdownContainerRef = useRef<HTMLUListElement>(null);
  const dropdownItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setDropdownWidth(DivRef.current?.offsetWidth);
    setValue(props.value?.length > 0 ? props.value : props.placeholder);
    return () => {
      setDropdownWidth(null);
      setValue("");
      window.removeEventListener("resize", onResize);
    };
  }, [props]);

  const onResize = () => {
    setDropdownWidth(DivRef.current?.offsetWidth);
  };

  window.addEventListener("resize", onResize);

  const handleClick = (value: string) => {
    props.onChange(value);
    setOpen(false);
  };

  const handleBlur = (e: any) => {
    setTimeout(() => {
      setOpen(false);
      setActive(-1);
    }, 300);
  };
  const DivRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  return (
    <div onBlur={handleBlur} style={{ display: "block", float: "right" }}>
      <InputContainer
        ref={DivRef}
        onClick={handleDropdownClick}
        tabIndex={1}
        error={props.error.length > 0}
        style={props.style}
      >
        <Input selected={value !== props.placeholder}>{value}</Input>
        <img src={DropdownIcon} alt="dropdown" />
      </InputContainer>
      {open && (
        <DropdownContainer
          style={props?.containerStyle}
          showScroll={props.showScroll}
          width={dropdownWidth}
          open={open}
          ref={dropdownContainerRef}
        >
          {props.data.map((i, index) => (
            <DropdownItem
              open={open}
              onClick={(e) => handleClick(i)}
              active={active === index}
              ref={dropdownItemRef}
              key={index}
              tabIndex={1}
            >
              {typeof i === "string" ? i : i?.[props?.dataKey]}
            </DropdownItem>
          ))}
          {props.noDataText && props.data.length === 0 && (
            <DropdownItem
              noDataText
              open={open}
              onClick={() => null}
              active={false}
              ref={dropdownItemRef}
              tabIndex={1}
            >
              {props.noDataText}
            </DropdownItem>
          )}
        </DropdownContainer>
      )}
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </div>
  );
}

export default Dropdown;
