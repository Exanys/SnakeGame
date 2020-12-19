let player = {
  name: localStorage.getItem("name"),
  scores: [],
  highestScore: function () {
    let highest = 0;
    scores.forEach((value) => {
      if (value > highest) highest = value;
    });
    return value;
  },
};
