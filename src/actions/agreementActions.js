import * as types from '../constants/actionTypes';
import * as api from '../services/api'

export function agreementRequest(agreement) {
  return {type: types.AGREEMENT_FETCH_REQUEST, payload};
}
export function agreementSuccess(agreement) {
  return {type: types.AGREEMENT_FETCH_SUCCESS, payload};
}
export function agreementFailure(agreement) {
  return {type: types.AGREEMENT_FETCH_FAILURE, payload};
}

export function getAgreement(dispatch) {
  new Promise((resolve, reject) => {
    dispatch({});
    return api
      .getAgreement()
      .then((response) => dispatch({type: ypes.AGREEMENT_FETCH_SUCCESS, payload: response}))
      .catch((response) => dispatch({type: ypes.AGREEMENT_FETCH_FAILURE, payload: response}))
  })
}
