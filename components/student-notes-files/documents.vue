<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3">
        Documents
      </h4>
      <h5>Registration</h5>

      <div class="row">
        <div v-for="(object, index) in counts" :key="object" class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white float-left">
                Add New Document
              </h5>
              <div class="float-right">
                <i class="mdi mdi-close" @click="remove(index)" />
              </div>
            </div>
            <div class="card-add text-center">
              <div class="form-group">
                <label for="">Type Name</label>
                <select class="form-control">
                  <option v-for="option in Registration" :key="option" :value="key">
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <input class="input-file" type="file" name="">
              </div>
              <div class="form-group mb-3">
                <input type="submit" name="" class="btn btn-success waves-effect waves-light" value="Upload">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white">
                Add New Document
              </h5>
            </div>
            <div class="card-add">
              <span data-district-id="" data-category-name="Registration" class="add_btn" @click="increment">
                <i class="fas fa-plus" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <h5>Registration</h5>
      <div class="row">
        <div v-for="(object, index) in counts" :key="object.id" class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white float-left">
                Add New Document
              </h5>
              <div class="float-right">
                <i class="mdi mdi-close" @click="remove(index)" />
              </div>
            </div>
            <div class="card-add text-center">
              <div class="form-group">
                <label for="">Type Name</label>
                <select class="form-control">
                  <option v-for="option in studentRecords" :key="option" :value="key">
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <input class="input-file" type="file" name="">
              </div>
              <div class="form-group mb-3">
                <input type="submit" name="" class="btn btn-success waves-effect waves-light" value="Upload">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white">
                Add New Document
              </h5>
            </div>
            <div class="card-add">
              <span data-district-id="" data-category-name="Registration" class="add_btn" @click="increment">
                <i class="fas fa-plus" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <h5>Assessments</h5>
      <div class="row">
        <div v-for="(object, index) in counts" :key="object.id" class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white float-left">
                Add New Document
              </h5>
              <div class="float-right">
                <i class="mdi mdi-close" @click="remove(index)" />
              </div>
            </div>
            <div class="card-add text-center">
              <div class="form-group">
                <label for="">Type Name</label>
                <select class="form-control">
                  <option v-for="option in Assessments" :key="option" :value="key">
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-group mb-3">
                <input class="input-file" type="file" name="">
              </div>
              <div class="form-group mb-3">
                <input type="submit" name="" class="btn btn-success waves-effect waves-light" value="Upload">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card uploadBox">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-0 text-white">
                Add New Document
              </h5>
            </div>
            <div class="card-add">
              <span data-district-id="" data-category-name="Registration" class="add_btn" @click="increment">
                <i class="fas fa-plus" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  data () {
    return {
      counts: [
        {
          email: '',
          user: ''
        }
      ],
      Registration: [
        'Registration Packet',
        'Media Opt In/out',
        'Proof of Age',
        'Proof of Residency',
        'Immunizations',
        'Records Request',
        'Home Language Survey',
        'Custody Documentation',
        'Student Release Form'
      ],
      studentRecords: [
        'Transcript',
        'IEP',
        '504 Plan',
        'ESOL/ESE',
        'GT',
        'New',
        'anthor new type'
      ],
      Assessments: [
        'State Assessments',
        'PSAT',
        'ACT',
        'SAT',
        'Accuplacer',
        'ASVAB',
        'New Assess',
        'Test'
      ]
    }
  },
  mounted () {
    this.increment()
  },
  methods: {
    increment () {
      const name = {
      }
      this.counts.push(name)
    },
    remove (x) {
      console.log(x)
      this.counts.splice(x, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-add{
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i{
        font-size: 70px;
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover{
            color: #2BCA30;
        }
    }
}
    .mdi-close{
        cursor: pointer;
    }
    .input-file{padding-left: 105px;}
</style>
