import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ContactForm} from '../models';
import {ContactFormRepository} from '../repositories';

export class ContactFormController {
  constructor(
    @repository(ContactFormRepository)
    public contactFormRepository : ContactFormRepository,
  ) {}

  @post('/contact-form', {
    responses: {
      '200': {
        description: 'ContactForm model instance',
        content: {'application/json': {schema: {'x-ts-type': ContactForm}}},
      },
    },
  })
  async create(@requestBody() contactForm: ContactForm): Promise<ContactForm> {
    return await this.contactFormRepository.create(contactForm);
  }

  @get('/contact-form/count', {
    responses: {
      '200': {
        description: 'ContactForm model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ContactForm)) where?: Where,
  ): Promise<Count> {
    return await this.contactFormRepository.count(where);
  }

  @get('/contact-form', {
    responses: {
      '200': {
        description: 'Array of ContactForm model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': ContactForm}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ContactForm)) filter?: Filter,
  ): Promise<ContactForm[]> {
    return await this.contactFormRepository.find(filter);
  }

  @patch('/contact-form', {
    responses: {
      '200': {
        description: 'ContactForm PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() contactForm: ContactForm,
    @param.query.object('where', getWhereSchemaFor(ContactForm)) where?: Where,
  ): Promise<Count> {
    return await this.contactFormRepository.updateAll(contactForm, where);
  }

  @get('/contact-form/{id}', {
    responses: {
      '200': {
        description: 'ContactForm model instance',
        content: {'application/json': {schema: {'x-ts-type': ContactForm}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<ContactForm> {
    return await this.contactFormRepository.findById(id);
  }

  @patch('/contact-form/{id}', {
    responses: {
      '204': {
        description: 'ContactForm PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() contactForm: ContactForm,
  ): Promise<void> {
    await this.contactFormRepository.updateById(id, contactForm);
  }

  @put('/contact-form/{id}', {
    responses: {
      '204': {
        description: 'ContactForm PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() contactForm: ContactForm,
  ): Promise<void> {
    await this.contactFormRepository.replaceById(id, contactForm);
  }

  @del('/contact-form/{id}', {
    responses: {
      '204': {
        description: 'ContactForm DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contactFormRepository.deleteById(id);
  }
}
