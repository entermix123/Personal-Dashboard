/* eslint-disable react/prop-types */
import { Alert } from "@material-tailwind/react";
 
export function AlertGost({ message }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert variant="ghost">
        <span>{message}</span>
      </Alert>
    </div>
  );
}