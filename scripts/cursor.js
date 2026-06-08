window.addEventListener("load", (event) => {
new cursoreffects.fairyDustCursor({
  colors: ["rgb(0, 0, 255)"],
  fairySymbol: "☆",
});

// new cursoreffects.characterCursor({
//   element: document.querySelector("#character"),
//   characters: ["★"],
//   font: "15px serif",
//   colors: ["rgba(0, 0, 255, 0.55)"],
//   characterLifeSpanFunction: function () {
//     return Math.floor(Math.random() * 60 + 80);
//   },
//   initialCharacterVelocityFunction: function () {
//     return {
//       x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
//       y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
//     };
//   },
//   characterVelocityChangeFunctions: {
//     x_func: function (age, lifeSpan) {
//       return (Math.random() < 0.5 ? -1 : 1) / 30;
//     },
//     y_func: function (age, lifeSpan) {
//       return (Math.random() < 0.5 ? -1 : 1) / 15;
//     },
//   },
//   characterScalingFunction: function (age, lifeSpan) {
//     let lifeLeft = lifeSpan - age;
//     return Math.max((lifeLeft / lifeSpan) * 2, 0);
//   },
//   characterNewRotationDegreesFunction: function (age, lifeSpan) {
//     let lifeLeft = lifeSpan - age;
//     console.log(age, lifeSpan);
//     return lifeLeft / 5;
//   },
// });
});

