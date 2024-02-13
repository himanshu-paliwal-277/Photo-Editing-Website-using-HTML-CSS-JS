// This script for given edting functionality like- brightness, constrast, invert, blur to filter section
let brightness_button = document.querySelector("#filter .box:nth-child(2)");
let contrast_button = document.querySelector("#filter .box:nth-child(3)");
let saturate_button = document.querySelector("#filter .box:nth-child(4)");
let invert_button = document.querySelector("#filter .box:nth-child(5)");
let blur_button = document.querySelector("#filter .box:nth-child(6)");

let brightness_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(1)"
);
let contrast_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(2)"
);
let saturate_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(3)"
);
let invert_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(4)"
);
let blur_edit_box = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(5)"
);

brightness_button.addEventListener("click", () => {
  brightness_button.style.backgroundColor = "#01c7f81a";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "flex";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
});
contrast_button.addEventListener("click", () => {
  contrast_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "flex";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
});
saturate_button.addEventListener("click", () => {
  saturate_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "flex";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "none";
});
invert_button.addEventListener("click", () => {
  invert_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  blur_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "flex";
  blur_edit_box.style.display = "none";
});
blur_button.addEventListener("click", () => {
  blur_button.style.backgroundColor = "#01c7f81a";
  brightness_button.style.backgroundColor = "transparent";
  contrast_button.style.backgroundColor = "transparent";
  saturate_button.style.backgroundColor = "transparent";
  invert_button.style.backgroundColor = "transparent";
  brightness_edit_box.style.display = "none";
  contrast_edit_box.style.display = "none";
  saturate_edit_box.style.display = "none";
  invert_edit_box.style.display = "none";
  blur_edit_box.style.display = "flex";
});

// All Filter section input range:
let brightness_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(1) input"
);
let contrast_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(2) input"
);
let saturate_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(3) input"
);
let invert_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(4) input"
);
let blur_range_input = document.querySelector(
  ".Filter_Edit_boxes_section .edit_box:nth-child(5) input"
);

// default value of filters:
let brightness_value = 100; // 100 is default value | Range 0 - 200
let contrast_value = 100; // 100 is default value | Range 0 - 200
let saturate_value = 100; // 100 is default value | Range 0 - 200
let invert_value = 0; // 0 is default value | Range 0 - 100
let blur_value = 0; // 0 is default value | Range 0 - 100

// Brightness input range :
brightness_range_input.addEventListener("input", function () {
  brightness_value = this.value;
  document.querySelector("#brightnss_value").innerHTML = `${brightness_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Contrast input range :
contrast_range_input.addEventListener("input", function () {
  contrast_value = this.value;
  document.querySelector("#contrast_value").innerHTML = `${contrast_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Saturate input range :
saturate_range_input.addEventListener("input", function () {
  saturate_value = this.value;
  document.querySelector("#saturate_value").innerHTML = `${saturate_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Invert input range :
invert_range_input.addEventListener("input", function () {
  invert_value = this.value;
  document.querySelector("#invert_value").innerHTML = `${invert_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});

// Blur input range :
blur_range_input.addEventListener("input", function () {
  blur_value = this.value;
  document.querySelector("#blur_value").innerHTML = `${blur_value}%`;
  image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
});