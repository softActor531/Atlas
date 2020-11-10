export default class Contact {
  constructor(
    firstName,
    middleName,
    lastName,
    phase,
    district,
    priority,
    districtID,
    academyName,
    referralOption,
    referralName,
    referralOther,
    address1,
    address2,
    city,
    state,
    zip,
    county,
    phone1,
    phone1Bad,
    phone2,
    phone2Bad,
    email,
    birthDate,
    cohortYear,
    gradeLevel,
    pastSchool,
    withdrawlCode,
    withdrawlDate,
    communityAdvocate,
    advocate,
    notes
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.phase = phase;
    this.district = district;
    this.priority = priority;
    this.districtID = districtID;
    this.academyName = academyName;
    this.referralOption = referralOption;
    this.referralName = referralName;
    this.referralOther = referralOther;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.county = county;
    this.phone1 = phone1;
    this.phone1Bad = phone1Bad;
    this.phone2 = phone2;
    this.phone2Bad = phone2Bad;
    this.email = email;
    this.birthDate = birthDate;
    this.cohortYear = cohortYear;
    this.gradeLevel = gradeLevel;
    this.pastSchool = pastSchool;
    this.withdrawlCode = withdrawlCode;
    this.withdrawlDate = withdrawlDate;
    this.communityAdvocate = communityAdvocate;
    this.advocate = advocate;
    this.notes = notes;
  }

  toJson = () => {
    const contact = {
      data: {
        type: "contacts",
        attributes: {
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName,
          phase: this.phase,
          district: this.district,
          priority: this.priority,
          districtID: this.districtID,
          academyName: this.academyName,
          referralOption: this.referralOption,
          referralName: this.referralName,
          referralOther: this.referralOther,
          address1: this.address1,
          address2: this.address2,
          city: this.city,
          state: this.state,
          zip: this.zip,
          county: this.county,
          phone1: this.phone1,
          phone1Bad: this.phone1Bad,
          phone2: this.phone2,
          phone2Bad: this.phone2Bad,
          email: this.email,
          birthDate: this.birthDate,
          cohortYear: this.cohortYear,
          gradeLevel: this.gradeLevel,
          pastSchool: this.pastSchool,
          withdrawlCode: this.withdrawlCode,
          withdrawlDate: this.withdrawlDate,
          communityAdvocate: this.communityAdvocate,
          advocate: this.advocate,
          notes: this.notes
        },
        links: {
          self: "https://jsonapi.org/"
        }
      }
    };
    return JSON.stringify(contact);
  };

  fromJson = json => {
    const contact = JSON.parse(json);
    return {
      firstName: contact["data"]["attributes"]["firstName"],
      middleName: contact["data"]["attributes"]["middleName"],
      lastName: contact["data"]["attributes"]["lastName"],
      phase: contact["data"]["attributes"]["phase"],
      district: contact["data"]["attributes"]["district"],
      priority: contact["data"]["attributes"]["priority"],
      districtID: contact["data"]["attributes"]["districtID"],
      academyName: contact["data"]["attributes"]["academyName"],
      referralOption: contact["data"]["attributes"]["referralOption"],
      referralName: contact["data"]["attributes"]["referralName"],
      referralOther: contact["data"]["attributes"]["referralOther"],
      address1: contact["data"]["attributes"]["address1"],
      address2: contact["data"]["attributes"]["address2"],
      city: contact["data"]["attributes"]["city"],
      state: contact["data"]["attributes"]["state"],
      zip: contact["data"]["attributes"]["zip"],
      county: contact["data"]["attributes"]["county"],
      phone1: contact["data"]["attributes"]["phone1"],
      phone1Bad: contact["data"]["attributes"]["phone1Bad"],
      phone2: contact["data"]["attributes"]["phone2"],
      phone2Bad: contact["data"]["attributes"]["phone2Bad"],
      email: contact["data"]["attributes"]["email"],
      birthDate: contact["data"]["attributes"]["birthDate"],
      cohortYear: contact["data"]["attributes"]["cohortYear"],
      gradeLevel: contact["data"]["attributes"]["gradeLevel"],
      pastSchool: contact["data"]["attributes"]["pastSchool"],
      withdrawlCode: contact["data"]["attributes"]["withdrawlCode"],
      withdrawlDate: contact["data"]["attributes"]["withdrawlDate"],
      communityAdvocate: contact["data"]["attributes"]["communityAdvocate"],
      advocate: contact["data"]["attributes"]["advocate"],
      notes: contact["data"]["attributes"]["notes"]
    };
  };
}
