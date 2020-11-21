function filterByType() {
  const args = Array.from(arguments);
  const typeElem = args[0];

  let argsFilter = args.filter(function(v) {
    if (typeof typeElem === 'string') {
      return typeof(v) == typeElem;
    }
    else if (typeof typeElem === 'number') {
      return typeof(v) == typeElem
    }
    else if (typeof typeElem === 'boolean') {
      return typeof(v) == typeElem
    }
  });


  console.log(argsFilter);
}

filterByType('string', 10, 20, 'a', 'b', true, false);
filterByType('number', 10, 20, 'a', 'b', true, false);
filterByType('boolean', 10, 20, 'a', 'b', true, false);
