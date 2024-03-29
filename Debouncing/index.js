let counter = 0;

const getData = () => {
  console.log("data fetching", counter++);
};

const doMagic = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;

    clearTimeout(timer);

    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};

const betterFunction = doMagic(getData, 300);
