const academicData = {
  course: {
    courseCode: {
      type: String,
      required: true,
      default: "NA",
    },
    courseName: {
      type: String,
      required: true,
      default: "NA",
    },
    marksObtained: {
      type: Number,
      default: 0,
    },
    marksTotal: {
      type: Number,
      default: 0,
    },
  },
};

const student = {
  name: {
    type: String,
    required: true,
    default: "addName",
  },
  age: {
    type: Number,
    default: 0,
  },
  semster: {
    type: Number,
    default: 0,
  },
  branch: {
    type: String,
    required: true,
    default: "addBranch",
  },
  regNumber: {
    type: Number,
    required: true,
    unique: true,
    default: 0,
  },
};

module.exports = { academicData, student };
