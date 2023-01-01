async function submit() {
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

  const url = ""; // Webhook URL
  const param = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message,
    }),
  };
  fetch(url, param).then((response) => {
    if (response.ok) {
      console.log("ok");
    } else {
      console.log("error");
    }
  });
}

document.getElementById("submit").addEventListener("click", submit);
