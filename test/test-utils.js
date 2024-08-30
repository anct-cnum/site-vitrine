export const textMatcher = wording => (_, element) => {
  return element?.textContent === wording;
};

export const dateDujour = () => new Date().toISOString().slice(0, 10);
