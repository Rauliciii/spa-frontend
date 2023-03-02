export default class Submission {
  constructor(id, name, description, country, price, submissionType, createTime) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.submissionType = submissionType;
    this.createTime = createTime;
    this.description = description;
    this.price = price;
  }


}