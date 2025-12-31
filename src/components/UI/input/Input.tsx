import React, { useImperativeHandle, useRef } from "react";

interface Props {
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
  rightIcon?: React.ReactNode;
  className?: string; // additional wrapper classes
}

interface IImperativeHandler {
  focus: () => void;
}

const Input = React.forwardRef<IImperativeHandler, Props>((props: any, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  return (
    <div className={`form-group ${props.className ?? ""}`}>
      {props.label && (
        <label htmlFor={props.id} className="form-label float">
          {props.label} {props.required && "*"}
        </label>
      )}

      {/* Right-icon wrapper for things like password eye */}
      <div className={props.rightIcon ? "password" : ""}>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          disabled={props.disabled}
          required={props.required}
          ref={inputRef}
          className="form-control"
        />

        {props.rightIcon && (
          <span className="password-icon" style={{ cursor: "pointer" }}>
            {props.rightIcon}
          </span>
        )}
      </div>

      {props.errorMsg && <small className="text-danger">{props.errorMsg}</small>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
