<template>
  <Edit :form="form" :hear_about="hear_about" />
</template>

<script>
import Edit from "@/components/contacts/Edit";

export default {
  components: {
    Edit
  },

  asyncData() {
    $nuxt.$store.dispatch("contact/getInitialData");
    $nuxt.$store.dispatch("contact/getContactData", $nuxt.$route.params.id);
  },
  data() {
    return {
      hear_about: "",
      form: {}
    };
  },

  mounted() {
    const contact = this.$store.getters["contact/contact"];

    this.hear_about = contact.hear_about;
    this.form = {
      requirements: {
        first_name: contact.first_name,
        middle_name: contact.middle_name,
        last_name: contact.last_name,
        district_id: contact.district_id,
        academy_id: contact.academy_id,
        referralName: contact.referred_by,
        district: contact.site.district.id,
        site: contact.site.id,
        phase: contact.status.phase.id,
        status: contact.status.id,
        priority: contact.priority,
        student_referred: null,
        student_referred_input: ""
      },
      contactInfo: {
        street_address: contact.street_address_1,
        street_address_line_2: contact.street_address_2,
        city: contact.city,
        state: contact.state,
        country: contact.county,
        zip_code: String(contact.zip_code),
        primary_phone: contact.phone_1,
        primary_phone_bad: contact.phone_1_bad,
        secondary_phone: contact.phone_2,
        secondary_phone_bad: contact.phone_2_bad,
        email: contact.email
      },
      eeocInfo: {
        birthdate: contact.birthdate
      },
      pastSchoolInfo: {
        cohort_year: contact.cohort_year,
        grade_level: contact.grade_level,
        past_school: contact.past_school_attended,
        withdrawal_code: contact.withdrawal_code,
        withdrawal_date: contact.withdrawal_date,
        community_outreach_advocate: contact.community_outreach_advocate.id,
        outreach_resource_advocate: contact.outreach_resource_advocate.id
      },
      additionalInfo: {
        notes: contact.notes
      }
    };
  }
};
</script>
