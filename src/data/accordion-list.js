const faqData = [
  {
    id: 1,
    title: 'I have some questions about privacy. Who can I ask?',
    content:
      'Our company has a great communications standby to answer your questions. Once you reach us a response is always available in the next 24 hours. All questions are handled privately and with full professionalism.',
    listItem: [
      { list: 'Success is something of which we all want more' },
      { list: 'Most people believe that success is difficult' },
      { list: 'There are basically six key areas to higher achievement' },
      { list: 'Believing in yourself and those around you' },
      { list: 'Making a decision to do something' },
    ],
  },
  {
    id: 2,
    title: 'What is the cost of a Service Agreement?',
    content:
      'A fee-for-service agreement is a way you can either bill or pay for products or services rendered. This is a popular payment structure in many industries, including healthcare and telecommunications. It has its own set of benefits and drawbacks that you should be aware of if you are considering this as a billing strategy for your own business.',
    listItem: [
      { list: 'Making the decision' },
      { list: 'Clarity – developing the Vision' },
      {
        list: 'Commitment – understanding the price and having the willingness to pay that price',
      },
      { list: 'Belief – believing in yourself and those around you' },
      { list: 'Taking action – practice Ready, Fire, Aim…' },
    ],
  },
  {
    id: 3,
    title: 'Why IT Staff Management?',
    content:
      'Employing staff management strategies in your organisation can have a significant impact on, well, everything. From employee experience to performance optimisation to achieving objectives and way more.',
    listItem: [
      { list: 'So, how can we stay on course with all the distractions' },
      {
        list: 'The best way is to develop and follow a plan. Start with your goals',
      },
      {
        list: 'What steps are required to get you to the goals? Make the plan as detailed as possible.',
      },
      { list: 'Try to visualize and then plan for, every possible setback.' },
      {
        list: 'Commit the plan to paper and then keep it with you at all times.',
      },
    ],
  },
  {
    id: 4,
    title: 'I am worried about e-mail scams...',
    content:
      'Email scams can steal sensitive information such as passwords, credit card numbers, account data, addresses, and more. Phishing emails are crafted to appear legitimate, such as messages from your bank or another trusted source. They request personal information, which criminals then use for identity theft.',
    listItem: [
      { list: 'If the answer is no, you may want to reconsider doing it' },
      {
        list: 'I coach my clients to practice the 3 D’s – Defer, Delegate or Delete',
      },
      { list: 'Can the particular activity be done later? Defer it!' },
      {
        list: 'Commitment is something that comes from understanding that everything',
      },
      {
        list: 'This is important because nobody wants to put significant effort into',
      },
    ],
  },
  {
    id: 5,
    title: 'What are the Benefits of our service?',
    content:
      ' We provide quality servicesto our clients on various indutries. Our clients are all satisfied and we have equiped them with the relevant solutions to them.',
    listItem: [
      { list: 'One of the main areas that I work on with my clients' },
      { list: 'And it’s not just parents that are the cause – teachers' },
      { list: 'Nothing changes until something moves' },
      { list: 'Get the oars in the water and start rowing.' },
      { list: 'Execution is the single biggest factor in achievement' },
    ],
  },
];

const careersData = [
  {
    id: 1,
    title: 'IT & Security Manager',
    content:
      'Cybersecurity managers are equal parts technologist and manager. They must be conversant in modern security software, protocols, practices and regulations. They must also have managerial skills to work across departments and interact with upper management.',
    listItem: [
      { list: 'Intrusion detection and prevention. ' },
      { list: 'Identity and access management.' },
      { list: 'Security incident handling and response.' },
      { list: 'Audit and regulatory compliance.' },
      { list: 'Application security development.' },
    ],
  },
  {
    id: 2,
    title: 'Junior HR Business Partner',
    content:
      'Junior HR business partner provides day-to-day performance management guidance to leaders (coaching, counseling, career development, disciplinary actions) and coordinate with Employee Relations and Employment Law as needed.',
    listItem: [
      { list: 'Manage the year end compensation planning process while ensuring a strong link to performance.' },
      { list: 'Drive HR initiatives and projects.' },
      {
        list: 'Reinforce Policies & Practices – Promptly escalate and assist to resolve issues.',
      },
      { list: 'Manage the year end compensation planning process while ensuring a strong link to performance.' },
      { list: 'Managing of HR development processes in field Sales Team members, including proposing solutions and training.' },
    ],
  },
  {
    id: 3,
    title: 'Junior Outreach Representative',
    content:
      'An outreach specialist is primarily responsible for organizing and managing social service programs that promote health and wellness within a community. They typically conduct research and assessments to determine the community needs, thoroughly plan events and programs, participate in hiring staff and volunteers, and liaise with sponsors and suppliers. Often reporting to a manager or supervisor, an outreach specialist must also perform clerical tasks such as producing progress reports, preparing necessary documentation, managing schedules, arranging appointments, and even responding to inquiries and concerns.',
    listItem: [
      { list: 'Create PowerPoint presentations for events.' },
      {
        list: 'Maintain a high level of confidentiality and professionalism guidelines.',
      },
      {
        list: 'What steps are required to get you to the goals? Make the plan as detailed as possible.',
      },
      { list: 'Try to visualize and then plan for, every possible setback.' },
      {
        list: 'Commit the plan to paper and then keep it with you at all times.',
      },
    ],
  },
  {
    id: 4,
    title: 'Senior Salesforce Developer',
    content:
      'We are looking for Salesforce Developer to join our technical team. As a Salesforce Developer, you will help develop custom code and applications for our clients. We are looking for candidates who stay updated with the latest technology trends, work well in a fast-paced environments, and can solve problems independently or collaboratively. You will report to our Senior Director, Technical Services.',
    listItem: [
      { list: 'Develop and maintain Salesforce applications using Aura, LWC, Apex, Visualforce, and Salesforce Flow.' },
      {
        list: 'Design and manage data models, including custom objects, queries, and metadata.',
      },
      { list: 'Use Batch Apex for efficient data processing and handle bulk data loading.' },
      {
        list: 'Integrate Salesforce with external web services.',
      },
      {
        list: 'Follow agile/Scrum/Lean methodologies.',
      },
      {
        list: 'Familiarity with Professional Services or the Financial Services industry is a plus',
      }
    ],
  },
  {
    id: 5,
    title: 'Senior Business Development Manager',
    content:
      'Senior business development managers use extensive industry knowledge and heightened strategic planning abilities to assist businesses in making decisions that can promote growth and success. They create strategic plans, determine customer requirements and examine the commercial potential of products and services.',
    listItem: [
      { list: 'Developing and executing marketing strategies to promote the organization’s products or services to new customers.' },
      { list: 'Participating in strategic planning sessions with senior management to identify business opportunities and develop plans for growth.' },
      { list: 'Presenting proposals to clients that outline pricing terms and other details of working together with the client.' },
      { list: 'Studying the client’s industry to determine which products or services would be most beneficial for them to offer.' },
      { list: 'Developing and managing long term relationships with clients to ensure continued satisfaction with the company’s services or products.' },
    ],
  },
];

export default faqData;
export { careersData };
