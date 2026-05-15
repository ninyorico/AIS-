import * as AuthAdapter from "../adapters/authAdapters.js";

export const registerStudent = async (studentProfile) => {

if(studentProfile.firstName === ''){
    throw new Error("first name is required");
}
return await AuthAdapter.create(studentProfile)
}

export const getStudentProfile = async (studentId) => {
    if (!studentId) {
        throw new Error('Student ID is required');
    }
    return await authAdapter.findById(studentId);
};