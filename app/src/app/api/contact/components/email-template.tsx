import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName : string;
  email : string;
  message : string;
  phoneNumber: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  message,
  phoneNumber,
}) => (
  <div>
    <h1>firstName : {firstName}</h1>
    <h1>lastName : {lastName}</h1>
    <h1>email : {email}</h1>
    <h1>message : {message}</h1>
    <h1>phoneNumber : {phoneNumber}</h1>
  </div>
);
