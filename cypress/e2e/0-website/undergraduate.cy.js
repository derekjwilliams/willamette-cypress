/// <reference types="cypress" />

// This spec file contains a simple tests for the Willamette undergraduate programs page

describe('Willamette Undergraduate Page', () => {

  const undergraduateUrls = new Map([
    ['aes/index.html', 'American Ethnic Studies information'],
    ['https://willamette.edu/undergraduate/asp/index.html', 'American Studies Program Information'],
    ['https://pnca.willamette.edu/academics/bfa/animated-arts', ''],
    ['arch/index.html', 'Archaeology Information'],
    ['arts/index.html', 'Studio Art Information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Art &amp; Ecology program information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Art History program information'],
    ['arth/index.html', 'Art History Information'],
    ['atm/index.html', 'Arts, Technology, and Multimedia Information'],
    ['asianstudies/index.html', 'Asian Studies Information'],
    ['https://willamette.edu/mba/programs/eccc/formats/ba-mba/index.html', 'BA/MBA - Business Management (3+2) Program Information'],
    ['biology/index.html', 'Biology Information'],
    ['business/index.html', 'Business Program Information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Ceramics program information'],
    ['chem/index.html', 'Chemistry Information'],
    ['jc/chinese/index.html', 'Chinese Studies Information'],
    ['cinema/index.html', 'Cinema Studies Information'],
    ['ccm/index.html', 'Civic Communication and Media Information'],
    ['classics/index.html', 'Classical Studies Information'],
    ['computer-science/index.html', 'Computer Science Information'],
    ['http://pnca.willamette.edu/academics/bfa/creative-writing',, ''],
    ['data-science/index.html', 'Data Science Information'],
    ['https://willamette.edu/computer-data-science/programs/data-science-bs-ms/index.html', 'Data Science BS/MS (3+1) Program Information'],
    ['https://willamette.edu/law/admissions/direct-admission/index.html', 'BA/JD - Law (3+3)Program Information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Drawing program information'],
    ['economics/index.html', 'Economics Information'],
    ['physics/info/engineering/index.html', 'Engineering 3-2 Program Information'],
    ['english/index.html', 'English Information'],
    ['envs/index.html', 'Environmental Science Information'],
    ['exsci/index.html', 'Exercise and Health Science Information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Fashion program information'],
    ['forestry/index.html', 'Forestry 3-2 Program Information'],
    ['fi/index.html', 'French and Francophone Studies Information'],
    ['http://pnca.willamette.edu/academics/bfa/minors', 'Game program information'],
    ['http://pnca.willamette.edu/academics/bfa/general-fine-arts', 'General Fine Arts program information'],
    ['gr/index.html', 'German Information'],
    ['gcs/index.html', 'Global Cultural Studies Information'],
    ['http://pnca.willamette.edu/academics/bfa/design', 'Graphic Design program information'],
    ['health-professions/index.html', 'Health Professions Program Information'],
    ['history/index.html', 'History Information'],
    ['humanities/index.html', 'Humanities Information'],
    ['http://pnca.willamette.edu/academics/bfa/illustration', 'Illustration program information'],
    ['individualized-major/index.html', 'Individualized Major Program Information'],
    ['http://pnca.willamette.edu/academics/bfa/intermedia', 'Intermedia program information'],
    ['intlstudies/index.html', 'International Studies Program Information'],
    ['jc/japanese/index.html', 'Japanese Studies Program Information'],
    ['latinamericanstudies/index.html', 'Latin American Studies Program Information'],
    ['math/index.html', 'Mathematics Program Information'],
    ['music/index.html', 'Music Program Information'],
    ['https://pnca.willamette.edu/academics/bfa/painting', 'Painting program information'],
    ['philosophy/index.html', 'Philosophy Program Information'],
    ['https://pnca.willamette.edu/academics/bfa/photography', 'Photography program information'],
    ['physics/index.html', 'Physics Program Information'],
    ['politics-policy-law-ethics/index.html', 'Politics, Policy, Law and Ethics Program Information'],
    ['prelaw/index.html', 'Pre-Law Program Information'],
    ['https://pnca.willamette.edu/academics/bfa/printmaking', ''],
    ['psychology/index.html', 'Psychology Program Information'],
    ['public-health/index.html', 'Public Health Program Information'],
    ['religion/index.html', 'Religious Studies Program Information'],
    ['gr/index.html', 'Russian Program Information'],
    ['http://pnca.willamette.edu/academics/bfa/sculpture', 'Sculpture program information'],
    ['sociology/index.html', 'Sociology Program Information'],
    ['spanish/index.html', 'Spanish Program Information'],
    ['sustainability/index.html', 'Sustainability Program Information'],
    ['theatre/index.html', 'Theatre Program Information'],
    ['http://pnca.willamette.edu/academics/bfa/video-sound', ''],
    ['wgs/index.html', 'Women\'s and Gender Studies Program Information'],
  ])

  const MinorPrograms = ['arch/index.html', 'arts/index.html'] // Finish this array
  beforeEach(() => {
    cy.visit('https://willamette.edu/undergraduate/')
  })

  // it Make sure that there is more than one card
  // it Make sure that there is more than one card with majors 
  // it Make sure that there is more than one card with minors 
})



