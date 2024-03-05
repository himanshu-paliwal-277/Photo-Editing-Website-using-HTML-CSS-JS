let import_image_btn = document.getElementById("import_image_btn");
let reUpload_image_btn = document.getElementById("reUpload_image_btn");
let import_image_div = document.getElementById("import_image_div");
let file_input = document.getElementById("file_input");
let image = document.getElementById("image");
let image_div = document.getElementById("image_div");
let All_crop_ratio = document.querySelectorAll(".crop_ratio");
let apply_button = document.getElementById("apply_button");
let cancel_button = document.getElementById("cancel_button");
let disable_aside = document.getElementById("disable_aside");
let download_button = document.getElementById("download_button");
let cropper;
let canvas;

// crop ratio
let x;
let y;

function import_image() {
  file_input.click();
}

import_image_btn.addEventListener("click", import_image);
import_image_div.addEventListener("click", import_image);
reUpload_image_btn.addEventListener("click", () => {
  file_input.click();
  cropper.destroy();
});

file_input.addEventListener("change", function () {
  import_image_div.classList.add("hidden");
  disable_aside.classList.add("hidden");
  image_div.classList.remove("hidden");
  download_button.classList.remove("hidden");
  let file = file_input.files[0];
  image.src = URL.createObjectURL(file);
  image.classList.remove("hidden");
  cropper = new Cropper(image, {
    aspectRatio: NaN,
  });
});

function apply_crop() {
  canvas = cropper.getCroppedCanvas({
    width: 510,
    height: 300,
  });
  image.src = canvas.toDataURL();
  cropper.destroy();
}

function cancel_crop() {
  cropper.destroy();
  All_crop_ratio.forEach((crop_ratio) => {
    crop_ratio.classList.remove("ring-2");
    crop_ratio.classList.remove("ring-offset-0");
    crop_ratio.classList.remove("ring-blue-500");
  });
}

function download_image() {
  if (canvas) {
    canvas.toBlob(function (blob) {
      var link = document.createElement("a");
      link.download = "cropped-image.png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }, "image/png");
  } else {
    alert("Crop a image");
  }
}

apply_button.addEventListener("click", apply_crop);
cancel_button.addEventListener("click", cancel_crop);
download_button.addEventListener("click", download_image);

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

// ----------------------Zoom in Zoom out feature----------------------
const zoomContainer = document.getElementById("zoom-container");
let scale = 1; // Initial scale value

const zoomSpeed = 0.1; // Control the speed of zooming

zoomContainer.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent the page from scrolling

  if (e.deltaY < 0) {
    // Scrolling up, zoom in
    if(scale < 2){
      scale += zoomSpeed;
    }
  } else {
    // Scrolling down, zoom out
    scale -= zoomSpeed;
    if (scale <= 1) {
      scale = 1; // Prevent zooming out beyond the initial scale
    }
  }

  // Apply the scale transformation
  image.style.transform = `scale(${scale})`;
  // image_div.style.transform = `scale(${scale})`;
});
