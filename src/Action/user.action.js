import { getRequest, postRequest, putRequest, deleteRequest, postRequestFormData } from "../coreFiles/helper";

export const RegisterAction = (data) => {
   return postRequest('createUser', data).then(res => { return res.data })
}

export const LoginAction = (data) => {
   return postRequest('loginuser', data).then(res => { return res.data })
}

export const verifyAccountAction = (data) => {
   return postRequest('verifyAccount', data).then(res => { return res.data })
}


export const ForgotPasswordAction = (data) => {
   return postRequest('forgetPassword', data).then(res => { return res.data })
}

export const ResetPasswordAction = (data) => {
   return postRequest('resetPassword', data).then(res => { return res.data })
}