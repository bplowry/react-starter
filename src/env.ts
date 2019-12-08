const { REACT_APP_EXAMPLE, REACT_APP_SOME_NUMBER } = process.env;

export const example = REACT_APP_EXAMPLE;
export const someNumber = Number(REACT_APP_SOME_NUMBER);

export default {
  example,
  someNumber
};
