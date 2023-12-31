import axios from "axios";
import { sprintf } from "sprintf-js";
import {
  FORM_LIST_REQUEST,
  FORM_LIST_SUCCESS,
  FORM_LIST_FAIL,
  FORM_ALL_LIST_REQUEST,
  FORM_ALL_LIST_SUCCESS,
  FORM_ALL_LIST_FAIL,
  FORM_LIST_MY_REQUEST,
  FORM_LIST_MY_SUCCESS,
  FORM_LIST_MY_FAIL,
  FORM_LIST_USER_REQUEST,
  FORM_LIST_USER_SUCCESS,
  FORM_LIST_USER_FAIL,
  FORM_DETAILS_REQUEST,
  FORM_DETAILS_SUCCESS,
  FORM_DETAILS_FAIL,
  FORM_SUBMITTED_REQUEST,
  FORM_SUBMITTED_SUCCESS,
  FORM_SUBMITTED_FAIL,
  FORM_DELIVER_FAIL,
  FORM_DELIVER_REQUEST,
  FORM_DELIVER_SUCCESS,
  FORM_DAILY_MY_REQUEST,
  FORM_DAILY_MY_SUCCESS,
  FORM_DAILY_MY_FAIL,
} from "../../constants/form.js";
import apiUri from "../../constants/api";

const listForms = (pageNumber = "", recordsPerPage = "20") => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: FORM_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      sprintf(apiUri.listForms, pageNumber, recordsPerPage),
      config
    );

    dispatch({
      type: FORM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const listAllForms = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_ALL_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(apiUri.listAllForms, config);

    dispatch({
      type: FORM_ALL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_ALL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const deliverForm = (form) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      sprintf(apiUri.deliverForm, form._id),
      {},
      config
    );

    dispatch({
      type: FORM_DELIVER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FORM_DELIVER_FAIL,
      payload: message,
    });
  }
};

const listUserForms = (userId) => async (dispatch, getState) => {
  console.log("List USER FORMS :", userId);
  try {
    dispatch({
      type: FORM_LIST_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      sprintf(apiUri.listUserForms, userId),
      config
    );

    dispatch({
      type: FORM_LIST_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FORM_LIST_USER_FAIL,
      payload: message,
    });
  }
};

const listMyForms = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_LIST_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(apiUri.listMyForms, config);

    dispatch({
      type: FORM_LIST_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FORM_LIST_MY_FAIL,
      payload: message,
    });
  }
};

const submitForm = (formFields) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_SUBMITTED_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(apiUri.forms, formFields, config);

    dispatch({
      type: FORM_SUBMITTED_SUCCESS,
      payload: data,
    });
    dispatch(listMyForms());
  } catch (error) {
    dispatch({
      type: FORM_SUBMITTED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

const getFormDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(sprintf(apiUri.formDetails, id), config);

    dispatch({
      type: FORM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
const getMyDailyForm = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORM_DAILY_MY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(apiUri.dailyForm, config);

    dispatch({
      type: FORM_DAILY_MY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FORM_DAILY_MY_FAIL,
      payload: message,
    });
  }
};

export {
  listForms,
  listAllForms,
  listMyForms,
  deliverForm,
  listUserForms,
  submitForm,
  getFormDetails,
  getMyDailyForm,
};
