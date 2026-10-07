const estErreurDeFormat = ({ validity }) =>
  Boolean(validity?.typeMismatch || validity?.patternMismatch || validity?.badInput);

const messageErreur = formElement => {
  const formatAttendu = formElement.dataset?.formatAttendu;
  if (formatAttendu && formElement.validationMessage && estErreurDeFormat(formElement)) {
    return `${formElement.validationMessage} Format attendu : ${formatAttendu}`;
  }
  return formElement.validationMessage;
};

export const checkValidity = (ref, setErrors) => {
  const formData = new FormData(ref.current);
  const keys = Array.from(formData.keys());
  const formElements = keys.map(key => document.getElementById(key)).filter(key => key !== null);
  const errors = formElements.map(formElement => ({
    [formElement.id]: messageErreur(formElement),
  }));
  setErrors(Object.assign({}, ...errors));
};
