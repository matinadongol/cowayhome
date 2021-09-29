<link rel="stylesheet" href="./assets/css/enquiry.css">

<div class="modal fade bd-modal-lg modal-contact p-0" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-center">
          Contact Us
        </h5>
        <div class="text-center text">Via the Following channels.</div>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="social-links text-center">
          <div class="row">
            <div class="col">
              <div class="social-media icon">
                <img src="./assets/icons/ContactUs_Icons/contactus_call.svg" width="100%" alt="Call">
                <h5>Call</h5>
              </div>
            </div>
            <div class="col">
              <div class="social-media icon">
                <img src="./assets/icons/ContactUs_Icons/contactus_mail.svg" width="100%" alt="Mail">
                <h5>Mail</h5>
              </div>
            </div>
            <div class="col">
              <div class="social-media icon">
                <img src="./assets/icons/ContactUs_Icons/contactus_whatsapp.svg" width="100%" alt="WhatsApp">
                <h5>WhatsApp</h5>
              </div>
            </div>
            <div class="col">
              <div class="social-media icon">
                <img src="./assets/icons/ContactUs_Icons/contactus_messengger.svg" width="100%" alt="Messenger">
                <h5>Messenger</h5>
              </div>
            </div>
            <div class="col">
              <div class="social-media icon">
                <img src="./assets/icons/ContactUs_Icons/contactus_wechat.svg" width="100%" alt="Wechat">
                <h5>Wechat</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="separator"><span>OR</span></div>

        <h5 class="title text-center">
          Enquiry Form
        </h5>
        <div class="text-center text">Please enter the details below and we <br> will assist you shortly after.</div>

        <form id="enquiry-form" method="GET" action="#">
          <div class="form-group">
            <label for="name" class="col-form-label">FULL NAME *</label>
            <input type="text" class="form-control" id="name" name="name" required>
          </div>

          <div class="row">
            <div class="col-xl-6 col-12">
              <div class="form-group">
                <label for="email" class="col-form-label">EMAIL *</label>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>
            </div>
            <div class="col-xl-6 col-12">
              <div class="form-group">
                <label for="contact" class="col-form-label">CONTACT NUMBER *</label>
                <input type="text" class="form-control" id="contact" name="contact" required>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">PRODUCT *</label>
            <select id="product" class="form-control" name="product">
              <option selected disabled>Mate</option>
              <option>Bamboo</option>
              <option>Bateri Bidet</option>
              <option>Breeze</option>
              <option>Core</option>
              <option>Ferry</option>
              <option>Fontana</option>
              <option>Glaze</option>
              <option>Harry</option>
              <option>Inception</option>
              <option>Kecil</option>
              <option>Lily</option>
              <option>Lombok 3</option>
              <option>Lucy</option>
              <option>Manual Bidet</option>
              <option>Mate</option>
              <option>Mattress</option>
              <option>Neo Plus</option>
              <option>Ombak</option>
              <option>Prime Series</option>
              <option>Promotion</option>
              <option>Storm</option>
              <option>Tuba</option>
              <option>Villaem2</option>
            </select>
          </div>
          <div class="form-group">
            <label for="remark" class="col-form-label">REMARK *</label>
            <textarea class="form-control" id="remark" name="remark"></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="your_site_key"></div>
          <button class="btn btn-primary">Submit</button>

        </form>
      </div>
    </div>
  </div>
</div>