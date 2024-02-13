let filter_1 = document.querySelector("#filter_1");
let filter_2 = document.querySelector("#filter_2");
let filter_3 = document.querySelector("#filter_3");
let filter_4 = document.querySelector("#filter_4");

let Filter_Edit_boxes_section = document.querySelector(
  ".Filter_Edit_boxes_section"
);

let basics_section = document.querySelector("#basics");
let text_section = document.querySelector("#text");
let drawing_section = document.querySelector("#drawing");
let filter_section = document.querySelector("#filter");

let choose_image_button = document.querySelector(".import_image_btn");
let choose_input = document.querySelector(".import_image_btn input");
let image_src = document.querySelector(".image_src img"); //Input image

image_src.style.backgroundColor = "red";
choose_image_button.addEventListener("click", () => choose_input.click());

choose_input.addEventListener("change", () => {
  let file = choose_input.files[0];
  if (!file) return;
  choose_image_button.style.display = "none";
  image_src.src = URL.createObjectURL(file);
});

// -----------------------------------------------
// zoom in / zoom out feature
// -----------------------------------------------

// ---------------------------------------------------
// Edit basics section
// ---------------------------------------------------

// ---------------------------------------------------
// Edit filter section
// ---------------------------------------------------

filter_1.style.backgroundColor = "red";
filter_1.addEventListener("click", () => {
  filter_1.style.backgroundColor = "red";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "transparent";
  basics_section.style.display = "flex";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_2.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "red";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "transparent";
  text_section.style.display = "flex";
  basics_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_3.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "red";
  filter_4.style.backgroundColor = "transparent";
  drawing_section.style.display = "flex";
  basics_section.style.display = "none";
  text_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "none";
});
filter_4.addEventListener("click", () => {
  filter_1.style.backgroundColor = "transparent";
  filter_2.style.backgroundColor = "transparent";
  filter_3.style.backgroundColor = "transparent";
  filter_4.style.backgroundColor = "red";
  filter_section.style.display = "flex";
  basics_section.style.display = "none";
  text_section.style.display = "none";
  drawing_section.style.display = "none";
  Filter_Edit_boxes_section.style.display = "block";
});

// Reset and Save button:
let reset_button = document.querySelector(
  ".reset_and_save_btn > button:nth-child(1)"
);
let save_button = document.querySelector(
  ".reset_and_save_btn > button:nth-child(2)"
);

// If user click reset button:
reset_button.addEventListener("click", () => {
  if (confirm("Do you really want to reset filters")) {
    // Basics defalt value
    rotate_value = 0;
    round_value = 0;
    color_value = `transparent`;
    flip_in_x_axis = 1;
    flip_in_y_axis = 1;
    rotate_range_input.value = 0;
    round_range_input.value = 0;
    document.querySelector("#rotate_value").innerHTML = `${rotate_value}deg`;
    document.querySelector("#round_value").innerHTML = `${round_value}%`;
    document.querySelector("#color_value").innerHTML = `${color_value}`;
    image_src.style.borderRadius = `${round_value}px`;
    image_src.style.backgroundColor = `${color_value}`;
    image_src.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;

    // Filter default value
    brightness_value = 100;
    contrast_value = 100;
    saturate_value = 100;
    invert_value = 0;
    blur_value = 0;
    brightness_range_input.value = 100;
    contrast_range_input.value = 100;
    saturate_range_input.value = 100;
    invert_range_input.value = 0;
    blur_range_input.value = 0;
    document.querySelector(
      "#brightnss_value"
    ).innerHTML = `${brightness_value}%`;
    document.querySelector("#contrast_value").innerHTML = `${contrast_value}%`;
    document.querySelector("#saturate_value").innerHTML = `${saturate_value}%`;
    document.querySelector("#invert_value").innerHTML = `${invert_value}%`;
    document.querySelector("#blur_value").innerHTML = `${blur_value}%`;
    image_src.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
  }
});

save_button.addEventListener("click", function () {
  if (confirm("Do you want to download an image")) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = image_src.naturalWidth;
    canvas.height = image_src.naturalHeight;
    ctx.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturate_value}%) invert(${invert_value}%) blur(${blur_value}px)`;
    // ctx.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_in_x_axis}) scaleY(${flip_in_y_axis})`;
    // ----------------------
    // ctx.rotate(rotate_value * Math.PI / 180);
    // ctx.drawImage(image_src, -image_src.naturalWidth / 2, -image_src.naturalHeight / 2, image_src.naturalWidth, image_src.naturalHeight);
    // ----------------------
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.drawImage(
      image_src,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
  }
});
