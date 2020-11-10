import { getId } from './id'
import { extractId } from './helpers'
import hasDeviceFactory from './has-device';
import hasWifiFactory from './has-wifi';
import genderFactory from './gender';
import raceFactory from './race';
import primaryLanguageFactory from './primary-language';
import maritalStatusFactory from './marital-status';
import hasChildrenFactory from './has-children';
import legalStatusFactory from './legal-status';
import livingSituationFactory from './living-situation';
import lastGradeCompletedFactory from './last-grade-completed';
import lastYearEnrolledFactory from './last-year-enrolled';
import cohortYearFactory from './cohort-year';
import phoneTypeFactory from './phone-type';
import emergencyContactRelationshipFactory from './emergency-contact-relationship';
import hearAboutUsFactory from './hear-about-us';

var faker = require('faker')

export default () => {
  const hasDevice = hasDeviceFactory();
  const hasWifi = hasWifiFactory();
  const gender = genderFactory();
  const race = raceFactory();
  const primaryLanguage = primaryLanguageFactory();
  const maritalStatus = maritalStatusFactory();
  const hasChildren = hasChildrenFactory();
  const legalStatus = legalStatusFactory();
  const livingSituation = livingSituationFactory();
  const lastYearEnrolled = lastYearEnrolledFactory();
  const lastGradeCompleted = lastGradeCompletedFactory();
  const cohortYear = cohortYearFactory();
  const phone1Type = phoneTypeFactory();
  const phone2Type = phoneTypeFactory();
  const emergencyContact1Relationship = emergencyContactRelationshipFactory();
  const emergencyContact2Relationship = emergencyContactRelationshipFactory();
  const hearAboutUs = hearAboutUsFactory();

  return {
    data: {
      ...getId('students'),
      attributes: {
        first_name: faker.name.firstName(),
        middle_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        street_address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip_code: faker.address.zipCode(),
        phone_1: faker.phone.phoneNumber(),
        phone_2: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        code_word: faker.random.alphaNumeric(6),
        birthdate: faker.date.past(),
        last_school: faker.company.companyName(),
        district_id: faker.random.alphaNumeric(6),
        has_issues: faker.random.boolean(),
        issue: faker.lorem.sentence(),
        allergies: ['Allergy 1', 'Allergy 2'],
        special_instruction: faker.lorem.paragraph(),
        referral_name: faker.name.findName(),
        referral_code: faker.random.alphaNumeric(6),
        emergency_contact_1_name: faker.name.findName(),
        emergency_contact_1_phone_1: faker.phone.phoneNumber(),
        emergency_contact_1_phone_2: faker.phone.phoneNumber(),
        emergency_contact_1_email: faker.internet.email(),
        emergency_contact_1_legal_guardian: faker.random.boolean(),
        emergency_contact_2_name: faker.name.findName(),
        emergency_contact_2_phone_1: faker.phone.phoneNumber(),
        emergency_contact_2_phone_2: faker.phone.phoneNumber(),
        emergency_contact_2_email: faker.internet.email(),
        emergency_contact_2_legal_guardian: faker.random.boolean(),
        parole_officer_name: faker.name.findName(),
        parole_officer_phone: faker.phone.phoneNumber(),
        parole_officer_email: faker.internet.email(),
      },
      relationships: {
        has_device: {
          data: extractId(hasDevice)
        },
        has_wifi: {
          data: extractId(hasWifi)
        },
        gender: {
          data: extractId(gender)
        },
        race: {
          data: extractId(race)
        },
        primary_language: {
          data: extractId(primaryLanguage)
        },
        marital_status: {
          data: extractId(maritalStatus)
        },
        has_children: {
          data: extractId(hasChildren)
        },
        legal_status: {
          data: extractId(legalStatus)
        },
        living_situation: {
          data: extractId(livingSituation)
        },
        last_year_enrolled: {
          data: extractId(lastYearEnrolled)
        },
        last_grades_completed: {
          data: extractId(lastGradeCompleted)
        },
        cohort_year: {
          data: extractId(cohortYear)
        },
        phone_1_type: {
          data: extractId(phone1Type)
        },
        phone_2_type: {
          data: extractId(phone2Type)
        },
        emergency_contact_1_relationship: {
          data: extractId(emergencyContact1Relationship)
        },
        emergency_contact_2_relationship: {
          data: extractId(emergencyContact2Relationship)
        },
        hear_about_us: {
          data: extractId(hearAboutUs)
        }
      }
    },
    included: [
      hasDevice.data,
      hasWifi.data,
      gender.data,
      race.data,
      primaryLanguage.data,
      maritalStatus.data,
      hasChildren.data,
      legalStatus.data,
      livingSituation.data,
      lastYearEnrolled.data,
      lastGradeCompleted.data,
      cohortYear.data,
      phone1Type.data,
      phone2Type.data,
      emergencyContact1Relationship.data,
      emergencyContact2Relationship.data,
      hearAboutUs.data,
    ]
  }
}
