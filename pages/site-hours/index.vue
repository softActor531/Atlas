<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <Sidenav />
    </div>
    <div class="col-md-9">
      <Form
        :districts="districts"
        :districtList="districtList"
      />
    </div>
  </div>
</template>

<script>
import Sidenav from '../../components/schedule/Sidenav'
import Form from '../../components/site-hours/Form'
import Api from "@/services/api/Api.js";

export default {
  name: 'Index',
  components: {
    Sidenav,
    Form
  },
  async asyncData(context) {
    const api = new Api(context);
    const response = await api.getDistricts();
    let districts = response.map(res => {
      return {
        id: res.id,
        text: res.name
      }
    })
    districts = [{ id: null, text: '--District Options--' }, ...districts]
    return {
      districts,
      districtList: response
    };
  }
}
</script>
