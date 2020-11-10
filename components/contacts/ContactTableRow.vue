<template>
  <tr>
    <td class="text-center">
      <nuxt-link
        :to="`/contacts/${id}`"
        class="text-secondary"
        target="_blank"
        >{{ first_name }}</nuxt-link
      >
    </td>
    <td class="text-center">
      <nuxt-link
        :to="`/contacts/${id}`"
        class="text-secondary"
        target="_blank"
        >{{ last_name }}</nuxt-link
      >
    </td>
    <td class="text-center">{{ phase }}</td>
    <td class="text-center">{{ status }}</td>
    <td class="text-center">{{ action_count }}</td>
    <td class="text-center">{{ district }}</td>
    <td class="text-center">{{ district_id }}</td>
    <td class="text-center">{{ academy_id }}</td>
    <td class="text-center">{{ created_at }}</td>
    <td class="text-center">{{ outreach_resource_advocate }}</td>
    <td class="text-center">{{ community_outreach_advocate }}</td>
    <td class="text-center">{{ priority }}</td>
    <td class="text-center actions">
      <div class="btn-group btn-group-sm">
        <nuxt-link
          :to="`/contacts/${id}`"
          class="tabledit-edit-button btn-show text-secondary"
        >
          <i class="fas fa-eye" />
        </nuxt-link>
      </div>
      <div class="btn-group btn-group-sm">
        <nuxt-link
          :to="`/contacts/${id}`"
          class="tabledit-edit-button btn-edit text-secondary"
        >
          <i class="mdi mdi-pencil" />
        </nuxt-link>
      </div>
    </td>
    <td>
      <button
        id="deleteButton"
        class="btn btn-multiple-delete btn-danger waves-effect waves-light"
        @click="deleteContact"
      >
        Delete
      </button>
    </td>

    <!-- <td class="text-center">
      <input type="checkbox" name="selected" value />
    </td>-->
  </tr>
</template>

<script>
export default {
  props: {
    first_name: String,
    last_name: String,
    phase: String,
    status: String,
    action_count: Number,
    district: String,
    district_id: String,
    academy_id: String,
    created_at: String,
    outreach_resource_advocate: String,
    community_outreach_advocate: String,
    priority: String,
    id: Number,
    api: Object,
    index: Number
  },
  methods: {
    deleteContact() {
      console.log("delete contact");
      this.api.deleteContact(this.id);
      this.$emit("getContacts", this.index);
    }
  }
};
</script>
