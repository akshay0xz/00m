let startX = 0;
let chatPanel = document.getElementById("chat-panel");

// Swipe detect
document.body.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
});

document.body.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    chatPanel.style.right = "0";
  }
});

document.getElementById("panic").onclick = () => {
  chatPanel.style.right = "-100%";
};

function sendMessage() {
  let msg = document.getElementById("message").value;
  if (msg.trim()) {
    let msgBox = document.createElement("div");
    msgBox.textContent = msg;
    document.getElementById("chat-box").appendChild(msgBox);
    document.getElementById("message").value = "";
  }
}
