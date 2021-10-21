import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({

    username: Yup.string()
 
      .min(4, 'Too Short!')
 
      .max(20, 'Too Long!')
 
      .required('Required'),
 
    password: Yup.string()
 
      .min(4, 'Too Short!')
 
      .max(20, 'Too Long!')
 
      .required('Required'),

  });

  export default ValidationSchema;