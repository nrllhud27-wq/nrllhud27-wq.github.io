---
title: 'Retail Customer Churn Analysis'
description: 'Customer segmentation with RFM analysis and a Logistic Regression model that estimates churn probability for a retail business, presented in a Power BI dashboard.'
category: data-analytics
secondaryCategory: machine-learning
tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Power BI']
status: completed
featured: true
date: 2026-07-31

thumbnail: '../../assets/projects/retail-churn-dashboard.png'
thumbnailAlt: 'Power BI dashboard for customer churn showing total customers, average churn risk, total transactions, customer segment distribution, churn risk by product, and churn risk by recency.'

githubUrl: 'https://github.com/nrllhud27-wq/retail-customer-churn-python-powerbi'
metrics:
  - label: 'Customers analyzed'
    value: '73,194'
  - label: 'Average churn risk (model estimate)'
    value: '53.15%'
  - label: 'Customer segments'
    value: '4'
---

## Project Overview

This project analyzes customer behavior in a retail business and estimates the probability that each customer will churn. Customers are first segmented with RFM (Recency, Frequency, Monetary) analysis into four groups: Loyal, Regular, At Risk, and Lost.

A Logistic Regression model then estimates churn probability for each customer. The Recency variable is excluded from the model to avoid data leakage. The prediction results are exported to a CSV file that serves as the data source for an interactive Power BI dashboard supporting data-driven business decisions.

## Key Findings

- The Clothing category has the highest average churn probability among all product categories.
- Most customers made their last purchase more than 90 days ago, making this group the largest contributor to churn risk.