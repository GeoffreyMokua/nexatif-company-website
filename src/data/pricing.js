const planMonthly = [
  {
    id: 1,
    title: 'Basic',
    content:
      'Only the basics - Everything you need to get started. Best for startup',
    price: '19',
    period: 'month',
    listItem: [
      { list: '5 Analytics Campaign', isActive: false },
      { list: 'Branded Reports', isActive: true },
      { list: '500 Keywords', isActive: false },
      { list: '0 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
  {
    id: 2,
    popular: { isPopular: true },
    title: 'Standard',
    content:
      'When you are ready to grow, We will grow with you. Get a Standard plan',
    price: '39',
    period: 'month',
    listItem: [
      { list: '30 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '700 Keywords', isActive: false },
      { list: '100 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    btnStyle: 'btn-primary-round',
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
  {
    id: 3,
    title: 'Professional',
    content:
      'Ready to kick it up a notch? Go for big with Professional membership',
    price: '69',
    period: 'month',
    listItem: [
      { list: '50 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '900 Keywords', isActive: true },
      { list: '200 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
];

const planYearly = [
  {
    id: 1,
    title: 'Basic',
    content:
      'Only the basics - Everything you need to get started. Best for startup',
    price: '119',
    period: 'year',
    listItem: [
      { list: '5 Analytics Campaign', isActive: false },
      { list: 'Branded Reports', isActive: true },
      { list: '500 Keywords', isActive: false },
      { list: '0 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
  {
    id: 2,
    popular: { isPopular: true },
    title: 'Standard',
    content:
      'When you are ready to grow, We will grow with you. Get a Standard plan',
    price: '139',
    period: 'year',
    listItem: [
      { list: '30 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '700 Keywords', isActive: false },
      { list: '100 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    btnStyle: 'btn-primary-round',
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
  {
    id: 3,
    title: 'Professional',
    content:
      'Ready to kick it up a notch? Go for big with Professional membership',
    price: '169',
    period: 'year',
    listItem: [
      { list: '50 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '900 Keywords', isActive: true },
      { list: '200 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
];

// All 3 Seperate Plans

const planBasic = [
  {
    id: 1,
    title: 'Basic',
    content:
      'Only the basics - Everything you need to get started. Best for startup',
    price: '19',
    period: 'month',
    listItem: [
      { list: '5 Analytics Campaign', isActive: false },
      { list: 'Branded Reports', isActive: true },
      { list: '500 Keywords', isActive: false },
      { list: '0 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
];

const planStandard = [
  {
    id: 1,
    title: 'Standard',
    content:
      'When you are ready to grow, We will grow with you. Get a Standard plan',
    price: '39',
    period: 'month',
    listItem: [
      { list: '30 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '700 Keywords', isActive: false },
      { list: '100 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
];

const planProfessional = [
  {
    id: 1,
    title: 'Professional',
    content:
      'Ready to kick it up a notch? Go for big with Professional membership',
    price: '69',
    period: 'month',
    listItem: [
      { list: '50 Analytics Campaign', isActive: true },
      { list: 'Branded Reports', isActive: true },
      { list: '900 Keywords', isActive: true },
      { list: '200 Social Account', isActive: true },
      { list: 'Phone & Email Support', isActive: true },
    ],
    buttonTitle: 'Choose plan',
    buttonLink: '/pricing',
  },
];

export { planMonthly, planYearly, planBasic, planStandard, planProfessional };
