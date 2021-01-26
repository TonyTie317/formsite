import { combineReducers } from "redux";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userListDeptReducer,
} from "./user";
import {
  formSubmitReducer,
  formListReducer,
  formDeliverReducer,
  formDetailsReducer,
  formListMyReducer,
  formMyDailyReducer,
} from "../reducers/form";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userListDept: userListDeptReducer,
  formSubmit: formSubmitReducer,
  formDetails: formDetailsReducer,
  formList: formListReducer,
  formDeliver: formDeliverReducer,
  formListMy: formListMyReducer,
  formDailyMy: formMyDailyReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});
