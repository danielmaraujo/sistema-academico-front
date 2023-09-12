import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import SubjectForm from '@/components/SubjectForm.vue';

Vue.use(Vuetify);

const localVue = createLocalVue();

jest.mock('@/services/SubjectService', () => ({
  createSubject: jest.fn(),
}));

describe('SubjectForm.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('should emit subjectCreated event when form is submitted', async () => {
    const wrapper = mount(SubjectForm, {
      localVue,
      vuetify,
    });

    wrapper.setData({
      newSubject: {
        name: 'Test Subject',
        courseLoad: 3,
        professorId: 'Test Professor',
        courseId: 'Test Course',
      },
    });

    const form = wrapper.find('form');
    await form.trigger('submit.prevent');

    expect(require('@/services/SubjectService').createSubject).toHaveBeenCalledWith({
      name: 'Test Subject',
      courseLoad: 3,
      professorId: 'Test Professor',
      courseId: 'Test Course',
    });

    expect(wrapper.emitted('subjectCreated')).toBeTruthy();
    expect(wrapper.emitted('subjectCreated')[0][0]).toEqual({
      name: 'Test Subject',
      courseLoad: 3,
      professorId: 'Test Professor',
      courseId: 'Test Course',
    });
  });
});
