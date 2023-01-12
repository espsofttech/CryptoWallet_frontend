import { getRequest, postRequest, putRequest, deleteRequest, postRequestFormData, putRequestFormData } from "../coreFiles/helper";

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


export const updatePasswordAction = (data) => {
   return postRequest('changePassword', data).then(res => { return res.data })
}

export const getgetadminbankdetailsAction = (data) => {
   return postRequest('getadminbankdetails', data).then(res => { return res.data })
}

export const getgetuserbankdetailsAction = (data) => {
   return getRequest(`getBankDetailsById/${data.id}`).then(res => { return res.data })
}

export const updateupdateuserbankdetailsAction = (data) => {
   console.log('data:', data)
   return putRequestFormData(`updateBankDetails/${data.id}`, data).then((res) => {
      return res.data;
   });
}

export const showkycAction = (data) => {
   return getRequest(`getKycDetailById/${data.id}`).then(res => { return res.data })
}

export const updatekycAction = (data) => {
   return postRequestFormData('InsertKycData', data).then(res => { return res.data })
}