import { config } from './request.config'

import customAxios from './axios-mixin';

const API_URL = "/submission";


class SubmissionService {

  save(submission) {
    return customAxios.post(API_URL, submission, config);
  }

  delete(submission) {
    return customAxios.delete(API_URL + "/" + submission.id, config);
  }

  findAll() {
    return customAxios.get(API_URL, config)
  }

 }

 export default new SubmissionService();