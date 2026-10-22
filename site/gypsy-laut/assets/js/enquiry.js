(() => {
  const form = document.getElementById("gypsy-enquiry-form");
  const status = document.getElementById("gypsy-enquiry-status");
  const submit = form?.querySelector('button[type="submit"]');
  if (!form || !status || !submit) return;

  // TODO: Replace this preview-only guard only after a confirmed Gypsy Laut
  // enquiry destination, server-side validation and spam protection exist.
  // Keeping the button disabled in HTML prevents accidental POSTs without JS.
  submit.disabled = false;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.hidden = false;
  });
})();
