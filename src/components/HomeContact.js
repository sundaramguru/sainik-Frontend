import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const HomeContact = () => {

    return (

<footer class="" id="contact">

  <div class="container">
    <div class="row contact-margin">
      <div class="col-md-6">
        <h1 className='contact-h'>Contact Us</h1>
        <p class="fcp">We'd love to hear from you. For feedback, queries or help in ESM Registration or Finance Scheme, please get in touch.</p>
      </div>
      <div class="address col-md-6">
      <address >
      <div className='bot-pad'>
      261, Lawspet Main Road,<br /> Pakkamudianpet,<br /> Puduchery Rd,<br /> Lawspet,<br /> Puducherry - 605013,<br /> India <br />
</div>
      <LocalPhoneIcon />(+91)(0413) 2253107 <br /><br />
      <div className='bot-pad'>
      <EmailIcon />dirdsw.pon@nic.in<br />
      </div>
<EmailIcon />sainik.pon@nic.in <i>(for Jawan Bhavan booking)</i> <br />
      </address>
      </div>
    </div>

  </div>
</footer>
)
}

export default HomeContact
