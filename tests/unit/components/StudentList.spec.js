import { mount, createLocalVue } from '@vue/test-utils';
import StudentList from '@/components/StudentList.vue';
import vuetify from '@/plugins/vuetify';

const localVue = createLocalVue();
localVue.use(vuetify);

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [{ id: 1, name: 'John', startYear: 2022, course: 'Computer Science' }] })),
}));

describe('StudentList.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(StudentList, { localVue, vuetify });
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
    expect(rowCells.length).toBe(4);
    expect(rowCells.at(0).text()).toBe('1');
    expect(rowCells.at(1).text()).toBe('John');
    expect(rowCells.at(2).text()).toBe('2022');
    expect(rowCells.at(3).text()).toBe('Computer Science');
  });
});
