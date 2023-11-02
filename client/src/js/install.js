const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Prompt for install
window.addEventListener("beforeinstallprompt", (event) => {
  window.defferredprompt = event;
  butInstall.classList.toggle("hidden", false);
});

// Install Button Click Handler
butInstall.addEventListener("click", async () => {
  const promptEv = window.defferredprompt;

  if (!promptEv) {
    return;
  }

  promptEv.prompt();
  // reset prompt and hide button after install
  window.defferredprompt = null;
  butInstall.classList.toggle("hidden", true);
});

// handle for after install
window.addEventListener("appinstalled", (event) => {
  window.defferredprompt = null;
});
