export default class Role {
  constructor(
    name,
    viewCreateNewGc,
    editCreateNewGc,
    viewGcProfile,
    editGcProfile,
    viewGcAttendance,
    editGcAttendance,
    viewGcNotes,
    editGcNotes,
    viewGcDocuments,
    editGcDocuments,
    eexport,
    exportAllDistricts,
    viewPublishReports,
    editPublishReports,
    scanner,
    editScanner,
    bulkNotesUpload,
    compass,
    viewContacts,
    createNewContact,
    editContactProfile,
    contactBulkUpdate,
    viewContactsMap,
    mapPinAssignment,
    importContacts,
    exportContacts,
    viewChallenges,
    editChallenges,
    viewAppSettings,
    editAppSettings,
    viewNotifications,
    editNotifications,
    createNewUser,
    editUserProfile,
    createNewRole,
    editRole,
    viewSiteSchedule,
    editSiteSchedule,
    editAcademyClosure,
    viewAcademyClosure,
    viewNotesCategory,
    editNotesCategory,
    editStaffSchedule,
    viewStaffSchedule
  ) {
    this.name = name;
    this.viewCreateNewGc = viewCreateNewGc;
    this.editCreateNewGc = editCreateNewGc;
    this.viewGcProfile = viewGcProfile;
    this.editGcProfile = editGcProfile;
    this.viewGcPlp = viewGcPlp;
    this.viewGcAttendance = viewGcAttendance;
    this.editGcAttendance = editGcAttendance;
    this.viewGcNotes = viewGcNotes;
    this.editGcNotes = editGcNotes;
    this.viewGcDocuments = viewGcDocuments;
    this.editGcDocuments = editGcDocuments;
    this.eexport = eexport;
    this.exportAllDistricts = exportAllDistricts;
    this.viewPublishReports = viewPublishReports;
    this.editPublishReports = editPublishReports;
    this.scanner = scanner;
    this.editScanner = editScanner;
    this.bulkNotesUpload = bulkNotesUpload;
    this.compass = compass;
    this.viewContacts = viewContacts;
    this.createNewContact = createNewContact;
    this.editContactProfile = editContactProfile;
    this.contactBulkUpdate = contactBulkUpdate;
    this.viewContactsMap = viewContactsMap;
    this.mapPinAssignment = mapPinAssignment;
    this.importContacts = importContacts;
    this.exportContacts = exportContacts;
    this.viewChallenges = viewChallenges;
    this.editChallenges = editChallenges;
    this.viewAppSettings = viewAppSettings;
    this.editAppSettings = editAppSettings;
    this.viewNotifications = viewNotifications;
    this.editNotifications = editNotifications;
    this.createNewUser = createNewUser;
    this.editUserProfile = editUserProfile;
    this.createNewRole = createNewRole;
    this.editRole = editRole;
    this.viewSiteSchedule = viewSiteSchedule;
    this.editSiteSchedule = editSiteSchedule;
    this.editAcademyClosure = editAcademyClosure;
    this.viewAcademyClosure = viewAcademyClosure;
    this.viewNotesCategory = viewNotesCategory;
    this.editNotesCategory = editNotesCategory;
    this.editStaffSchedule = editStaffSchedule;
    this.viewStaffSchedule = viewStaffSchedule;
  }

  toJson = () => {
    const role = {
      data: {
        type: "role",
        attributes: {
          name: this.name,
          viewCreateNewGc: this.viewCreateNewGc,
          editCreateNewGc: this.editCreateNewGc,
          viewGcProfile: this.viewGcProfile,
          editGcProfile: this.editGcProfile,
          viewGcPlp: this.viewGcPlp,
          viewGcAttendance: this.viewGcAttendance,
          editGcAttendance: this.editGcAttendance,
          viewGcNotes: this.viewGcNotes,
          editGcNotes: this.editGcNotes,
          viewGcDocuments: this.viewGcDocuments,
          editGcDocuments: this.editGcDocuments,
          eexport: this.eexport,
          exportAllDistricts: this.exportAllDistricts,
          viewPublishReports: this.viewPublishReports,
          editPublishReports: this.editPublishReports,
          scanner: this.scanner,
          editScanner: this.editScanner,
          bulkNotesUpload: this.bulkNotesUpload,
          compass: this.compass,
          viewContacts: this.viewContacts,
          createNewContact: this.createNewContact,
          editContactProfile: this.editContactProfile,
          contactBulkUpdate: this.contactBulkUpdate,
          viewContactsMap: this.viewContactsMap,
          mapPinAssignment: this.mapPinAssignment,
          importContacts: this.importContacts,
          exportContacts: this.exportContacts,
          viewChallenges: this.viewChallenges,
          editChallenges: this.editChallenges,
          viewAppSettings: this.viewAppSettings,
          editAppSettings: this.editAppSettings,
          viewNotifications: this.viewNotifications,
          editNotifications: this.editNotifications,
          createNewUser: this.createNewUser,
          editUserProfile: this.editUserProfile,
          createNewRole: this.createNewRole,
          editRole: this.editRole,
          viewSiteSchedule: this.viewSiteSchedule,
          editSiteSchedule: this.editSiteSchedule,
          editAcademyClosure: this.editAcademyClosure,
          viewAcademyClosure: this.viewAcademyClosure,
          viewNotesCategory: this.viewNotesCategory,
          editNotesCategory: this.editNotesCategory,
          editStaffSchedule: this.editStaffSchedule,
          viewStaffSchedule: this.viewStaffSchedule
        },
        links: {
          self: "https://jsonapi.org/"
        }
      }
    };
    return JSON.stringify(role);
  };

  fromJson = json => {
    const role = JSON.parse(json);
    return {
      name: role["data"]["attributes"]["name"],
      viewCreateNewGc: role["data"]["attributes"]["viewCreateNewGc"],
      editCreateNewGc: role["data"]["attributes"]["editCreateNewGc"],
      viewGcProfile: role["data"]["attributes"]["viewGcProfile"],
      editGcProfile: role["data"]["attributes"]["editGcProfile"],
      viewGcPlp: role["data"]["attributes"]["viewGcPlp"],
      viewGcAttendance: role["data"]["attributes"]["viewGcAttendance"],
      editGcAttendance: role["data"]["attributes"]["editGcAttendance"],
      viewGcNotes: role["data"]["attributes"]["viewGcNotes"],
      editGcNotes: role["data"]["attributes"]["editGcNotes"],
      viewGcDocuments: role["data"]["attributes"]["viewGcDocuments"],
      editGcDocuments: role["data"]["attributes"]["editGcDocuments"],
      eexport: role["data"]["attributes"]["eexport"],
      exportAllDistricts: role["data"]["attributes"]["exportAllDistricts"],
      viewPublishReports: role["data"]["attributes"]["viewPublishReports"],
      editPublishReports: role["data"]["attributes"]["editPublishReports"],
      scanner: role["data"]["attributes"]["scanner"],
      editScanner: role["data"]["attributes"]["editScanner"],
      bulkNotesUpload: role["data"]["attributes"]["bulkNotesUpload"],
      compass: role["data"]["attributes"]["compass"],
      viewContacts: role["data"]["attributes"]["viewContacts"],
      createNewContact: role["data"]["attributes"]["createNewContact"],
      editContactProfile: role["data"]["attributes"]["editContactProfile"],
      contactBulkUpdate: role["data"]["attributes"]["contactBulkUpdate"],
      viewContactsMap: role["data"]["attributes"]["viewContactsMap"],
      mapPinAssignment: role["data"]["attributes"]["mapPinAssignment"],
      importContacts: role["data"]["attributes"]["importContacts"],
      exportContacts: role["data"]["attributes"]["exportContacts"],
      viewChallenges: role["data"]["attributes"]["viewChallenges"],
      editChallenges: role["data"]["attributes"]["editChallenges"],
      viewAppSettings: role["data"]["attributes"]["viewAppSettings"],
      editAppSettings: role["data"]["attributes"]["editAppSettings"],
      viewNotifications: role["data"]["attributes"]["viewNotifications"],
      editNotifications: role["data"]["attributes"]["editNotifications"],
      createNewUser: role["data"]["attributes"]["createNewUser"],
      editUserProfile: role["data"]["attributes"]["editUserProfile"],
      createNewRole: role["data"]["attributes"]["createNewRole"],
      editRole: role["data"]["attributes"]["editRole"],
      viewSiteSchedule: role["data"]["attributes"]["viewSiteSchedule"],
      editSiteSchedule: role["data"]["attributes"]["editSiteSchedule"],
      editAcademyClosure: role["data"]["attributes"]["editAcademyClosure"],
      viewAcademyClosure: role["data"]["attributes"]["viewAcademyClosure"],
      viewNotesCategory: role["data"]["attributes"]["viewNotesCategory"],
      editNotesCategory: role["data"]["attributes"]["editNotesCategory"],
      editStaffSchedule: role["data"]["attributes"]["editStaffSchedule"],
      viewStaffSchedule: role["data"]["attributes"]["viewStaffSchedul"]
    };
  };
}
