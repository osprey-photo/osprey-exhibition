<template>
  <div>
    <div class="section">
      <article class="box has-background-light">
        <p class="title">Guest Book</p>
      </article>
      <div class="box  has-text-left">
        <p>We'd love to hear from you, and your thoughts on the Exhibition.</p>
        <div class="field">
          <div class="control">
            <textarea
              v-model="comment"
              class="textarea is-info"
              placeholder="Message..."
            ></textarea>
          </div>
        </div>
      </div>

      <div class="box">
        <p>
          If you'd like to know about the society and join us, please leave you
          name and email!
        </p>
        <div class="container has-text-left">
          <div class="field is-horizontal">
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    v-model="name"
                    class="input is-info"
                    type="text"
                    placeholder="Name"
                  />
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
                    v-model="email"
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
          <button
            @click="guestbook()"
            v-bind:class="{
              'is-loading': isSubmitting
            }"
            class="button is-link"
          >
            Submit
          </button>
        </div>
      </div>
      <b-notification
        type="is-info"
        v-model="isThanks"
        aria-close-label="Close notification"
      >
        Thank you very much for your thoughts.
      </b-notification>
      <b-notification
        type="is-danger"
        auto-close
        v-model="isEmpty"
        aria-close-label="Close notification"
      >
        Please do write something.
      </b-notification>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      email: "",
      isSubmitting: false,
      isThanks: false,
      isEmpty: false
    };
  },
  methods: {
    async guestbook() {
      try {
        this.isSubmitting = true;
        if (this.comment.trim() === "") {
          this.isEmpty = true;
          return;
        } else {
          this.isEmpty = false;
        }
        const { data } = await this.$http.post(
          "https://8d06c43d.eu-gb.apiconnect.appdomain.cloud/api/comment",
          {
            name: this.name,
            comment: this.comment,
            email: this.email
          }
        );
        this.isThanks = true;
        console.log(data);
      } catch (err) {
        this.isError = true;
        console.log(err);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>