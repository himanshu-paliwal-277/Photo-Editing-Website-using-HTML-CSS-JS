// This script for given edting functionality like- rotate, flip, Round, Color to basics section

let rotate_button = document.querySelector("#basics .box:nth-child(3)");
let flip_button = document.querySelector("#basics .box:nth-child(4)");
let round_button = document.querySelector("#basics .box:nth-child(5)");
let color_button = document.querySelector("#basics .box:nth-child(6)");

let rotate_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(1)"
);
let flip_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(2)"
);
let round_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(3)"
);
let color_edit_box = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(4)"
);

rotate_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "#01c7f81a";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "flex";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "none";
});
flip_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "#01c7f81a";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "flex";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "none";
});
round_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "#01c7f81a";
  color_button.style.backgroundColor = "transparent";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "flex";
  color_edit_box.style.display = "none";
});
color_button.addEventListener("click", () => {
  rotate_button.style.backgroundColor = "transparent";
  flip_button.style.backgroundColor = "transparent";
  round_button.style.backgroundColor = "transparent";
  color_button.style.backgroundColor = "#01c7f81a";
  rotate_edit_box.style.display = "none";
  flip_edit_box.style.display = "none";
  round_edit_box.style.display = "none";
  color_edit_box.style.display = "flex";
});

// All Basics section input range:
let rotate_range_input = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(1) input"
);
let flip_X = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(2) #flip_img_1"
);
let flip_Y = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(2) #flip_img_2"
);
let round_range_input = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(3) input"
);
let color_input = document.querySelector(
  ".basics_edit_boxes_seciton .edit_box:nth-child(4) input"
);

// default value of filters:
let rotate_value = 0; // 0 is default value | Range 0 - 360
let round_value = 0; // 0 is default value | Range 0 - 100
let color_value = `transparent`; // 'transparent' is default value | Range - color
let flip_in_x_axis = 1;
let flip_in_y_axis = 1;

// Rotate input range :
rotate_range_input.addEventListener("input", function () {
  rotate_value = this.value;
  document.querySelector("#rotate_value").innerHTML = `${rotate_value}deg`;
  image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
});

// Flip in X-axis :
flip_X.addEventListener("click", function () {
  if (flip_in_x_axis == 1) {
    flip_in_x_axis = -1;
    image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
  } else {
    flip_in_x_axis = 1;
    image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
  }
});

// Flip in Y-axis :
flip_Y.addEventListener("click", function () {
  if (flip_in_y_axis == 1) {
    flip_in_y_axis = -1;
    image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
  } else {
    flip_in_y_axis = 1;
    image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
  }
});

// Round input range :
round_range_input.addEventListener("input", function () {
  round_value = this.value;
  document.querySelector("#round_value").innerHTML = `${round_value}%`;
  image_src.style.borderRadius = `${round_value}px`;
});

// Color input :
image_src.style.backgroundColor = `${color_value}`;
color_input.addEventListener("input", function () {
  color_value = this.value;
  document.querySelector("#color_value").innerHTML = `${color_value}`;
  image_src.style.backgroundColor = `${color_value}`;
});

// zoom in / zoom out
var scale = 1;
let zoom_input = document.getElementById("zoomRange");
zoom_input.addEventListener("input", function () {
  scale = this.value;
  image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
});
