import { createApp } from 'vue'
import App from './App.vue'
import MainContainer from './components/main.vue'
import AboutContainer from './components/about.vue'
import SkillsContainer from './components/skills.vue'
import ResumeContainer from './components/resume.vue'
import ProjectContainer from './components/projects.vue'
import ContactContainer from './components/contact.vue'

const app = createApp(App);

app.component('main-container', MainContainer)
app.component('about-container', AboutContainer)
app.component('skills-container', SkillsContainer)
app.component('resume-container', ResumeContainer)
app.component('projects-container', ProjectContainer)
app.component('contact-container', ContactContainer)
app.mount('#app');