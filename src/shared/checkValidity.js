export const checkValidity = (ref, setErrors) => {
  const formData = new FormData(ref.current);
  const keys = Array.from(formData.keys());
  const formElements = keys.map(key => document.getElementById(key)).filter(key => key !== null);
  const errors = formElements.map(formElement => ({
    [formElement.id]: formElement.validationMessage,
  }));
  setErrors(Object.assign({}, ...errors));
};
