import * as AuthService from "../services/authServices.js";
import * as authAdapters from "../adapters/authAdapters.js";
export const registerStudent = async (req, res) => {
    const {firstName, lastName, dob, course, major, address, status} = req.body;
    try{
        const studentProfile = {
            firstName, lastName, dob, course, major, address, status
        }
        const result = await AuthService.registerStudent(studentProfile);
        res.status(201).json({
            success: true,
            message: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occured while registering the student"
        });
    }
}

export const getStudentProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const studentProfile = await authAdapters.findById(id);

    res.status(200).json({
      success: true,
      studentProfile
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};