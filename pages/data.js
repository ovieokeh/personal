export default {
  name: 'Ovie Okeh',
  shortIntro: 'I guzzle gasoline & sauce',
  longIntro: `I'm a frontend developer based in Utrecht, NL specializing in building
  (and occasionally designing) highly dynamic websites, applications, and
  everything in between.`,
  roles: ['Software Developer', 'Technical Writer', 'B. Pepper'],
  technologies: [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Node.js',
  ],
  experience: [
    {
      company: 'Eurail BV.',
      url: 'https://eurail.com',
      designation: 'Frontend Developer',
      date: 'Jun 2020 - Present',
      roles: [
        'Develop and ship software for the sales of rail passes in Europe',
        'Plan and refine plans for new and existing projects using an agile methodology',
        'Write technical reports or other documentation, such as research findings, project structure and code conventions',
        'Ensure quality code by participating in frequent code reviews',
        'Evaluate product usage data to evaluate conformance to customer expectations and quality standards',
      ],
    },
    {
      company: 'Andela',
      url: 'https://andela.com',
      designation: 'Software Engineer',
      date: 'Oct 2018 - Jan 2020',
      roles: [
        'Work with internal product and external partner teams to fulfil engineering demand',
        'Ideate and spearhead new features and code quality metrics for internal products and codebases',
        'Train and mentor less experienced developers to help them deliver code faster',
        'Maintain internal code quality by advocating for the addition of end to end testing to the development pipeline',
      ],
    },
    {
      company: 'The LogRocket Blog',
      url: 'https://blog.logrocket.com/author/ovieokeh',
      designation: 'Independent Technical Writer',
      date: 'Mar 2019 - Present',
      roles: [
        'Research and refine potential articles to be published on the LogRocket Blog',
        'Collaborate with in-house editors to create long-form text content in the form of tutorials, guides, and opinion pieces',
        'Design graphic illustrations using Adobe Illustrator and Figma to accompany articles',
      ],
    },
  ],
  projects: [
    {
      name: 'My Personal Website',
      description:
        "The website you're currently on. It's based off of Brittany Chiang's amazing design. It's also a way for me to gain more experience with Vue.",
      tags: ['Vue', 'SCSS', 'JavaScript'],
      demo: '/',
      source: 'https://github.com/ovieokeh/ovie.dev',
      image: 'personal-website-ss.png',
      type: 'Project',
    },
    {
      name: 'Shopstack',
      description:
        "A full-stack e-commerce project I did for a technical assessment. I didn't get the job but I retained the skills. Check it out.",
      tags: ['React', 'SQL', 'JavaScript', 'CSS'],
      demo: 'http://shopstack-e.herokuapp.com/',
      source: 'https://github.com/ovieokeh/shopstack',
      image: 'shopstack-ss.png',
      type: 'Project',
    },
    {
      name: 'Google Maps React Integration',
      description:
        'A demo app showing how to integrate Google Maps in React. It accompanies an article linked below.',
      tags: ['React', 'Google Maps', 'JavaScript', 'CSS'],
      demo:
        'https://blog.logrocket.com/a-practical-guide-to-integrating-google-maps-in-react/',
      source: 'https://github.com/ovieokeh/contact-page-with-google-maps',
      image: 'gmaps-integration-ss.png',
      type: 'Blog post',
    },
  ],
}
