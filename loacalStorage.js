export function saveMode(mode) {
  localStorage.setItem("mode", mode);
}

export function getMode() {
  localStorage.getItem("mode");
}
