let slide_button = document.getElementById("slide_button");
let slide_button_svg = document.querySelector("#slide_button_svg");
let edit_section = document.getElementById("edit_section");
let edit_section_inside_div = document.getElementById(
  "edit_section_inside_div"
);
let all_selected_edit_box = document.querySelectorAll(".all_selected_edit_box");
let all_editing_section = document.querySelectorAll(".all_editing_section");
let import_image_div = document.getElementById("import_image_div");
let import_image_btn = document.getElementById("import_image_btn");
let open_image_button = document.getElementById("open_image_button");
let file_input = document.getElementById("file_input");
let image = document.getElementById("image");

// All basic adjust inputs
let brightness_input = document.getElementById("brightness_input");
let contrast_input = document.getElementById("contrast_input");
let saturation_input = document.getElementById("saturation_input");
let blur_input = document.getElementById("blur_input");
let invert_button = document.getElementById("invert_button");

// reset adjustment button
let reset_adjustment_button = document.getElementById(
  "reset_adjustment_button"
);
// reset rotate, flip and resize button
let reset_rotate_flip_resize_button = document.getElementById(
  "reset_rotate_flip_resize_button"
);

// rotate button & flip button
let rotate_right_btn = document.getElementById("rotate_right_btn");
let rotate_left_btn = document.getElementById("rotate_left_btn");
let flip_horizontal = document.getElementById("flip_horizontal");
let flip_vertical = document.getElementById("flip_vertical");

// rotate_div & flip_div
let rotate_div = document.getElementById("rotate_div");
let flip_div = document.getElementById("flip_div");
let resize_div = document.getElementById("resize_div");

// Download Button
let download_button = document.getElementById("download_button");

// All filters of filter section
const filters = [
  { name: "Normal", value: "", filter_value: "" },
  { name: "Grayscale", value: "100", filter_value: "grayscale(100%)" },
  { name: "Sepia", value: "100", filter_value: "sepia(100%)" },
  { name: "Brightness", value: "150", filter_value: "brightness(150%)" },
  { name: "Contrast", value: "200", filter_value: "contrast(200%)" },
  { name: "Invert", value: "1", filter_value: "invert(100%)" },
  { name: "Saturate", value: "200", filter_value: "saturate(200%)" },
  { name: "Blur", value: "3", filter_value: "blur(3px)" },
];

// default value
let brightness_value = 100;
let contrast_value = 100;
let saturation_value = 100;
let blur_value = 0;
let invert_value = 0;
let grayscale_value = 0;
let sepia_value = 0;
let rotate_value = 0;
let flip_horizontal_value = 1;
let flip_vertical_value = 1;
let image_width;
let image_heigth;
let default_image_width;
let default_image_height;
let border_width = 0;
let border_color = "transparent";
let border_radius = 0;

slide_button.addEventListener("click", () => {
  if (slide_button_svg.classList.contains("rotate-180")) {
    slide_button_svg.classList.remove("rotate-180");
    edit_section.style.width = "350px";
    setTimeout(() => {
      edit_section_inside_div.classList.remove("hidden");
    }, 500);
  } else {
    slide_button_svg.classList.add("rotate-180");
    edit_section_inside_div.classList.add("hidden");
    edit_section.style.width = "0px";
  }
  if(!background_remove_section.classList.contains("hidden")){
    background_remove_section.classList.add("hidden");
  }
});

all_selected_edit_box[0].classList.add("ring-2");
all_selected_edit_box[0].classList.add("ring-offset-0");
all_selected_edit_box[0].classList.add("ring-blue-500");

all_selected_edit_box.forEach((selected_edit_box, index) => {
  selected_edit_box.addEventListener("click", () => {
    selected_edit_box.classList.add("ring-2");
    selected_edit_box.classList.add("ring-offset-0");
    selected_edit_box.classList.add("ring-blue-500");

    switch (index) {
      case 0:
        all_editing_section[0].classList.remove("hidden");
        break;
      case 1:
        all_editing_section[1].classList.remove("hidden");
        break;
      case 2:
        all_editing_section[2].classList.remove("hidden");
        break;
      case 3:
        all_editing_section[3].classList.remove("hidden");
        break;
      case 4:
        all_editing_section[4].classList.remove("hidden");
        break;
      case 5:
        all_editing_section[5].classList.remove("hidden");
        break;
    }

    all_editing_section.forEach((element, i) => {
      if (i !== index) {
        element.classList.add("hidden");
      }
    });

    all_selected_edit_box.forEach((element, i) => {
      if (i !== index) {
        element.classList.remove("ring-2");
        element.classList.remove("ring-offset-0");
        element.classList.remove("ring-blue-500");
        cropper.destroy();
      }
    });
  });
});

function import_image() {
  file_input.click();
}

import_image_btn.addEventListener("click", import_image);
import_image_div.addEventListener("click", import_image);
open_image_button.addEventListener("click", import_image);

let file;
file_input.addEventListener("change", function () {
  import_image_div.classList.add("hidden");
  image_div.classList.remove("hidden");
  file = file_input.files[0];
  image.src = URL.createObjectURL(file);

  // Set width and height of image to resize input_width and input_height
  setTimeout(() => {
    input_width.value = image.width;
    input_height.value = image.height;
    image_width = image.width;
    image_heigth = image.height;
    default_image_width = image_width;
    default_image_height = image_heigth;
  }, 200);

  // Reset all styling
  for (let styleName of image.style) {
    image.style.styleName = "";
  }
  rotate_value = 0;
  flip_vertical_value = 1;
  flip_horizontal_value = 1;
  border_radius = 0;
  border_width = 0;
  image.style.borderWidth = "0px";
  image.style.borderRadius = "0px";
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

// ----------------------Zoom in Zoom out feature----------------------
const zoomContainer = document.getElementById("zoom-container");
let scale = 1; // Initial scale value

const zoomSpeed = 0.1; // Control the speed of zooming

zoomContainer.addEventListener("wheel", (event) => {
  if(event.ctrlKey){
  event.preventDefault(); // Prevent the page from scrolling

  if (event.deltaY < 0) {
    // Scrolling up, zoom in
    if (scale < 2) {
      scale += zoomSpeed;
    }
  } else {
    // Scrolling down, zoom out
    scale -= zoomSpeed;
    if (scale <= 0.5) {
      scale = 0.5; // Prevent zooming out beyond the initial scale
    }
  }

  // Apply the scale transformation
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  // image_div.style.transform = `scale(${scale})`;

  // zoom in zoom out value
  document.getElementById(
    "zoom_in_zoom_out_value"
  ).innerHTML = `${scale.toFixed(1)}%`;
}
});

// zoom in / zoom out button
let zoom_in_button = document.getElementById("zoom_in_button");
let zoom_out_button = document.getElementById("zoom_out_button");

zoom_in_button.addEventListener("click", () => {
  scale += zoomSpeed;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  document.getElementById(
    "zoom_in_zoom_out_value"
  ).innerHTML = `${scale.toFixed(1)}%`;
});

zoom_out_button.addEventListener("click", () => {
  if (scale < 0.6) {
    scale = 0.5; // Prevent zooming out beyond the initial scale
  } else {
    scale -= zoomSpeed;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  document.getElementById(
    "zoom_in_zoom_out_value"
  ).innerHTML = `${scale.toFixed(1)}%`;
});

// All basic adjust

// Brightness adjust
brightness_input.addEventListener("input", function () {
  brightness_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("brightness_value").innerHTML = `${
    brightness_value - 100
  }`;
});

contrast_input.addEventListener("input", function () {
  contrast_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("contrast_value").innerHTML = `${
    contrast_value - 100
  }`;
});

saturation_input.addEventListener("input", function () {
  saturation_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("saturation_value").innerHTML = `${
    saturation_value - 100
  }`;
});

blur_input.addEventListener("input", function () {
  blur_value = this.value;
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
});

let invert_toggle_btn = document.querySelector("#invert_button > div");

invert_button.addEventListener("click", () => {
  if (invert_value === 1) {
    invert_toggle_btn.classList.remove("bg-blue-600");
    invert_toggle_btn.classList.add("bg-gray-400");
    invert_toggle_btn.classList.remove("flex-row-reverse");
    invert_value = 0;
  } else if (invert_value === 0) {
    invert_toggle_btn.classList.remove("bg-gray-400");
    invert_toggle_btn.classList.add("bg-blue-600");
    invert_toggle_btn.classList.add("flex-row-reverse");
    invert_value = 1;
  }
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
});

// reset adjustment function
function reset_adjustment() {
  brightness_value = 100;
  contrast_value = 100;
  saturation_value = 100;
  blur_value = 0;
  invert_value = 0;
  sepia_value = 0;
  grayscale_value = 0;
  brightness_input.value = 100;
  contrast_input.value = 100;
  saturation_input.value = 100;
  blur_input.value = 0;
  document.getElementById("brightness_value").innerHTML = `${
    brightness_value - 100
  }`;
  document.getElementById("contrast_value").innerHTML = `${
    contrast_value - 100
  }`;
  document.getElementById("saturation_value").innerHTML = `${
    saturation_value - 100
  }`;
  document.getElementById("blur_value").innerHTML = `${blur_value}`;
  invert_toggle_btn.classList.remove("bg-blue-600");
  invert_toggle_btn.classList.remove("flex-row-reverse");
  image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
}

// rotate feature
rotate_right_btn.addEventListener("click", () => {
  rotate_value += 90;
  console.log("rotate value = ", rotate_value);
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

rotate_left_btn.addEventListener("click", () => {
  rotate_value -= 90;
  console.log("rotate value = ", rotate_value);
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

// flip feature
flip_horizontal.addEventListener("click", () => {
  if (flip_horizontal_value === 1) {
    flip_horizontal_value = -1;
  } else {
    flip_horizontal_value = 1;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

flip_vertical.addEventListener("click", () => {
  if (flip_vertical_value === 1) {
    flip_vertical_value = -1;
  } else {
    flip_vertical_value = 1;
  }
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
});

// Resize Feature
let input_width = document.getElementById("input_width");
let input_height = document.getElementById("input_height");

image.style.width = `${image_width}px`;
image.style.height = `${image_heigth}px`;

input_width.addEventListener("input", function () {
  image_width = this.value;
  if (image_width > 0) {
    image.style.width = `${image_width}px`;
    image.style.height = `${image_heigth}px`;
  }
});

input_height.addEventListener("input", function () {
  image_heigth = this.value;
  if (image_heigth > 0) {
    image.style.height = `${image_heigth}px`;
    image.style.width = `${image_width}px`;
  }
});

let rotate_div_arrow_svg = document.querySelector(
  "#rotate_div #rotate_div_arrow_svg"
);
let flip_div_arrow_svg = document.querySelector(
  "#flip_div #flip_div_arrow_svg"
);
let resize_div_arrow_svg = document.querySelector(
  "#resize_div #resize_div_arrow_svg"
);

// Rotate div drop down feature
rotate_div.addEventListener("click", () => {
  if (
    rotate_left_btn.classList.contains("hidden") &&
    rotate_right_btn.classList.contains("hidden")
  ) {
    rotate_left_btn.classList.remove("hidden");
    rotate_right_btn.classList.remove("hidden");
    rotate_div.classList.add("ring-1");
    rotate_div.classList.add("ring-offset-0");
    rotate_div.classList.add("ring-blue-500");
    rotate_div_arrow_svg.classList.remove("rotate-180");
    rotate_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    rotate_left_btn.classList.add("hidden");
    rotate_right_btn.classList.add("hidden");
    rotate_div.classList.remove("ring-1");
    rotate_div.classList.remove("ring-offset-0");
    rotate_div.classList.remove("ring-blue-500");
    rotate_div_arrow_svg.classList.add("rotate-180");
    rotate_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

// Flip div drop down feature
flip_div.addEventListener("click", () => {
  if (
    flip_horizontal.classList.contains("hidden") &&
    flip_vertical.classList.contains("hidden")
  ) {
    flip_horizontal.classList.remove("hidden");
    flip_vertical.classList.remove("hidden");
    flip_div.classList.add("ring-1");
    flip_div.classList.add("ring-offset-0");
    flip_div.classList.add("ring-blue-500");
    flip_div_arrow_svg.classList.remove("rotate-180");
    flip_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    flip_horizontal.classList.add("hidden");
    flip_vertical.classList.add("hidden");
    flip_div.classList.remove("ring-1");
    flip_div.classList.remove("ring-offset-0");
    flip_div.classList.remove("ring-blue-500");
    flip_div_arrow_svg.classList.add("rotate-180");
    flip_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

let all_filtered_images = document.querySelectorAll("#all_filters_section img");
let all_filtered_images_name = document.querySelectorAll(
  "#all_filters_section span"
);

// filterd img of filters section
all_selected_edit_box[3].addEventListener("click", () => {
  all_filtered_images.forEach((img, index) => {
    img.src = image.src;
    img.style.filter = `${filters[index].filter_value}`;
    img.addEventListener("click", () => {
      switch (index) {
        case 0:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          brightness_input.value = 100;
          contrast_input.value = 100;
          saturation_input.value = 100;
          blur_input.value = 0;
          document.getElementById("brightness_value").innerHTML = `${
            brightness_value - 100
          }`;
          document.getElementById("contrast_value").innerHTML = `${
            contrast_value - 100
          }`;
          document.getElementById("saturation_value").innerHTML = `${
            saturation_value - 100
          }`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 1:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = filters[1].value;
          sepia_value = 0;
          // image.style.filter = `grayscale(${grayscale_value}%)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 2:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = filters[2].value;
          // image.style.filter = `sepia(${sepia_value}%)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 3:
          brightness_value = filters[3].value;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          // image.style.filter = `brightness(${brightness_value}%)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 4:
          brightness_value = 100;
          contrast_value = filters[4].value;
          saturation_value = 100;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          // image.style.filter = `contrast(${contrast_value}%)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 5:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = 0;
          invert_value = filters[5].value;
          grayscale_value = 0;
          sepia_value = 0;
          // image.style.filter = `invert(${invert_value})`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 6:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = filters[6].value;
          blur_value = 0;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          // image.style.filter = `saturate(${saturation_value}%)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
        case 7:
          brightness_value = 100;
          contrast_value = 100;
          saturation_value = 100;
          blur_value = filters[7].value;
          invert_value = 0;
          grayscale_value = 0;
          sepia_value = 0;
          // image.style.filter = `blur(${blur_value}px)`;
          image.style.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px)  invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
          break;
      }
    });
  });

  all_filtered_images_name.forEach((span_name, index) => {
    span_name.innerHTML = `${filters[index].name}`;
  });
});

// resize_width_and_height_input_number_div
let resize_width_and_height_input_number_div = document.getElementById(
  "resize_width_and_height_input_number_div"
);

// Resize div drop down feature
resize_div.addEventListener("click", () => {
  if (resize_div_arrow_svg.classList.contains("rotate-180")) {
    resize_width_and_height_input_number_div.classList.remove("hidden");
    resize_div.classList.add("ring-1");
    resize_div.classList.add("ring-offset-0");
    resize_div.classList.add("ring-blue-500");
    resize_div_arrow_svg.classList.remove("rotate-180");
    resize_div_arrow_svg.classList.add("rotate-[270deg]");
  } else {
    resize_width_and_height_input_number_div.classList.add("hidden");
    resize_div.classList.remove("ring-1");
    resize_div.classList.remove("ring-offset-0");
    resize_div.classList.remove("ring-blue-500");
    resize_div_arrow_svg.classList.add("rotate-180");
    resize_div_arrow_svg.classList.remove("rotate-[270deg]");
  }
});

// Border (frame) feature
// border width input
let border_size_input = document.getElementById("border_size_input");
let border_size_value_span = document.getElementById("border_size_value_span");
// Border radius input
let border_radius_input = document.getElementById("border_radius_input");
let border_radius_value_span = document.getElementById(
  "border_radius_value_span"
);
// border color input
let border_color_input = document.getElementById("border_color_input");

image.style.borderWidth = `${border_width}px`;
border_size_input.addEventListener("input", function () {
  border_width = this.value;
  border_size_value_span.innerHTML = `${border_width}`;
  image.style.borderWidth = `${border_width}px`;
  // console.log("border_width = ", border_width);
  image.style.borderColor = `${border_color}`;
});

border_color_input.addEventListener("input", function () {
  border_color = this.value;
  image.style.borderColor = `${border_color}`;
  // alert(border_color);
});

function setBorderColor_1() {
  border_color = "#c8c8c8";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_2() {
  border_color = "#000000";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_3() {
  border_color = "#0f77ff";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_4() {
  border_color = "#5ca644";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_5() {
  border_color = "#ffd23a";
  image.style.borderColor = `${border_color}`;
}
function setBorderColor_6() {
  border_color = "#93c5fd";
  image.style.borderColor = `${border_color}`;
}

// Border radius input
border_radius_input.addEventListener("input", function () {
  border_radius = this.value;
  border_radius_value_span.innerHTML = `${border_radius}`;
  image.style.borderRadius = `${border_radius}px`;
});

// reset adjustment button
reset_adjustment_button.addEventListener("click", reset_adjustment);

// reset rotate, flip & resize function
function reset_rotate_flip_resize() {
  rotate_value = 0;
  flip_horizontal_value = 1;
  flip_vertical_value = 1;
  image_width = default_image_width;
  image_heigth = default_image_height;
  input_width.value = default_image_width;
  input_height.value = default_image_height;
  image.style.transform = `rotate(${rotate_value}deg) scale(${scale}) scaleX(${flip_vertical_value}) scaleY(${flip_horizontal_value})`;
  image.style.width = `${image_width}px`;
  image.style.height = `${image_heigth}px`;
}

// reset rotate, flip and resize
reset_rotate_flip_resize_button.addEventListener(
  "click",
  reset_rotate_flip_resize
);

// -------------------------------Image Crop Feature-----------------------------------
let All_crop_ratio = document.querySelectorAll(".crop_ratio");
let apply_button = document.getElementById("apply_button");
let cancel_button = document.getElementById("cancel_button");
let cropper;
let croped_image_canvas;
let isFirstClick  = true;

all_selected_edit_box[1].addEventListener("click", () => {
  if(isFirstClick === true){
    cropper = new Cropper(image, {
      aspectRatio: NaN,
    });
    isFirstClick = false;
  }
})

// crop ratio
let x;
let y;

function apply_crop() {
  croped_image_canvas = cropper.getCroppedCanvas({
    width: 510,
    height: 300,
  });
  image.src = croped_image_canvas.toDataURL();
  cropper.destroy();
  // Change the image_width and image_heigth
  image_width = croped_image_canvas.width;
  image_heigth = croped_image_canvas.height;
}

function cancel_crop() {
  cropper.destroy();
  All_crop_ratio.forEach((crop_ratio) => {
    crop_ratio.classList.remove("ring-2");
    crop_ratio.classList.remove("ring-offset-0");
    crop_ratio.classList.remove("ring-blue-500");
  });
}

apply_button.addEventListener("click", apply_crop);
cancel_button.addEventListener("click", cancel_crop);

All_crop_ratio.forEach((crop_ratio, index) => {
  crop_ratio.addEventListener("click", () => {
    crop_ratio.classList.add("ring-2");
    crop_ratio.classList.add("ring-offset-0");
    crop_ratio.classList.add("ring-blue-500");
    switch (index) {
      case 0:
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: NaN,
        });
        break;
      case 1:
        x = 1;
        y = 1;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 2:
        x = 3;
        y = 2;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 3:
        x = 2;
        y = 3;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 4:
        x = 4;
        y = 3;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 5:
        x = 3;
        y = 4;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 6:
        x = 16;
        y = 9;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
      case 7:
        x = 9;
        y = 16;
        cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: x / y,
        });
        break;
    }

    All_crop_ratio.forEach((element, i) => {
      if (index !== i) {
        element.classList.remove("ring-2");
        element.classList.remove("ring-offset-0");
        element.classList.remove("ring-blue-500");
      }
    });
  });
});
// -------------------------------Image Crop Feature-----------------------------------

// -------------------------------AI Bg remove feature---------------------------------
let bg_remover_div = document.getElementById("bg_remover_div");
let gray_background = document.getElementById("gray_background");

gray_background.style.width = "50%";
bg_remover_div.addEventListener("mouseenter", () => {
  gray_background.classList.add("background_remove_animation");
})

bg_remover_div.addEventListener("mouseleave", () => {
  gray_background.classList.remove("background_remove_animation");
})

// Bg remove logic
let apply_bg_remove_button = document.getElementById("apply_bg_remove_button");
let cancel_bg_remove_button = document.getElementById("cancel_bg_remove_button");
let bg_remover_div_of_main_section = document.getElementById("bg_remover_div_of_main_section");
let background_remove_section = document.getElementById("background_remove_section");
let image_url;

let fileName = "image.jpg";

function remove_backgound() {
  image.classList.add("opacity-80");
  const apiKey = "xLDZT7m1re43GfxVMsC9XW9a";

  const formData = new FormData();
  formData.append("image_file", file);
  formData.append("size", "auto");
  image_url = image.src;
  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  })
    .then(function (reponse) {
      return reponse.blob();
    })
    .then(function (blob) {
      const url = URL.createObjectURL(blob);
      // console.log("URL = ",url);
      image.src = url;
      image.classList.remove("opacity-80");
    })
    .catch(() => {
      alert("ERROR");
      image.classList.remove("opacity-80");
    });
}

// Function to convert image URL to a File object (not used yet)
async function imageURLToFile(imageUrl, fileName) {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    // Ensure the request was successful
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
    // Get the image data as Blob
    const imageData = await response.blob();
    // Create a file from Blob
    const file = new File([imageData], fileName, { type: imageData.type });
    return file;
  } catch (error) {
    console.error("Error converting image URL to File:", error);
  }
}

// bg_remover_div.addEventListener("click", remove_backgound);
bg_remover_div.addEventListener("click", () => {
  // remove_backgound();
  slide_button.click();
  background_remove_section.classList.remove("hidden");
});

bg_remover_div_of_main_section.addEventListener("click", () => {
  remove_backgound();
  alert("BG remove");
});

slide_button.click();

apply_bg_remove_button.addEventListener("click", () => {
  slide_button.click();
  background_remove_section.classList.add("hidden");
})

cancel_bg_remove_button.addEventListener("click", () => {
  image.src = image_url;
  slide_button.click();
  background_remove_section.classList.add("hidden");
})
// -------------------------------AI Bg remove feature---------------------------------

// ---------------------------------------------------------------
// Function to apply border-radius in image
function clipRoundedRect(ctx, x, y, width, height, borderRadius) {
  ctx.beginPath();
  ctx.moveTo(x + borderRadius, y);
  ctx.lineTo(x + width - borderRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + borderRadius);
  ctx.lineTo(x + width, y + height - borderRadius);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - borderRadius,
    y + height
  );
  ctx.lineTo(x + borderRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius);
  ctx.lineTo(x, y + borderRadius);
  ctx.quadraticCurveTo(x, y, x + borderRadius, y);
  ctx.closePath();
  ctx.clip();
}
// ---------------------------------------------------------------

// download image function
function download_image() {
  // if (confirm("Do you want to download an image")) {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  // Apply rotate when rotate value 90, 270, 450...
  let isRotated = false;
  if (Math.abs(rotate_value) % 180 !== 0 && rotate_value !== 0) {
    [image_width, image_heigth] = [image_heigth, image_width];
    isRotated = true;
  }
  // Apply width and height :-
  // After adding a resize image feature // logic before adding resize feature
  // ---------------------
  let borderWidth = parseInt(border_width);
  // ---------------------
  canvas.width = image_width + borderWidth * 2; // canvas.width = image.naturalWidth;
  canvas.height = image_heigth + borderWidth * 2; // canvas.height = image.naturalHeight;
  // ----------------Ex----------------
  // Fill background (border area) with the specified color
  // let borderColor = '#f0f';
  // ctx.fillStyle = border_color;
  // apply border radius
  clipRoundedRect(ctx, 0, 0, canvas.width, canvas.height, border_radius);
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.clip();
  if(borderWidth > 0) {
    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = border_color; // Set the border color here
    ctx.strokeRect(borderWidth / 2, borderWidth / 2, canvas.width - borderWidth, canvas.height - borderWidth);
  }
  // ----------------Ex----------------
  // apply filters :-
  ctx.filter = `brightness(${brightness_value}%) contrast(${contrast_value}%) saturate(${saturation_value}%) blur(${blur_value}px) invert(${invert_value}) grayscale(${grayscale_value}%) sepia(${sepia_value}%)`;
  // apply - Backgound color
  // ctx.fillStyle = color_value;
  // ctx.translate(image_width / 2, image_heigth / 2);
  ctx.translate(image_width / 2 + borderWidth, image_heigth / 2 + borderWidth);
  // apply - rotate :-
  ctx.rotate((rotate_value * Math.PI) / 180);
  // apply - flip
  ctx.scale(flip_vertical_value, flip_horizontal_value);
  if (isRotated === true) {
    ctx.drawImage(
      image,
      -image_heigth / 2,
      -image_width / 2,
      image_heigth,
      image_width
    );
  } else {
    ctx.drawImage(
      image,
      -image_width / 2,
      -image_heigth / 2,
      image_width,
      image_heigth
    );
  }
  // --------------------Ex---------------------
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  // --------------------Ex---------------------

  // --------------Download image logic----------------
  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();
  // --------------Download image logic----------------
  // document.querySelector("main").appendChild(canvas);
  // }
}

// download button
download_button.addEventListener("click", download_image);

// -----for now i hide all edit section and unhide rotate edit section-------
all_editing_section[0].classList.add("hidden");
all_editing_section[5].classList.remove("hidden");

