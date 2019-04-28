export const formatCustomData = (obj) => {
  const formatedObject = {};

  obj.map((prop) => {
    formatedObject[prop.key] = prop.value;
    return null;
  });

  return formatedObject;
};

export const formatEvent = (event) => {
  const buyout = { ...event, ...formatCustomData(event.custom_data) };
  delete buyout.custom_data;
  return buyout;
};

export const organizeEvents = (events) => {
  const buyouts = [];
  const products = [];

  events.map((event) => {
    if (event.event === 'comprou') {
      buyouts.push(formatEvent(event));
    } else {
      products.push(formatEvent(event));
    }

    return null;
  });

  return [buyouts, products];
};

export const prepareBuyouts = (events) => {
  const [buyouts, products] = organizeEvents(events);

  buyouts.map((buyout) => {
    const buy = buyout;

    buy.products = products.filter(product => product.transaction_id === buyout.transaction_id);

    return buy;
  });

  return buyouts;
};
