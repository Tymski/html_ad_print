console.log("Use addPages(n) to duplicate the page n times.");

function addPages(n = 1) {
    for (let i = 0; i < n; i++) {
        let duplicate = page.cloneNode(true);
        duplicate.removeAttribute("id");
        body.appendChild(duplicate);
    }
}