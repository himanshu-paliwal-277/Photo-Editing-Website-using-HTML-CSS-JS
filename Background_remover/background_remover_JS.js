let file_input = document.getElementById("fileInput");
let Upload_image_btn = document.getElementById("Upload_image_btn");
let reUpload_image_btn = document.getElementById("reUpload_image_btn");
let bg_remove_upload_section = document.getElementById(
  "bg_remove_upload_section"
);
let image_bg_remove_section = document.getElementById(
  "image_bg_remove_section"
);
let footer = document.querySelector("footer");
let original_image = document.getElementById("original_image");
let original_image_bg_div = document.getElementById("original_image_bg_div");
let imageURL;

// Sample images
let sample_img_1 = document.getElementById("sample_img_1");
let sample_img_2 = document.getElementById("sample_img_2");
let sample_img_3 = document.getElementById("sample_img_3");

let is_sample_img_1 = false;
let is_sample_img_2 = false;
let is_sample_img_3 = false;

// loader
let loader = document.getElementById("loader");

image_bg_remove_section.classList.add("hidden");

Upload_image_btn.addEventListener("click", () => {
  file_input.click();
});

file_input.addEventListener("change", () => {
  setTimeout(() => {
    bg_remove_upload_section.classList.add("hidden");
    footer.classList.add("hidden");
    image_bg_remove_section.classList.remove("hidden");
  }, 100);
  let file = file_input.files[0];
  imageURL = URL.createObjectURL(file);
  original_image.src = imageURL;
});

reUpload_image_btn.addEventListener("click", () => {
  file_input.click();
});

// Select both remove_bg button and download button
let remove_bg_btn = document.getElementById("remove_bg_btn");
let download_image_btn = document.getElementById("download_image_btn");

sample_img_1.addEventListener("click", () => {
  is_sample_img_1 = true;
  imageURL = sample_img_1.src;
  bg_remove_upload_section.classList.add("hidden");
  footer.classList.add("hidden");
  image_bg_remove_section.classList.remove("hidden");
  original_image.src = imageURL;
  document.body.classList.add("overflow-hidden");
});

sample_img_2.addEventListener("click", () => {
  is_sample_img_2 = true;
  imageURL = sample_img_2.src;
  bg_remove_upload_section.classList.add("hidden");
  footer.classList.add("hidden");
  image_bg_remove_section.classList.remove("hidden");
  original_image.src = imageURL;
  document.body.classList.add("overflow-hidden");
});

sample_img_3.addEventListener("click", () => {
  is_sample_img_3 = true;
  imageURL = sample_img_3.src;
  bg_remove_upload_section.classList.add("hidden");
  footer.classList.add("hidden");
  image_bg_remove_section.classList.remove("hidden");
  original_image.src = imageURL;
  document.body.classList.add("overflow-hidden");
});

// Zoom in Zoom out feature

let scale = 0.5;
let zoomSpeed = 0.1;
original_image_bg_div.style.transform = `scale(${scale})`;

image_bg_remove_section.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent the page from scrolling

  if (e.deltaY < 0) {
    // Scrolling up, zoom in
    if (scale < 2) {
      scale += zoomSpeed;
    }
  } else {
    // Scrolling down, zoom out
    scale -= zoomSpeed;
    if (scale <= 0.5) {
      scale = 0.5;
      // Prevent zooming out beyond the initial scale
    }
  }

  // Apply the scale transformation
  original_image_bg_div.style.transform = `scale(${scale})`;
});

function remove_backgound() {
  if (is_sample_img_1) {
    loader.classList.remove("hidden");
    original_image.classList.add("opacity-80");
    setTimeout(() => {
      loader.classList.add("hidden");
      original_image.classList.remove("opacity-80");
      original_image.src = "../Assets/bg_removed_img_1.png";
    }, 4000);
    return;
  } else if (is_sample_img_2) {
    loader.classList.remove("hidden");
    original_image.classList.add("opacity-80");
    setTimeout(() => {
      loader.classList.add("hidden");
      original_image.classList.remove("opacity-80");
      original_image.src = "../Assets/bg_removed_img_2.png";
    }, 4000);
    return;
  } else if (is_sample_img_3) {
    loader.classList.remove("hidden");
    original_image.classList.add("opacity-80");
    setTimeout(() => {
      loader.classList.add("hidden");
      original_image.classList.remove("opacity-80");
      original_image.src = "../Assets/bg_removed_img_3.png";
    }, 4000);
    return;
  }
  loader.classList.remove("hidden");
  original_image.classList.add("opacity-80");
  const apiKey = "aq4BHm4XPDddngLBPshDnVvP";
  let image = file_input.files[0];
  const formData = new FormData();
  formData.append("image_file", image);
  formData.append("size", "auto");

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
      imageURL = url;
      original_image.src = url;
      loader.classList.add("hidden");
      original_image.classList.remove("opacity-80");
    })
    .catch(() => {
      alert("ERROR");
    });
}

function downloadFile() {
  if(is_sample_img_1|| is_sample_img_2 || is_sample_img_3){
    download_img();
    return;
  }
  var anchorElement = document.createElement("a"); //<a></a>
  anchorElement.href = imageURL;
  anchorElement.download = "image.png";
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
}

// Remove backgound from image :
remove_bg_btn.addEventListener("click", remove_backgound);

// Download image :
download_image_btn.addEventListener("click", downloadFile);

function download_img() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = original_image.naturalWidth;
  canvas.height = original_image.naturalHeight;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.drawImage(
    original_image,
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
