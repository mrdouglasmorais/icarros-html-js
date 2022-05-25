let contactForm = document.querySelector('#contact_form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let name = document.querySelector('#name').value,
  email = document.querySelector('#email').value,
  phone = document.querySelector('#phone').value,
  message = document.querySelector('#bio').value;

  let loaderContent = document.querySelector('#loader');
  loaderContent.classList.remove('loader_inative')
  loaderContent.classList.add('loader_active');

  axios.post('https://webhook.site/4c639737-c1c9-488d-a085-013d2a26e614', 
  {
    name,
    email,
    phone,
    message
  }).finally(
    () => {
      loaderContent.classList.add('loader_inative');
      loaderContent.classList.remove('loader_active')
    }
  ) 
})




