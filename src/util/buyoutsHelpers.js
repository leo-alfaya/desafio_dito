const formatCustomData = (obj) => {
  const formatedObject = {};
    
  obj.map((prop) => {
    formatedObject[prop.key] = prop.value;
    return null;
  });

  return formatedObject;
};

const formatEvent = (event) => {
  const buyout = { ...event, ...formatCustomData(event.custom_data) };
  delete buyout.custom_data;
  return buyout;
};

const organizeEvents = (events) => {
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

const sortByDate = (arr) => {
    return arr.sort((a, b) => {
        return new Date(a.timestamp) - new Date(b.timestamp);
    });
}

export const prepareBuyouts = (events) => {
  const [buyouts, products] = organizeEvents(events);

  buyouts.map((buyout) => {
    const buy = buyout;

    buy.products = products.filter(product => product.transaction_id === buyout.transaction_id);

    return buy;
  });

  return sortByDate(buyouts);
};
