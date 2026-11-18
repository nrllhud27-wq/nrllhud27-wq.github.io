---
title: 'HR Employee Attrition & Productivity Analysis'
description: 'Statistical analysis of 100,000 employee records to identify which factors influence attrition, job satisfaction, and performance.'
category: data-analytics
secondaryCategory: data-science
tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'SciPy', 'Statsmodels']
status: completed
featured: true
date: 2026-08-01
githubUrl: 'https://github.com/nrllhud27-wq/hr-attrition-productivity-analysis'
metrics:
  - label: 'Employee records'
    value: '100,000'
  - label: 'Attrition rate'
    value: '10.01%'
  - label: 'Performance vs. salary correlation'
    value: 'r = 0.51 (p < 0.001)'
---

## Project Overview

This project analyzes 100,000 employee records to identify the factors that influence employee attrition, job satisfaction, and performance, using exploratory data analysis (EDA) and statistical hypothesis testing in Python.

The overall attrition rate is 10.01%. Overtime hours, workload, remote work frequency, tenure, and gender show no statistically significant relationship with employee satisfaction or attrition (all p-values > 0.05). Performance score is moderately correlated with monthly salary (r = 0.51, p < 0.001), while promotion rates remain nearly identical across performance levels.

## A Note on the Data

The dataset shows characteristics of synthetic data, with near-zero correlations across most variables. Rather than forcing unsupported conclusions, this project reports statistically validated findings, including the absence of significant relationships.