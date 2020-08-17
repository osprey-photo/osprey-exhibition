<template>
  <div>
    <article class="box has-background-grey-lighter">
      <p class="title">Guest Book</p>
    </article>
    <div class="section has-text-left">
      <div class="box">
        <p>We'd love to hear from you, and your thoughts on the Exhibition.</p>
        <div class="field">
          <div class="control">
            <textarea class="textarea is-info" placeholder="Message..."></textarea>
          </div>
        </div>
      </div>

      <div class="box">
        <p>If you'd like to know about the society and join us, please leave you name and email!</p>
        <div class="container has-text-left">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input class="input is-info" type="text" placeholder="Name" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control is-expanded has-icons-left has-icons-right">
                  <input
                    class="input is-info"
                    type="email"
                    placeholder="Email"
                    value="alex@smith.com"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>