import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IoMdClose } from 'react-icons/io';
import { useField } from '@unform/core';

import { Container, Error, ErrorMessage } from '../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  authentication_failed?: boolean;
}

const Input: React.FC<InputProps> = ({name, containerStyle, authentication_failed, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        style={containerStyle}
        isErrored={!!error || authentication_failed}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <IoMdClose color="var(--pink)" size={20} />
          </Error>
        )}
      </Container>

      {error && (
        <ErrorMessage>
          {error};
        </ErrorMessage>
      )}
    </>
  );
};

export default Input;
