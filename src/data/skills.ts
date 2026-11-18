export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages & Query',
    items: ['Python', 'SQL (MySQL)'],
  },
  {
    title: 'BI & Spreadsheets',
    items: ['Power BI', 'DAX', 'Excel'],
  },
  {
    title: 'Python Libraries',
    items: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'SciPy',
      'Statsmodels',
      'Scikit-learn',
    ],
  },
  {
    title: 'Analysis & Modeling',
    items: [
      'Exploratory Data Analysis',
      'Data Cleaning & Preprocessing',
      'Statistical Hypothesis Testing',
      'RFM Segmentation',
      'Logistic Regression',
      'Random Forest',
    ],
  },
  {
    title: 'Tools',
    items: ['Jupyter Notebook', 'Git & GitHub'],
  },
];