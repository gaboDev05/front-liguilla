/** Este archivo contiene las validaciones de objetos */


export const username_validation = {
    name: 'username',
    label: 'Username',
    type: 'text',
    valueField: '',
    multiType : false,
    placeholder: 'Write your username ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
    state: () => {},
}
  
export const desc_validation = {
    name: 'description',
    label: 'description',
    valueField: '',
    multiline: true,
    placeholder: 'write description ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 200,
        message: '200 characters max',
      },
    },
}
  
export const password_validation = {
    name: 'password',
    label: 'Password',
    type: 'password',
    valueField: '',
    multiType : true,
    placeholder: 'Type password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 8,
        message: 'min 8 characters',
      },
    },
}
  
export const num_validation = {
    name: 'num',
    label: 'number',
    type: 'number',
    valueField: '',
    multiType : false,
    placeholder: 'write a random number',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
}
  
export const email_validation = {
    name: 'email',
    label: 'Email address',
    type: 'email',
    valueField: '',
    multiType : false,
    placeholder: 'Write a random email address',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid',
      },
    },
    state: () => {},
}