export const urlWithCurrent = (path, options) => {
  for (const key in options) {
    const regExp = new RegExp(`:${key}`, "gi");
    path = path.replace(regExp, options[key]);
  }
  return path;
};
