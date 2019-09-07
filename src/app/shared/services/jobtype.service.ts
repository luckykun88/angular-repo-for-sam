import { Jobtype } from './../models/jobtype.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class JobtypeService {

  private basePath = 'jobTypes';

  constructor(private db: AngularFireDatabase) { }

  addJobType(data: Jobtype) {
    return this.db.list(this.basePath).push({
      name: data.name,
      small: data.small,
      medium: data.medium,
      high: data.high
    });
  }

  getJobTypes() {
    return this.db.list(this.basePath);
  }

  getSpecificJobType(key: string) {
    return this.db.object(`${this.basePath}/${key}`).valueChanges();
  }

  updateJobType(data, key) {
    this.db.object(`${this.basePath}/${key}`).update({
      name: data.name,
      small: data.small,
      medium: data.medium,
      high: data.high
    });
  }

  deleteJobType(key) {
    this.db.object(`${this.basePath}/${key}`).remove();
  }

}
