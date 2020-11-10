import axios from "axios";
import userFactory from "./mock/user";
import gradeFactory from "./mock/grade-level";
import contactFactory from "./mock/contact";
import studentFactory from "./mock/student";
import appointmentCategoryFactory from "./mock/appointment-category";
import siteCapacityFactory from "./mock/site-capacity";
import academyClosureFactory from "./mock/academy-closure";
import siteHoursFactory from "./mock/site-hours";
import roleFactory from "./mock/role";
import schoolFactory from "./mock/school";
import studentAttendanceFactory from "./mock/student-attendance";
import noteCategoryFactory from "./mock/note-category";
import contactActionFactory from "./mock/contact-action";
import logEventFactory from "./mock/log-event";
import logEmailFactory from "./mock/log-email";
import { asCollection } from "./mock/helpers";
import Swal from "sweetalert2";

export default class Api {
  formatter;
  tenant_id;
  token_id;

  constructor(context) {
    this.formatter = context.$formatter;
    this.axios = context.$axios;
    this.tenant_id = context.store.state.tenant_id;
    this.token_id = context.store.state.token;

    this.axios.interceptors.request.use(request => {
      request.headers.Accept = "application/vnd.api+json";
      request.headers["Content-Type"] = "application/vnd.api+json";
      request.headers["X-Tenant-Id"] = context.store.state.tenant_id;

      return request;
    });
  }

  // getContact(id) {
  //   return new Promise(resolve => {
  //     resolve(contactFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getContacts() {
  //   return new Promise(resolve => {
  //     resolve(
  //       asCollection([contactFactory(), contactFactory(), contactFactory()])
  //     );
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // createContact(payload) {
  //   return new Promise(resolve => {
  //     resolve(contactFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }
  updateContact(id, payload) {
    return axios({
      method: "PATCH",
      url: `http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        "X-Tenant-Id": this.tenant_id,
        Authorization: `Bearer ${this.token_id}`
      },
      data: payload
    })
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  // getStudent(id) {
  //   return new Promise(resolve => {
  //     resolve(studentFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getStudents() {
  //   return new Promise(resolve => {
  //     resolve(
  //       asCollection([studentFactory(), studentFactory(), studentFactory()])
  //     );
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // updateStudentContact(id, payload) {
  //   return new Promise(resolve => {
  //     resolve(studentFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // createStudentContact(payload) {
  //   return new Promise(resolve => {
  //     resolve(studentFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // createStudent(payload) {
  //   return new Promise(resolve => {
  //     resolve(studentFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getAppointmentCategories() {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/appointment-categories?include=sites.district`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  getStaffSchedules() {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedules?include=site,staff`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  getStaffScheduleEntries() {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedule-entries?include=appointment_categories,staff_schedule,schedule_block`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  // getReferralOptions() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([referralOptionFactory(), referralOptionFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getSiteCapacities() {
    return new Promise(resolve => {
      resolve(asCollection([siteCapacityFactory(), siteCapacityFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getAcademyClosures() {
    return new Promise(resolve => {
      resolve(asCollection([academyClosureFactory(), academyClosureFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getSiteHours() {
    return new Promise(resolve => {
      resolve(asCollection([siteHoursFactory(), siteHoursFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getRoles() {
    return new Promise(resolve => {
      resolve(asCollection([roleFactory(), roleFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getSchools() {
    return new Promise(resolve => {
      resolve(asCollection([schoolFactory(), schoolFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  // getPhases() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([phaseFactory(), phaseFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getStatuses() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([statusFactory(), statusFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getDistricts() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([districtFactory(), districtFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getSites() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([siteFactory(), siteFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getAdvocates() {
    return new Promise(resolve => {
      resolve(asCollection([userFactory(), userFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getCommunityAdvocates() {
    return new Promise(resolve => {
      resolve(asCollection([userFactory(), userFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  // getLastYears() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([lastYearFactory(), lastYearFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getCohortYears() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([cohortYearFactory(), cohortYearFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getGradeLevels() {
    return new Promise(resolve => {
      resolve(asCollection([gradeFactory(), gradeFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  // getPhoneTypes() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([phaseFactory(), phoneFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getMartialStatuses() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([martialStatusFactory(), martialStatusFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getParentalStatuses() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([parentalStatusFactory(), parentalStatusFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getLegalStatuses() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([legalStatusFactory(), legalStatusFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getLivingSituations() {
  //   return new Promise(resolve => {
  //     resolve(
  //       asCollection([livingSituationFactory(), livingSituationFactory()])
  //     );
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // createContact(payload) {
  //   return new Promise(resolve => {
  //     resolve(contactFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // updateContact(id, payload) {
  //   return new Promise(resolve => {
  //     resolve(contactFactory());
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getStudents() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/students?include=diseases,allergies,legal_status,living_situation,race,primary_language,emergency_contact_1_relation,emergency_contact_2_relation,graduate_candidate_advocate,content_coach,career_life_coach,site.district,status.phase",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  getContentCoaches() {
    return new Promise(resolve => {
      resolve(asCollection([userFactory(), userFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  getLifeCoaches() {
    return new Promise(resolve => {
      resolve(asCollection([userFactory(), userFactory()]));
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  // getRaces() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([raceFactory(), raceFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getGenders() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([genderFactory(), genderFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getLanguages() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([languageFactory(), languageFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getWifis() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([wifiFactory(), wifiFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getDevices() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([deviceFactory(), deviceFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  getStudentAttendance() {
    return new Promise(resolve => {
      resolve(
        asCollection([studentAttendanceFactory(), studentAttendanceFactory()])
      );
    }).then(response => {
      return this.formatter.deserialize(response);
    });
  }

  // getNoteCategories() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([noteCategoryFactory(), noteCategoryFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getContactActions() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([contactActionFactory(), contactActionFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getLogEvents() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([logEventFactory(), logEventFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  // getLogEmails() {
  //   return new Promise(resolve => {
  //     resolve(asCollection([logEmailFactory(), logEmailFactory()]));
  //   }).then(response => {
  //     return this.formatter.deserialize(response);
  //   });
  // }

  async createPhase(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/phases",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createReports(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/reports",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createStatus(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/statuses",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createDocumentType(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/document-types",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPhases() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/phases", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getAllergies() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/allergies", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPrograms() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/special-programs", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDiseases() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/diseases", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getSpecialPrograms() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/special-programs", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDistricts() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts?include=sites",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStatuses() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/statuses", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStatusesByPhase(phase, token, tenant) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/statuses?include=phase&filter[phase]=${phase}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": tenant,
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getSites() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/sites", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getSitesByDistrict(district, token, tenant) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/sites?include=district&filter[district]=${district}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": tenant,
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getRaces() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/races", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const races = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return races;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPrimaryLanguages() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/primary-languages", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getLegalStatuses() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/legal-statuses", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const legalStatuses = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return legalStatuses;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getLivingSituations() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/living-situations", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const livingSituations = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return livingSituations;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getMartialStatuses() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/marital-statuses", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const martialStatuses = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return martialStatuses;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getParentalStatuses() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/has-children", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const parentalStatuses = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return parentalStatuses;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getEmergencyContactRelations() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/emergency-contact-relations",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const emergencyContactRelations = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return emergencyContactRelations;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getWifis() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/has-wifis", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const hasWifis = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return hasWifis;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDevices() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/has-devices", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const hasWifis = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return hasWifis;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getTransportations() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/transportation", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const transportations = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return transportations;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getLastYears() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/last-years", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const lastYears = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return lastYears;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getLastGrades() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/last-grades", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const lastGrades = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return lastGrades;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  createStudent(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/students?include=race",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(err => err.response.data.errors);
  }

  async createContact(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateContact(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
        return e.response;
      });
  }

  async deleteContact(id) {
    return axios
      .delete(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts/${id}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async bulkUpdateContact(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/bulk-update-contacts",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        console.log(data, "indise api bulkupdate contact");
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createAction(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contact-actions",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getContactActions(contact) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/contact-actions?filter[contact]=${contact}&include=contact,status.phase,creator`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateStudent(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/students/${id}?include=diseases,allergies,legal_status,living_situation,race,primary_language,emergency_contact_1_relation,emergency_contact_2_relation,graduate_candidate_advocate,content_coach,career_life_coach,site.district,status.phase`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        return e.response.data.errors;
      });
  }

  async getPhoneTypes() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/phone-types", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const phoneTypes = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return phoneTypes;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getGenders() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/genders", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const genders = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return genders;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getCohortYears() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/cohort-years", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const cohortYears = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return cohortYears;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getContacts() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts?include=community_outreach_advocate,outreach_resource_advocate,site.district,status.phase",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getFilteredContacts(filters) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts?include=community_outreach_advocate,outreach_resource_advocate,site.district,status.phase${filters}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDuplicateContacts() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts?include=community_outreach_advocate,outreach_resource_advocate,site.district,status.phase&filter[duplicate]=1",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getContact(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/contacts/${id}?include=site.district,status.phase,community_outreach_advocate,outreach_resource_advocate`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudent(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/students/${id}?include=allergies,diseases,special_programs,legal_status,living_situation,race,primary_language,emergency_contact_1_relation,emergency_contact_2_relation,graduate_candidate_advocate,content_coach,career_life_coach,site.district,status.phase`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentDuplicate(id) {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/students?filter[duplicate]=1",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPriorities() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/priorities", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        const priorities = deserlializedData.map(element => {
          return {
            type: element.type,
            id: element.id,
            name: element.value
          };
        });
        return priorities;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDocuments(filter) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/document-types?filter[group]=${filter}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentDocument(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-documents?filter[student]=${id}&include=document-type`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDistrictDocuments(district) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/document-types?filter[district]=${district}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getSchedulingBlocks(site) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/schedule-blocks?filter[site]=${site}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createStaffSchedule(payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedules`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createStaffScheduleEntry(payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedule-entries`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createCourse(payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/plp-courses`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async attachDocumentType(id, payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts/${id}/relationships/document-types`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        console.log(data);
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async detachDocumentType(id, payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts/${id}/relationships/document-types`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-HTTP-Method-Override": "DELETE",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        console.log(data);
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getProfileUpdates(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-profile-updates?filter[student]=${id}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getNotifications() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/logs?filter[group]=notification",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getEvents() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/logs?filter[group]=event",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getEmails() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/logs?filter[group]=email",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getReferralOptions() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/referral-options", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getReferralOption(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/referral-options/${id}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createReferralOption(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/referral-options",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateReferralOption(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/referral-options/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPermissions() {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/permissions", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getRolePermissions(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles/${id}?include=permissions`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getUserPermissions(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${id}/permissions`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createRole(payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles?include=permissions`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateRole(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/roles/${id}?include=permissions`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateUser(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${id}?include=permissions`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getCategories() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?include=parent,sub&filter[type]=category",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return $nuxt.$formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getSubCategories(category) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?include=parent,sub&filter[type]=category&filter[parent]=${category}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDescriptors() {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?include=parent,sub&filter[type]=descriptor&filter[parent]=2`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        console.log(data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getListActions() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?include=parent,sub&filter[type]=action&filter[parent]=2",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getNoteProfile(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/${id}?include=category,sub_category,descriptor,action,student,creator,follower,assignee,student_status`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getNoteCategories() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?include=parent,sub",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getFilteredNoteCategories(filters) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories?${filters}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getNoteCategory(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories/${id}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentScheduleEnteries() {
    return $nuxt.$axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-schedule-entries?include=student,appointment_categories,staff`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return $nuxt.$formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentScheduleEnteriesBySite(site) {
    return $nuxt.$axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-schedule-entries?include=student,appointment_categories,staff&site=${site}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return $nuxt.$formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentScheduleEnteriesByCategory(category) {
    return $nuxt.$axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-schedule-entries?include=student,appointment_categories,staff&site=${category}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStaffScheduleEnteriesBySite(site) {
    return await axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedule-entries?include=appointment_categories&site=${site}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStaffScheduleEnteriesByCategory(category) {
    return await axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/staff-schedule-entries?include=appointment_categories&category=${category}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return $nuxt.$formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createNoteCategory(filter, payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/${filter}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        Swal.fire({
          icon: "success",
          text: "success"
        });
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        Swal.fire({
          icon: "error",
          text: e.response.data.errors[0].meta.failed.rule
        });
        this.$router.push(`/admin-option-note-category-edit`);
      });
  }

  async updateNoteCategory(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/note-categories/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createNote(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateNote(id, payload) {
    console.log("updateNote", id, payload);
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createTenant(token, payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/tenants",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateTenant(token, id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/tenants/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getTenants(token) {
    return axios
      .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/tenants", {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${token}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getTenant(token, id) {
    return axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/tenants/${id}`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${token}`,
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createStudentDocument(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-documents",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async importContacts(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contact-imports",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      });
  }

  async exportContacts(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/contact-exports",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      });
  }

  async importNotes(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/bulk-upload",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      });
  }

  async getPlpCourses() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/plp-courses?include=group",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getPlpPlans() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/district-plp-plans?include=district",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentPlpPlans(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-plp-plans?include=student&filter[student]=${id}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getStudentPlpPlan(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-plp-plans/${id}?include=student`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async addPlpPlan(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/district-plp-plans",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async addStudentPlpPlan(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-plp-plans",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateStudentPlpPlan(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-plp-plans/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updatePlpPlan(id, payload) {
    return axios
      .patch(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/district-plp-plans/${id}`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async updateDefaultPlpPlan(district, payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts/${district}/default-plp-plan`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return data;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getAttendanceEnteries(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-attendance-entries?include=student.site.district&filter[student]=${id}`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async createAttendanceEntry(payload) {
    return axios
      .post(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/student-attendance-entries?include=student`,
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        return e.response;
      });
  }

  async getPlpPlan(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/district-plp-plans/${id}?include=district`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getDefaultPlpPlan(district) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts/${district}/default-plp-plan?include=district`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async uploadFile1(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/file-upload-tokens",
        payload,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        console.log(payload);
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async uploadFile2(token, formdata) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/temporary-files",
        formdata,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "multipart/form-data",
            "X-FILE-UPLOAD-TOKEN": token,
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getUsers() {
    return axios
      .get(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/users?include=timezone,role,districts",
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getTenantUsers(tenant, token) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/tenants/${tenant}/users?include=timezone,role,districts`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getUser(id) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/users/${id}?include=role`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }
  async getMe(token, tenant) {
    return axios
      .get(`http://atlas-rebuild-api.mtcdevsite.com/api/v1/super-users/me`, {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${token}`,
          "X-Tenant-Id": tenant
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getUserTenants(token) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/me?include=tenants`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async getUserMe(token) {
    return axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/me?include=permissions,role,current_tenant,tenants`,
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": this.tenant_id
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e.response);
      });
  }

  async login(email, password) {
    return this.axios
      .post("http://atlas-rebuild-api.mtcdevsite.com/api/v1/login", {
        data: {
          attributes: {
            email,
            password
          }
        }
      })
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      });
  }

  async superLogin(email, password) {
    return this.axios
      .post("http://atlas-rebuild-api.mtcdevsite.com/api/v1/login/super-user", {
        data: {
          attributes: {
            email,
            password
          }
        }
      })
      .then(data => {
        console.log(data);
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e);
      });
  }

  async impersonate(token, tenant_id, payload) {
    return this.axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/impersonate",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${token}`,
            "X-Tenant-Id": tenant_id
          }
        }
      )
      .then(data => {
        const deserlializedData = this.formatter.deserialize(data.data);
        return deserlializedData;
      })
      .catch(e => {
        console.log(e);
      });
  }

  async search(q) {
    return this.axios
      .get(
        `http://atlas-rebuild-api.mtcdevsite.com/api/v1/search?filter[q]=${q}`,
        {
          headers: {
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(r => this.formatter.deserialize(r.data));
  }

  async getStudentsNotesList(params) {
    const urlParams =
      "?include=category,sub_category,descriptor,action,student,creator,follower,assignee";
    const url = `http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/${urlParams}&filter[student]=${params.id}`;
    const response = await this.axios.get(url, {
      headers: {
        "X-Tenant-Id": this.tenant_id,
        Authorization: `Bearer ${this.token_id}`
      }
    });
    return this.formatter.deserialize(response.data);
  }

  async getAllStudentsNotes(id) {
    const response = await this.axios.get(
      `http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes?include=category,sub_category,descriptor,action,student,creator,follower,assignee&filter[student]=${id}`,
      {
        headers: {
          "X-Tenant-Id": this.tenant_id,
          Authorization: `Bearer ${this.token_id}`
        }
      }
    );
    return this.formatter.deserialize(response.data);
  }

  async getStudenNote(params) {
    const urlParams =
      "?include=category,sub_category,descriptor,action,student,creator,follower,assignee";
    const url = `http://atlas-rebuild-api.mtcdevsite.com/api/v1/notes/${params.id +
      urlParams}`;
    console.log(url);
    const response = await this.axios.get(url, {
      headers: {
        "X-Tenant-Id": this.tenant_id,
        Authorization: `Bearer ${this.token_id}`
      }
    });
    return this.formatter.deserialize(response.data);
  }

  async createSechuleBlock(payload) {
    return axios
      .post(
        "http://atlas-rebuild-api.mtcdevsite.com/api/v1/schedule-blocks",
        {
          data: payload
        },
        {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            "X-Tenant-Id": this.tenant_id,
            Authorization: `Bearer ${this.token_id}`
          }
        }
      )
      .then(data => {
        return this.formatter.deserialize(data.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  }
}
