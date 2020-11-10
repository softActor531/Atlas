export default class GC {
  constructor(
    firstName,
    middleName,
    lastName,
    selectedPhase,
    selectedStatus,
    districtId,
    gcImage,
    streetAddress,
    city,
    selectedState,
    zip,
    primaryPhone,
    phoneType,
    secondaryPhone,
    secondaryPhoneType,
    email,
    hasWifi,
    hasDevice,
    dateOfBirth,
    gender,
    race,
    primaryLanguage,
    district,
    site,
    graduateCandidateAdvocate,
    contentCoach,
    lifeCoach,
    transportation,
    lastYearEnrolled,
    lastSchoolAttended,
    lastGradeCompleted,
    enrolledDate,
    special1,
    special2,
    special3,
    special4,
    special5,
    special6,
    special7,
    maritalStatus,
    parentalStatus,
    legalStatus,
    livingSituation,
    paroleOfficer,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactEmail,
    emergencyContactPhone,
    emergencyContactPhone2,
    medicalIssues,
    codeWord,
    additionalInfo,
    refferal,
    refferedName,
    refferalOther
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.selectedPhase = selectedPhase;
    this.selectedStatus = selectedStatus;
    this.districtId = districtId;
    this.gcImage = gcImage;
    this.streetAddress = streetAddress;
    this.city = city;
    this.selectedState = selectedState;
    this.zip = zip;
    this.primaryPhone = primaryPhone;
    this.phoneType = phoneType;
    this.secondaryPhone = secondaryPhone;
    this.secondaryPhoneType = secondaryPhoneType;
    this.email = email;
    this.hasWifi = hasWifi;
    this.hasDevice = hasDevice;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.race = race;
    this.primaryLanguage = primaryLanguage;
    this.district = district;
    this.site = site;
    this.graduateCandidateAdvocate = graduateCandidateAdvocate;
    this.contentCoach = contentCoach;
    this.lifeCoach = lifeCoach;
    this.transportation = transportation;
    this.lastYearEnrolled = lastYearEnrolled;
    this.lastSchoolAttended = lastSchoolAttended;
    this.lastGradeCompleted = lastGradeCompleted;
    this.enrolledDate = enrolledDate;
    this.special1 = special1;
    this.special2 = special2;
    this.special3 = special3;
    this.special4 = special4;
    this.special5 = special5;
    this.special6 = special6;
    this.special7 = special7;
    this.maritalStatus = maritalStatus;
    this.parentalStatus = parentalStatus;
    this.legalStatus = legalStatus;
    this.livingSituation = livingSituation;
    this.paroleOfficer = paroleOfficer;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactRelationship = emergencyContactRelationship;
    this.emergencyContactEmail = emergencyContactEmail;
    this.emergencyContactPhone = emergencyContactPhone;
    this.emergencyContactPhone2 = emergencyContactPhone2;
    this.medicalIssues = medicalIssues;
    this.codeWord = codeWord;
    this.additionalInfo = additionalInfo;
    this.refferal = refferal;
    this.refferedName = refferedName;
    this.refferalOther = refferalOther;
  }

  toJson = () => {
    const gc = {
      data: {
        type: "gc",
        attributes: {
          firstName: this.firstName,
          middleName: this.middleName,
          lastName: this.lastName,
          selectedPhase: this.selectedPhase,
          selectedStatus: this.selectedStatus,
          districtId: this.districtId,
          gcImage: this.gcImage,
          streetAddress: this.streetAddress,
          city: this.city,
          selectedState: this.selectedState,
          zip: this.zip,
          primaryPhone: this.primaryPhone,
          phoneType: this.phoneType,
          secondaryPhone: this.secondaryPhone,
          secondaryPhoneType: this.secondaryPhoneType,
          email: this.email,
          hasWifi: this.hasWifi,
          hasDevice: this.hasDevice,
          dateOfBirth: this.dateOfBirth,
          gender: this.gender,
          race: this.race,
          primaryLanguage: this.primaryLanguage,
          district: this.district,
          site: this.site,
          graduateCandidateAdvocate: this.graduateCandidateAdvocate,
          contentCoach: this.contentCoach,
          lifeCoach: this.lifeCoach,
          transportation: this.transportation,
          lastYearEnrolled: this.lastYearEnrolled,
          lastSchoolAttended: this.lastSchoolAttended,
          lastGradeCompleted: this.lastGradeCompleted,
          enrolledDate: this.enrolledDate,
          special1: this.special1,
          special2: this.special2,
          special3: this.special3,
          special4: this.special4,
          special5: this.special5,
          special6: this.special6,
          special7: this.special7,
          maritalStatus: this.maritalStatus,
          parentalStatus: this.parentalStatus,
          legalStatus: this.legalStatus,
          livingSituation: this.livingSituation,
          paroleOfficer: this.paroleOfficer,
          emergencyContactName: this.emergencyContactName,
          emergencyContactRelationship: this.emergencyContactRelationship,
          emergencyContactEmail: this.emergencyContactEmail,
          emergencyContactPhone: this.emergencyContactPhone,
          emergencyContactPhone2: this.emergencyContactPhone2,
          medicalIssues: this.medicalIssues,
          codeWord: this.codeWord,
          additionalInfo: this.additionalInfo,
          refferal: this.refferal,
          refferedName: this.refferedName,
          refferalOther: this.refferalOther
        },
        links: {
          self: "https://jsonapi.org/"
        }
      }
    };
    return JSON.stringify(gc);
  };

  fromJson = json => {
    const gc = JSON.parse(json);
    return {
      firstName: gc["data"]["attributes"]["firstName"],
      middleName: gc["data"]["attributes"]["middleName"],
      lastName: gc["data"]["attributes"]["lastName"],
      selectedPhase: gc["data"]["attributes"]["selectedPhase"],
      selectedStatus: gc["data"]["attributes"]["selectedStatus"],
      districtId: gc["data"]["attributes"]["districtId"],
      gcImage: gc["data"]["attributes"]["gcImage"],
      streetAddress: gc["data"]["attributes"]["streetAddress"],
      city: gc["data"]["attributes"]["city"],
      selectedState: gc["data"]["attributes"]["selectedState"],
      zip: gc["data"]["attributes"]["zip"],
      primaryPhone: gc["data"]["attributes"]["primaryPhone"],
      phoneType: gc["data"]["attributes"]["phoneType"],
      secondaryPhone: gc["data"]["attributes"]["secondaryPhone"],
      secondaryPhoneType: gc["data"]["attributes"]["secondaryPhoneType"],
      email: gc["data"]["attributes"]["email"],
      hasWifi: gc["data"]["attributes"]["hasWifi"],
      hasDevice: gc["data"]["attributes"]["hasDevice"],
      dateOfBirth: gc["data"]["attributes"]["dateOfBirth"],
      gender: gc["data"]["attributes"]["gender"],
      race: gc["data"]["attributes"]["race"],
      primaryLanguage: gc["data"]["attributes"]["primaryLanguage"],
      district: gc["data"]["attributes"]["district"],
      site: gc["data"]["attributes"]["site"],
      graduateCandidateAdvocate:
        gc["data"]["attributes"]["graduateCandidateAdvocate"],
      contentCoach: gc["data"]["attributes"]["contentCoach"],
      lifeCoach: gc["data"]["attributes"]["lifeCoach"],
      transportation: gc["data"]["attributes"]["transportation"],
      lastYearEnrolled: gc["data"]["attributes"]["lastYearEnrolled"],
      lastSchoolAttended: gc["data"]["attributes"]["lastSchoolAttended"],
      lastGradeCompleted: gc["data"]["attributes"]["lastGradeCompleted"],
      enrolledDate: gc["data"]["attributes"]["enrolledDate"],
      special1: gc["data"]["attributes"]["special1"],
      special2: gc["data"]["attributes"]["special2"],
      special3: gc["data"]["attributes"]["special3"],
      special4: gc["data"]["attributes"]["special4"],
      special5: gc["data"]["attributes"]["special5"],
      special6: gc["data"]["attributes"]["special6"],
      special7: gc["data"]["attributes"]["special7"],
      maritalStatus: gc["data"]["attributes"]["maritalStatus"],
      parentalStatus: gc["data"]["attributes"]["parentalStatus"],
      legalStatus: gc["data"]["attributes"]["legalStatus"],
      livingSituation: gc["data"]["attributes"]["livingSituation"],
      paroleOfficer: gc["data"]["attributes"]["paroleOfficer"],
      emergencyContactName: gc["data"]["attributes"]["emergencyContactName"],
      emergencyContactRelationship:
        gc["data"]["attributes"]["emergencyContactRelationship"],
      emergencyContactEmail: gc["data"]["attributes"]["emergencyContactEmail"],
      emergencyContactPhone: gc["data"]["attributes"]["emergencyContactPhone"],
      emergencyContactPhone2:
        gc["data"]["attributes"]["emergencyContactPhone2"],
      medicalIssues: gc["data"]["attributes"]["medicalIssues"],
      codeWord: gc["data"]["attributes"]["codeWord"],
      additionalInfo: gc["data"]["attributes"]["additionalInfo"],
      refferal: gc["data"]["attributes"]["refferal"],
      refferedName: gc["data"]["attributes"]["refferedName"],
      refferalOther: gc["data"]["attributes"]["refferalOther"]
    };
  };
}
