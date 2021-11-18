import { FC, ReactNode } from 'react';

export type FormDialogProps = {
  component : ReactNode;
}

const FormDialogContainer: FC<FormDialogProps> = (props) => {

  const { component } = props;
  
 return (
    <div>
      { component }
    </div>
  );
}

export default FormDialogContainer;