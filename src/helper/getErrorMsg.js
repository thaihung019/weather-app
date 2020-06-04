function getErrorMsg(error) {
  if (!error) return;
  return JSON.parse(error.message);
}

export default getErrorMsg;
