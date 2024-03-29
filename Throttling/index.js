const expensive = () => {
  console.log("resize expensive");
};

const throttle = (func, limit) => {
  let flag = true;

  return function () {
    let context = this,
      params = arguments;

    if (flag) {
      func.apply(context, params);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExperience = throttle(expensive, 1000);
