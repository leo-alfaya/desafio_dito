export default (obj) => {
  const formated_object = {};

  obj.map((prop) => {
    formated_object[prop.key] = prop.value;
  });

  return formated_object;
};
