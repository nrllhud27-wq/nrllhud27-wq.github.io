export interface Category {
  slug: string;
  title: string;
  description: string;
  icon: string; // inner SVG markup, drawn on a 24x24 grid
  skills: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'data-analytics',
      title: 'Data Analyst',
    description:
      'Transforming raw data into actionable insights through SQL, Excel, Python, and Power BI.',
    icon: '<rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="6" width="4" height="15" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>',
    skills: [
      'SQL (MySQL)',
      'Power BI',
      'DAX',
      'Excel',
      'Data Cleaning & Preprocessing',
      'Exploratory Data Analysis',
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description:
      'Exploring data through statistical analysis, data preprocessing, exploratory data analysis, and analytical techniques.',
    icon: '<circle cx="6" cy="15" r="1.6"/><circle cx="10" cy="10" r="1.6"/><circle cx="14" cy="14" r="1.6"/><circle cx="18" cy="7" r="1.6"/><path d="M3 19 L21 5"/>',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SciPy',
      'Statsmodels',
      'Statistical Hypothesis Testing',
      'RFM Segmentation',
      'Exploratory Data Analysis',
    ],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    description:
      'Building predictive models, evaluating algorithms, and applying machine learning techniques to real-world problems.',
    icon: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7 L10 11"/><path d="M7 17 L10 13"/><path d="M14 11 L17 7"/><path d="M14 13 L17 17"/>',
    skills: [
      'Python',
      'Scikit-learn',
      'Logistic Regression',
      'Random Forest',
      'Data Cleaning & Preprocessing',
    ],
  },
];