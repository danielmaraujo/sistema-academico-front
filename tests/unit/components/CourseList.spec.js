import { mount, createLocalVue } from '@vue/test-utils';
import CourseList from '@/components/CourseList.vue';
import vuetify from '@/plugins/vuetify';

const localVue = createLocalVue();
localVue.use(vuetify);

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{id: "BSI", name: "Sistemas de Informação"}] })),
}));

describe('CourseList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CourseList, { localVue, vuetify });
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.destroy();
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('fetches and displays data', async () => {
    await wrapper.vm.$nextTick();

    const rows = wrapper.findAll('tbody tr');
    expect(rows.length).toBe(1);

    const rowCells = rows.at(0).findAll('td');
    expect(rowCells.length).toBe(2);
    expect(rowCells.at(0).text()).toBe('BSI');
    expect(rowCells.at(1).text()).toBe('Sistemas de Informação');
  });
});
