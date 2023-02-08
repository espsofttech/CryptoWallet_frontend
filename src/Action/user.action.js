import { getRequest, postRequest, putRequest, deleteRequest, postRequestFormData, putRequestFormData } from "../coreFiles/helper";

export const RegisterAction = (data) => {
   return postRequest('createUser', data).then(res => { return res.data })
}

export const LoginAction = (data) => {
   return postRequest('loginuser', data).then(res => { return res.data })
}
export const getFaqListAction = (data) => {
   return getRequest("getfaqDetails", data).then((res) => {
      return res.data;
   });
};

export const verifyAccountAction = (data) => {
   return postRequest('verifyAccount', data).then(res => { return res.data })
}
export const getAboutListAction = (data) => {
   return getRequest("getDetails1", data).then((res) => {
      return res.data;
   });
};

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

export const getAllActivityAction = (data) => {
   return getRequest(`userActivity/${data}`).then(res => { return res.data })
}


export const getdashBoardDataCountUserAction = (data) => {
   return getRequest(`getdashBoardDataCountUser/${data.id}`).then(res => { return res.data })
}

export const getAllDepositTransactionsAction = (data) => {
   return getRequest(`getAllDepositTransactionsbyuser/${data}`).then(res => { return res.data })
}

export const buyNowAction = (data) => {
   return postRequest(`exchange`, data).then(res => { return res.data })
}

export const withdrawCryptoAction = (data) => {
   return postRequest(`withdrawcrypto`, data).then(res => { return res.data })
}

export const withdrawBankAction = (data) => {
   return postRequest(`bankWithdraw`, data).then(res => { return res.data })
}

export const getAllWithdrawTransactionsAction = (data) => {
   return getRequest(`getAllWithdrawTransactionsbyuser/${data}`).then(res => { return res.data })
}

export const getAllTransactionsAction = (data) => {
   return getRequest(`getAllTransactionDetail/${data}`).then(res => { return res.data })
}

export const getAllDetailsOfcoinAction = (data) => {
   return getRequest(`getAllDetailsOfcoin/${data}`).then(res => { return res.data })
}

export const depositFiatAction = (data) => {
   return postRequestFormData(`depositFiat`, data).then(res => { return res.data })
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

export const getAllIdentity = (data) => {
   return getRequest('getAllIdentity', data).then(res => { return res.data })
}

export const getProfileAction = (data) => {
   console.log('data', data)
   return getRequest(`getUserDetailsById/${data}`).then(res => { return res.data })
}

export const UpdateProfileAction = (data) => {
   return putRequestFormData(`updateUser/${data.id}`, data).then(res => { return res.data })
}

export const twoAuthenticationAction = (data) => {
   return getRequest(`getQR/${data}`).then(res => { return res.data })
}

export const twoAuthenticationVerifyAction = (data) => {
   return postRequest(`twoAuthenticationVerify`, data).then(res => { return res.data })
}

export const ContactFormAction = (data) => {
   return postRequest('insertsupportDetails', data).then(res => { return res.data })
}
