const academicData = {
  course: {
    courseCode: String,
    courseName: String,
    marksObtained: Number,
    marksTotal: Number,
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
