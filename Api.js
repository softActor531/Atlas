import axios from "axios";

export function getStudentDiploma(id) {
  return new Promise((resolve, reject) => {
    resolve({
      title: 'Class of 2019 and Up',
      accelerationId: '12499',
      location: 'Bethel / Bethel',
      phaseOrStatus: 'Enrolled / Active',
      gca: 'Registration GC Unassigned',
      name: 'Jackie Testcase',
      diplomaCredits: 24,
      creditsEarned: 13.5,
      creditsNeeded: 10.5,
      tier: 2,
      status: 'Inactive',
      cohortYear: '',
      targetGraduationDate: 'Fall',
      special1: true,
      special2: true,
      special3: true,
      special4: true,
      special5: true,
      special6: true,
      special7: false,
      postGradPathway: 'Career',
      totalCredits: 20,
      gpa: '04',
      tier1Credits: '15.5+',
      tier2Credits: '10.5-15.25',
      tier3Credits: '5.5-10.25',
      tier4Credits: '0-5.25',
      tier5Credits: 'Test only',
      courses: [
        {
          name: 'English Language Arts',
          totalCredits: '4.000',
          remainingCredits: '0',
          subCourses: [
            {
              name: 'English 1 A',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 1 B',
              creditsEarned: '0.5',
              school: 'A.A.'
            },
            {
              name: 'English 2 A',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 2 B',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 3 A',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 3 B',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 4 A',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'English 4 B',
              creditsEarned: '1',
              school: 'A.A.'
            }
          ]
        },
        {
          name: 'Math',
          totalCredits: '3.000',
          remainingCredits: '0',
          subCourses: [
            {
              name: 'Algebra 1 A',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'Algebra 1 B',
              creditsEarned: '1',
              school: 'A.A.'
            },
            {
              name: 'Geometry 1 A',
              creditsEarned: '1',
              school: ''
            },
            {
              name: 'Geometry 1 B',
              creditsEarned: '1',
              school: ''
            },
            {
              name: 'Algebra 2 A',
              creditsEarned: '1',
              school: ''
            },
            {
              name: 'Algebra 2 B',
              creditsEarned: '1',
              school: ''
            }
          ]
        },
        {
          name: 'Science',
          totalCredits: '3.000',
          remainingCredits: '3',
          subCourses: []
        },
        {
          name: 'Social Studies',
          totalCredits: '3.000',
          remainingCredits: '3',
          subCourses: []
        },
        {
          name: 'Electives',
          totalCredits: '11.000',
          remainingCredits: '11',
          subCourses: []
        }
      ],
      assessments: [
        'State Assessments',
        'National Assessments',
        'Local Assessments',
        'Career + College Planning Assessments'
      ]
    })
  })
}

export function getAttendace () {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'Jackie Testcase',
      accelerationId: 12499,
      location: 'Bethel / Bethel',
      phaseOrStatus: 'Enrolled / Active',
      gca: 'Registration GC Unassigned',
      tier: '2',
      lastDateAttended: 'N/A',
      daysLapsed: 'N/A',
      nextDateExpected: 'N/A',
      referralMethod: 'AA Staff',
      referralPerson: 'Mommy',
      communityOutreachAdvocate: '',
      outreachAdvocate: '',
      notes: '',
      rdbStatusChangedTimes: '',
      systemStatusChangedTimes: '20',
      retentionNotes: [
        {
          day: 1,
          dateSubmitted: 'January 18, 2019 @ 10:58pm',
          rententionAction: 'Other',
          createdBy: 'Gin Hooks',
          sentTo: [
            'Kevin Torres',
            'Kevin Cummings',
            'Rebekah Caris',
            'Jeanne Courtney',
            'David Zere',
            'Danielle DeMateo'
          ],
          note: 'Remember and respect the differences'
        },
        {
          day: 18,
          dateSubmitted: 'January 18, 2019 @ 10:57pm',
          commitDate: 'Jan 18, 2019',
          rententionAction: 'Other',
          createdBy: 'Jennifer Rippey	',
          sentTo: [
            'Kevin Torres',
            'Kevin Cummings',
            'Rebekah Caris',
            'Jeanne Courtney',
            'Amy Torres'
          ],
          note: 'Testing'
        }
      ]
    })
  })
}

export function getGcDashboard () {
  return new Promise((resolve, reject) => {
    resolve({
      name: 'Jackie Testcase',
      accelerationId: '12499',
      location: 'Bethel / Bethel',
      phaseOrStatus: 'Enrolled / Active',
      gca: 'Registration GC Unassigned',
      tier: '2',
      districtId: '123456',
      districtPartner: 'Bethel',
      site: 'Bethel',
      phase: 'Enrolled',
      status: 'Active',
      specialProgram:
        'ELL/ESOL, None, Not Disclosed, IEP, 504 Plan, Free Lunch',
      lastDateAttended: '05/27/2020',
      daysLapsed: '63',
      nextDayExpected: '',
      lastLogin: '05/27/2020',
      currentCourse: 'PLATO Course Algebra 1, Semester A v7.0',
      timeOnline: '0 hrs'
    })
  })
}

export function fetchSchedule (filter) {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "Schedule fetched successfully",
      filter
    });
  });
}

export function getLocations(filter) {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          lat: 45.81444,
          lng: 15.97798,
          name: "Zagreb"
        },
        {
          lat: 46.056946,
          lng: 14.505751,
          name: "Ljubljana"
        },
        {
          lat: 47.497913,
          lng: 19.040236,
          name: "Budapest"
        },
        {
          lat: 48.210033,
          lng: 16.363449,
          name: "Vienna"
        },
        {
          lat: 52.520008,
          lng: 13.404954,
          name: "Berlin"
        },
        {
          lat: 41.906204,
          lng: 12.507516,
          name: "Rome"
        },
        {
          lat: 50.073658,
          lng: 14.41854,
          name: "Prague"
        },
        {
          lat: 48.148598,
          lng: 17.107748,
          name: "Bratislava"
        }
      ]
    });
  });
}

export async function getPhases() {
  axios
    .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/phases", {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      }
    })
    .catch(e => {
      console.log(e.response);
    });
}

export async function getDistricts() {
  return axios
    .get("http://atlas-rebuild-api.mtcdevsite.com/api/v1/districts", {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      }
    })
    .then(data => {
      console.log(data.data);
      return this.formatter.deserialize(data.data);
    })
    .catch(e => {
      console.log(e.response);
    });
}

export async function createStudent(payload) {
  axios
    .post(
      "http://atlas-rebuild-api.mtcdevsite.com/api/v1/students?include=race",
      {
        data: payload
      },
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        }
      }
    )
    .catch(e => {
      console.log(e.response);
    });
}

export function getAppointmentSites() {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          type: "sites",
          id: "1",
          attributes: {
            name: "Martin"
          }
        },
        {
          type: "sites",
          id: "2",
          attributes: {
            name: "Homestead"
          }
        },
        {
          type: "sites",
          id: "3",
          attributes: {
            name: "North Miami"
          }
        },
        {
          type: "sites",
          id: "4",
          attributes: {
            name: "Port St Lucie"
          }
        },
        {
          type: "sites",
          id: "5",
          attributes: {
            name: "North Las Vegas"
          }
        },
        {
          type: "sites",
          id: "6",
          attributes: {
            name: "Fort Pierce"
          }
        }
      ]
    });
  });
}

export function createAppointmentCategory(data) {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "Appointment category created successfully"
    });
  });
}

export function updateAppointmentCategory(data) {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "Appointment category updated successfully"
    });
  });
}

export function showAppointmentCategory(categoryId) {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          type: "appointment_category",
          id: categoryId,
          attributes: {
            canSelect: "yes",
            duration: {
              payload: {
                day: "monday",
                date: "2020-08-24",
                to: "10:00 AM",
                from: "10:00 AM",
                minutes: 5555
              },
              type: "in minutes"
            },
            name: "name",
            status: "Active"
          },
          relationships: {
            site: {
              data: {
                type: "appointment_site",
                id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c"
              }
            }
          }
        }
      ],
      included: [
        {
          type: "appointment_site",
          id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c",
          attributes: {
            name: "Homestead"
          }
        }
      ]
    });
  });
}

export function getAcademyClosureSites() {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          type: "site",
          id: "1",
          attributes: {
            name: "Martin"
          }
        },
        {
          type: "site",
          id: "2",
          attributes: {
            name: "Homestead"
          }
        },
        {
          type: "site",
          id: "3",
          attributes: {
            name: "North Miami"
          }
        },
        {
          type: "site",
          id: "4",
          attributes: {
            name: "Port St Lucie"
          }
        },
        {
          type: "site",
          id: "5",
          attributes: {
            name: "North Las Vegas"
          }
        },
        {
          type: "site",
          id: "6",
          attributes: {
            name: "Fort Pierce"
          }
        }
      ]
    });
  });
}

export function getAcademyClosureDistrects() {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          type: "ditrect",
          id: "1",
          attributes: {
            name: "distrect 1"
          }
        },
        {
          type: "ditrect",
          id: "2",
          attributes: {
            name: "distrect 2"
          }
        },
        {
          type: "ditrect",
          id: "3",
          attributes: {
            name: "distrect 3"
          }
        },
        {
          type: "ditrect",
          id: "4",
          attributes: {
            name: "distrect 4"
          }
        },
        {
          type: "",
          id: "5",
          attributes: {
            name: "distrect 5"
          }
        },
        {
          type: "ditrect",
          id: "6",
          attributes: {
            name: "distrect 6"
          }
        }
      ]
    });
  });
}

export function showAcademyClosure(closureId) {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          type: "academy_closure",
          id: closureId,
          attributes: {
            name: "name",
            closureType: "type 1",
            startDate: "2020-01-24",
            endDate: "2020-08-24",
            startTime: "10:00 AM",
            endTime: "11:00 AM",
            reason:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ",
            active: true,
            allDay: true,
            availableOnSite: true,
            availableVirtually: true
          },
          relationships: {
            site: {
              data: {
                type: "academy_site",
                id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c"
              }
            },
            district: {
              data: {
                type: "academy_district",
                id: "ac5e6e4a-502a-4b67-92ae-ac5e27c6e26c"
              }
            }
          }
        }
      ],
      included: [
        {
          type: "academy_site",
          id: "97c76e4a-502a-4b67-92ae-ac5e27c6e26c",
          attributes: {
            name: "Homestead"
          }
        },
        {
          type: "academy_district",
          id: "ac5e6e4a-502a-4b67-92ae-ac5e27c6e26c",
          attributes: {
            name: "distrect 1"
          }
        }
      ]
    });
  });
}

export function saveAcademyClosure(data) {
  return new Promise((resolve, reject) => {
    resolve({
      msg: "Academy closure created successfully"
    });
  });
}
