import v from 'validator';
import anime from 'animejs';

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
  let errors = [];
  const eng = that.props.eng;
  const langString = eng ?
    'Required' :
    'Måste fyllas i';
  const unknownErrorString = eng ?
    'Something went wrong with this value, please reselect it and try to submit the form again' :
    'Något gick fel med det här värdet, vänligen markera det igen och försök att skicka formuläret igen';

  const contact = that.contact.state;
  if (v.isEmpty(contact.name))
    errors['name'] = langString;

  if (isOrg && v.isEmpty(contact.organizationNumber))
    errors['organizationNumber'] = langString;

  if (v.isEmpty(contact.street))
    errors['street'] = langString;

  if (v.isEmpty(contact.zip))
    errors['zip'] = langString;
  else if (!v.isPostalCode(contact.zip, 'any'))
    errors['zip'] = eng ?
      'Not a valid postal code' :
      'Inte korrekt formaterad';

  if (v.isEmpty(contact.city))
    errors['city'] = langString;

  if (!v.isURL(contact.website) && !v.isEmpty(contact.website))
    errors['website'] = eng ?
      'The URL is not formatted correctly' :
      'URL:en är inte korrekt formaterad';

  if (isOrg && v.isEmpty(contact.contactPerson))
    errors['contactPerson'] = langString;

  if (v.isEmpty(contact.phone) && v.isEmpty(contact.mobile))
    errors['phone'] = langString;

  if (v.isEmpty(contact.email))
    errors['email'] = langString;
  else if (!v.isEmail(contact.email))
    errors['email'] = eng ?
      'Not a valid email' :
      'Inte en giltig e-post'

  if (!isOrg && v.isEmpty(contact.applicantName))
    errors['applicantName'] = langString;

  if (!isOrg && v.isEmpty(contact.applicantBirthdate))
    errors['applicantBirthdate'] = langString;

  const budget = that.budget.state;
  if (v.isEmpty(budget.subsidy))
    errors['subsidy'] = langString;

  if (!v.isBoolean(budget.partialFinancing + ''))
    errors['partialFinancing'] = unknownErrorString;
  else if (budget.partialFinancing)
    if (v.isEmpty(budget.partialSubsidy))
      errors['partialSubsidy'] = langString;

  if (!v.isBoolean(budget.multipleInstitutions + ''))
    errors['multipleInstitutions'] = unknownErrorString;

  if (v.isEmpty(budget.guarantee))
    errors['guarantee'] = langString;

  //Concent
  if (!that.state.concent1)
    errors['concent1'] = langString;
  if (!that.state.concent2)
    errors['concent2'] = langString;

  //Clear errors
  document.querySelectorAll('[data-error]').forEach(label => {
    label.removeAttribute('data-error');
  });

  //Display errors
  let index = 0;
  // eslint-disable-next-line no-unused-vars
  for (let error in errors) {
    let label = document.querySelector(`[for=${error}]`);

    // Scroll to first error
    index === 0 && anime({
      targets: [document.documentElement, document.body],
      scrollTop: label.offsetTop - 15,
      duration: 800,
      easing: 'easeInOutQuad'
    });

    // Set attribute which will the be displayed via css
    label && label.setAttribute('data-error', `${errors[error]}`);
    index++;
  }

  return Object.keys(errors).length ? false : true;
}

export const notVerified = (eng) => {
  let submitButton = document.querySelector('[type=submit]');
  submitButton && submitButton.classList.add('error');
  submitButton.value = eng ? 'Please verify that you are not a bot' : 'Vänligen verifiera att du inte är en robot';
}

export const verified = (eng) => {
  let submitButton = document.querySelector('[type=submit]');
  submitButton && submitButton.classList.remove('error');
  submitButton.value = eng ? 'Send application' : 'Skicka ansökan';
}

export const formSent = (that) => {
  that.captcha.reset();
  resetForm(that);
  that.setState({
    formReceived: true,
  }, () => {
      const el = document.querySelector('.formRecevied');
    anime({
      targets: [document.documentElement, document.body],
      scrollTop: el.offsetTop - 15,
      duration: 800,
      easing: 'easeInOutQuad'
    });
    el.classList.add('active');
  });
}

export const resetForm = (that) => {
  that.setState({
    ...that.initialState,
  });
  that.contact.setState({
    ...that.contact.initialState,
  });
  that.application.setState({
    ...that.application.initialState,
  });
  that.budget.setState({
    ...that.budget.initialState,
  });
}
