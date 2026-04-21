import * as AuthAdapter from "../adapters/authAdapters.js";

export const registerStudent = async (studentProfile) => {

if(studentProfile.firstName === ''){
    throw new Error("first name is required");
}
return await AuthAdapter.create(studentProfile)
}