export const textMatcher = wording => (_, element) => {
  return element?.textContent === wording;
};
