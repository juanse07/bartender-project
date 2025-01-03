
import { Button, ButtonProps, Spinner } from 'react-bootstrap';
import style from './LoadingButton.module.scss';
import React from 'react';

interface LoadingButtonProps 
{
    isloading: boolean;
    children: React.ReactNode;
    
}

export default function LoadingButton({ isloading, children, ...props}: LoadingButtonProps & ButtonProps) {
  return (
    <Button  {...props} disabled={isloading || props.disabled}>
        {isloading &&
        <>
        <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
           
        />
        <span className="visually-hidden">Loading...</span>
        {" "}
        </>
    }
      {
     children
       }
      </Button>
  );
}