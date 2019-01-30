import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ContactForm} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContactFormRepository extends DefaultCrudRepository<
  ContactForm,
  typeof ContactForm.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ContactForm, dataSource);
  }
}
