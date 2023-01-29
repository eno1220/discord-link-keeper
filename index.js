async function submit() {
  const msgSuccess = document.getElementById("msg-success");
  const msgError = document.getElementById("msg-error");
  const msgNoUrl = document.getElementById("msg-no-url");
  const memo =
    document.getElementById("memo").value != ""
      ? "【memo】\r" + document.getElementById("memo").value + "\r"
      : "";
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const message =
    "----------\r" +
    "【Title】\r" +
    tab.title +
    "\r" +
    memo +
    "【URL】\r" +
    tab.url;

  const url = undefined; // Webhook URL
  const param = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message,
    }),
  };
  if (url == undefined) {
    msgNoUrl.style.display = "block";
    setTimeout(() => {
      msgNoUrl.style.display = "none";
    }, 3000);
    return;
  }
  fetch(url, param).then((response) => {
    if (response.ok) {
      console.log("ok");
      msgSuccess.style.display = "block";
      setTimeout(() => {
        msgSuccess.style.display = "none";
      }, 3000);
    } else {
      console.log("error", response);
      msgError.style.display = "block";
      setTimeout(() => {
        msgError.style.display = "none";
      }, 3000);
    }
  });
}

document.getElementById("submit").addEventListener("click", submit);
