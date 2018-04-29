const prefilledSignup = false;

export default {
  app: {
    showLoginModal: false,
    loadingStudents: false,
    loadingTutors: false,
    loginEmail: '',
    loginPassword: '',
    loginUserType: 'student',
    signupUserType: 'student',
    filtersUserType: 'student',
  },
  user: {
    location: {},
    locationChoice: {},
    loggedIn: false,
    token: '',
  },
  signUpData: {
    // account info
    firstname: prefilledSignup ? 'Jack' : '',
    lastname: prefilledSignup ? 'the Ripper' : '',
    password: prefilledSignup ? 'yxcvbnm' : '',
    confirmPassword: prefilledSignup ? 'yxcvbnm' : '',
    email: prefilledSignup ? 'jacky@theripper.com' : '',
    // contact info
    phone: prefilledSignup ? '+34 4321 123 523' : '',
    address: prefilledSignup ? {} : {
      street: prefilledSignup ? 'Long Lane' : '',
      number: prefilledSignup ? '42' : '',
      city: prefilledSignup ? 'Paradise City' : '',
      zip: prefilledSignup ? '6942' : '',
      country: prefilledSignup ? 'Wonderland' : '',
    },
    // personal info
    birthday: prefilledSignup ? '2000-01-01' : '',
    birthplace: prefilledSignup ? 'Honolulu' : '',
    gender: prefilledSignup ? 'female' : '',
    // student-specific data
    youthOrganization: prefilledSignup ? 'Unicef' : '',
    grade: prefilledSignup ? '7' : '',
    schoolType: prefilledSignup ? 'middle' : '',
    // tutor-specific data
    semester: prefilledSignup ? '5' : '',
    fieldOfStudy: prefilledSignup ? 'Theoretical Physics' : '',
    // subjects info
    subjects: prefilledSignup ? ['Physics', 'Math', 'English', 'Biology'] : [],
  },
  tutorsList: [],
  studentsList: [],
  singlePersonView: null,
};