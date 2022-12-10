let sideMenu = document.getElementById('sideMenu');

function openMenu() {
    sideMenu.style.right = '0';
}
function closeMenu() {
    sideMenu.style.right = '-150px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxpw_quXqoUYMZxzeL8KKdwvMPZ_VAFyXOaOGcir73pDlaPejpHvk3kJCT9ymRnaHwSew/exec'

const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = 'Massage Sent Successfully';
            setTimeout(function () {
                msg.innerHTML = ''
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
