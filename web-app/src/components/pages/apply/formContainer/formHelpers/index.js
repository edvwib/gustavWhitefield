import v from 'validator';

export const getInputDetails = (event) => {
  const target = event.target;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  if (value === 'true') value = true;
  if (value === 'false') value = false;

  return {
    name: target.name,
    value,
    type: target.type,
    target: event.target,
  };
}

export const setTextareaHeight = (target) => {
  // Reset field height
  target.style.height = 'inherit';

  // Get the computed styles for the element
  var computed = window.getComputedStyle(target);

  // Calculate the height
  var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10)
    + target.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  target.style.height = height + 'px';
}

export const saveFormData = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export const validateForm = (that) => {
  const isOrg = that.state.isOrganization;
  let errors = {};
  const eng = that.props.eng;
  const langString = eng ? 'Required' : 'Måste fyllas i';
  const unknownErrorString = eng ? 'Something went wrong with this value, please reselect it and try to submit the form again' : 'Något gick fel med det här värdet, vänligen markera det igen och försök att skicka formuläret igen';

  const contact = that.contact.state;
  if (v.isEmpty(contact.name)) {
    errors['name'] = langString;
  }
  if (v.isEmpty(contact.organizationNumber) && isOrg) {
    errors['organizationNumber'] = langString;
  }
  if (v.isEmpty(contact.street)) {
    errors['street'] = langString;
  }
  if (v.isEmpty(contact.zip)) {
    errors['zip'] = langString;
  } else if (!v.isPostalCode(contact.zip, 'any')) {
    errors['zip'] = eng ? 'Not a valid postal code' : ' Inte korrekt formaterad';
  }
  if (v.isEmpty(contact.city)) {
    errors['city'] = langString;
  }
  if (!v.isURL(contact.website) && contact.website.length !== 0) {
    errors['website'] = eng ? 'The URL is not formatted correctly' : 'URL:en är inte korrekt formaterad';
  }
  if (v.isEmpty(contact.contactPerson) && isOrg) {
    errors['contactPerson'] = langString;
  }
  if (v.isEmpty(contact.phone) && v.isEmpty(contact.mobile)) {
    errors['phone'] = langString;
  }
  if (v.isEmpty(contact.email)) {
    errors['email'] = langString;
  } else if (!v.isEmail(contact.email)) {
    errors['email'] = eng ? 'Not a valid email' : 'Inte en giltig e-post'
  }
  if (!v.isEmpty(contact.phone) && !v.isEmpty(contact.mobile)) {
    errors['mobile'] = langString;
  }
  if (!isOrg && v.isEmpty(contact.applicantName)){
    errors['applicantName'] = langString;
  }
  if (!isOrg && v.isEmpty(contact.applicantBirthdate)) {
    errors['applicantBirthdate'] = langString;
  }

  const application = that.budget.application;


  const budget = that.budget.state;
  if (v.isEmpty(budget.subsidy)) {
    errors['subsidy'] = langString;
  }
  if (budget.partialFinancing) {
    if (v.isEmpty(budget.partialSubsidy)) {
      errors['partialSubsidy'] = langString;
    }
  }
  if (v.isEmpty(budget.guarantee)) {
    errors['guarantee'] = langString;
  }

  //Clear errors
  let labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.removeAttribute('data-error');
  });

  //Display errors
  let error;
  let index = 0;
  for (error in errors) {
    let label = document.querySelector(`[for=${error}]`);
    index === 0 && window.scrollTo(0, label.offsetTop - 15);
    if (label) label.setAttribute('data-error', `${errors[error]}`);
    index++;
  }

  return Object.keys(errors).length ? false : true;
}
