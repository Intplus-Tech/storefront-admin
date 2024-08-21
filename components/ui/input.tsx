import { cn } from '@/app/utils/helper';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  isRequired?: boolean;
  id?: string;
  name?: string;
  value?: string;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  touched?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      labelClass,
      isRequired,
      id,
      name,
      value,
      handleBlur,
      handleChange,
      touched,
      errorMessage,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className={cn('block relative text-xs', labelClass)}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          onBlur={handleBlur}
          onChange={handleChange}
          className={cn(
            'flex h-10 w-full ring-1  ring-offset-0 border-none  focus-visible:ring-offset-0 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <span
          className={cn('text-xs text-red-500 hidden', errorMessage && 'block')}
        >
          {errorMessage}
        </span>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
