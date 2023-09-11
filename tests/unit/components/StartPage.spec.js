import { mount, createLocalVue } from '@vue/test-utils';
import StartPage from '@/components/StartPage.vue';
import vuetify from '@/plugins/vuetify';

const localVue = createLocalVue();
localVue.use(vuetify);

describe('StartPage.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(StartPage, { localVue, vuetify });
  });

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the "Sistema Acadêmico" text', () => {
    const heading = wrapper.find('h1.display-2');
    expect(heading.text()).toBe('Sistema Acadêmico');
  });

  it('contains buttons with correct routes', () => {
    const alunosButton = wrapper.find('v-btn[to="/alunos"]');
    const disciplinasButton = wrapper.find('v-btn[to="/disciplinas"]');
    const cursosButton = wrapper.find('v-btn[to="/cursos"]');
    const professoresButton = wrapper.find('v-btn[to="/professores"]');

    expect(alunosButton.exists()).toBe(true);
    expect(disciplinasButton.exists()).toBe(true);
    expect(cursosButton.exists()).toBe(true);
    expect(professoresButton.exists()).toBe(true);

    expect(alunosButton.text()).toBe('Alunos');
    expect(disciplinasButton.text()).toBe('Disciplinas');
    expect(cursosButton.text()).toBe('Cursos');
    expect(professoresButton.text()).toBe('Professores');
  });
});
