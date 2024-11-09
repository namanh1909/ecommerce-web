"use client"

import * as React from "react"

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
      <span className="block sm:inline text-red-500 text-xs">{message}</span>
  );
};

export default ErrorMessage;
