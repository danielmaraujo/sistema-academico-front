import { mount, createLocalVue } from '@vue/test-utils';
import ProfessorList from '@/components/ProfessorList.vue';
import vuetify from '@/plugins/vuetify';

const localVue = createLocalVue();
localVue.use(vuetify);

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{username: "fernando",password: "123",name: "Fernando"}] })),
}));

describe('ProfessorList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ProfessorList, { localVue, vuetify });
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
    expect(rowCells.at(0).text()).toBe('fernando');
    expect(rowCells.at(1).text()).toBe('Fernando');
  });
});