<template>
  <div class>
    <div class="row">
      <div class="col-md-3 mt-3">
        <Studentsidenav :student-id="$route.params.id" />
      </div>
      <div class="col-md-9 col-xs-12">
        <div class="page-title-box">
          <div class="page-title-right">
            <button class="btn btn-primary reset-password" type="button">
              <span class="btn-label">
                <i class="mdi mdi-lock-reset"></i>
              </span>
              Resend Password Reset
            </button>
          </div>
          <h4 class="page-title">{{ first_name }} {{ last_name }} | Navigator ({{ has_device }})</h4>
        </div>
        <div class="card-box text-center">
          <h4 class="mb-3 header-title text-left">Profile</h4>
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Username:</strong>
                  <span class="ml-2">{{ username }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Password:</strong>
                  <span class="ml-2">{{ password }}</span>
                </p>
              </div>
            </div>
            <div class="col-xs-12 offset-md-2 col-md-4">
              <div class="text-left mt-3">
                <p class="text-muted mb-2 font-13">
                  <strong>Referral Code:</strong>
                  <span class="ml-2">{{ referral_code }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Total Points:</strong>
                  <span class="ml-2">{{ total_points }}</span>
                </p>
                <p class="text-muted mb-2 font-13">
                  <strong>Can Redeem:</strong>
                  <span class="ml-2">{{ can_redeem }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-xs-12 col-md-4 col-xl-2-4">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-success">
                        <i class="mdi mdi-television display-5 avatar-title text-"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">{{ available }}</span>
                        </h3>
                        <p class="mb-3 header-title">Available</p>
                        <span class="mb-3 header-title">
                          {{
                          available_price
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4 col-xl-2-4">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-info">
                        <i class="mdi mdi-trophy-outline display-5 avatar-title text-"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">{{ redeemed }}</span>
                        </h3>
                        <p class="mb-3 header-title">Redeemed</p>
                        <span class="mb-3 header-title">
                          {{
                          redeemed_price
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4 col-xl-2-4">
                <div class="widget-rounded-circle card-box">
                  <div class="row">
                    <div class="col-4">
                      <div class="avatar-lg rounded-circle bg-orange">
                        <i class="mdi mdi-account-plus-outline display-5 avatar-title text-"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="text-right">
                        <h3 class="text-dark mt-1">
                          <span data-plugin="counterup">
                            {{
                            total_earned
                            }}
                          </span>
                        </h3>
                        <p class="mb-3 header-title">Total Earned</p>
                        <span class="mb-3 header-title">
                          {{
                          total_earned_price
                          }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 class="mb-3 header-title">GC Points Archive</h4>
            <Table
              :items="[]"
              :fields="[
                'challenge_name',
                'Previous Points',
                'Added Points',
                'Total Points',
                'Created At'
              ]"
            />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="mb-3 header-title">GC Notifications Log</h4>

            <Table :items="[]" :fields="['Notification Type', 'Created At', 'Sent']" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.display-5 {
  font-size: 3rem;
  line-height: 1.1;
}

.bg-orange {
  background-color: #ed9451 !important;
}
</style>

<script>
import GcSideBar from "../../../components/student-contact/GcSideBar";
import Table from "../../../components/shared/Table";

import Api from "../../../services/api/Api";

export default {
  data() {
    return {
      username: "jactes02",
      password: "2000jac",
      referral_code: "Jac12499",
      total_points: "507",
      can_redeem: "Yes",
      available: "507",
      redeemed: "0",
      total_earned: "507",
      available_price: "$14.49",
      redeemed_price: "$0.00",
      total_earned_price: "$14.49"
    };
  },
  async asyncData(context) {
    const api = new Api(context);
    const student = await api.getStudent(context.route.params.id);

    return {
      ...student
    };
  },
  components: {
    GcSideBar,
    Table
  }
};
</script>
