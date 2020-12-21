let player = {
  name: localStorage.getItem("name"),
  scores: [],
  highestScore: function () {
    let highest = 0;
    this.scores.forEach((value) => {
      if (value > highest) highest = value;
    });
    return highest;
  },
};
