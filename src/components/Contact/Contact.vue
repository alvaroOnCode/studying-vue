<template>
  <section id="content">
    <h1 class="form-title">{{ title }}</h1>

    <form class="form-medium" @submit.prevent="sendInfo">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="form-input-name" v-model="info.name" />
        <div v-if="submitted && !$v.info.name.required">
          <p>Name required.</p>
        </div>
        <div v-if="submitted && !$v.info.name.minLength">
          <p>Name must have 2 characters at least.</p>
        </div>
      </div>

      <div class="form-group">
        <label for="name">Lastname</label>
        <input type="text" name="lastname" id="form-input-lastname" v-model="info.lastname" />
        <div v-if="submitted && !$v.info.lastname.required">
          <p>Lastname required.</p>
        </div>
        <div v-if="submitted && !$v.info.lastname.minLength">
          <p>Lastname must have 2 characters at least.</p>
        </div>
      </div>

      <div class="form-group">
        <label for="name">email</label>
        <input type="email" name="email" id="form-input-email" v-model="info.email" />
        <div v-if="submitted && !$v.info.email.required">
          <p>Email required.</p>
        </div>
        <div v-if="submitted && !$v.info.email.email">
          <p>Must be an email.</p>
        </div>
      </div>

      <div class="form-group">
        <input type="submit" value="Send" class="btn btn-dark" />
      </div>
    </form>
  </section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data: () => ({
    title: "Contact",
    info: {
      name: "",
      lastname: "",
      email: ""
    },
    submitted: false
  }),
  methods: {
    sendInfo() {
      console.log(this.info);

      this.submitted = true;

      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("Submit failed!");
        return false;
      }

      console.log("Submit successfully!");
    }
  },
  validations: {
    info: {
      name: {
        required,
        minLength: minLength(2)
      },
      lastname: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>