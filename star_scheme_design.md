Section 1: Schema Overview
FACT TABLE: fact_sales

Central table used to analyze sales transactions

Grain: One row per product per order line item

Business Process: Customer sales

Measures (Facts):

quantity_sold – Number of units sold

unit_price – Price per unit at time of sale

discount_amount – Discount applied

total_amount – Final revenue (quantity × unit_price − discount)

Foreign Keys:

date_key → dim_date

product_key → dim_product

customer_key → dim_customer

DIMENSION TABLE: dim_date

Used for time-based sales analysis

Type: Conformed dimension

Attributes:

date_key (PK) – Surrogate key (YYYYMMDD)

full_date – Actual date

day_of_week – Day name

month, month_name – Month details

quarter – Q1 to Q4

year – Calendar year

is_weekend – Weekend indicator

DIMENSION TABLE: dim_product

Stores product information for analysis

Attributes:

product_key (PK)

product_id

product_name

category

subcategory

unit_price

DIMENSION TABLE: dim_customer

Stores customer details for segmentation

Attributes:

customer_key (PK)

customer_id

customer_name

city

state

customer_segment

Summary

Fact table stores numeric sales data

Dimension tables store descriptive data

Supports fast analysis and reporting



///Section 2: Design Decisions

The transaction line-item level granularity was chosen because it provides the most detailed view of sales data. Each row represents one product sold in an order, which allows accurate analysis of product performance, customer buying behavior, and revenue trends. This level of detail supports flexible reporting and enables aggregation at higher levels such as daily, monthly, or yearly sales.

Surrogate keys are used instead of natural keys because they are system-generated, stable, and independent of business changes. Natural keys such as product IDs or customer IDs may change over time, but surrogate keys remain consistent. This improves query performance, simplifies joins, and avoids issues caused by changes in source system identifiers.

The star schema design supports drill-down and roll-up operations by separating facts and dimensions. Users can roll up data to view summaries (yearly or category-level sales) or drill down to detailed views (monthly, daily, or product-level sales) using dimension attributes like date, product, and customer. This flexibility enhances data exploration and analysis capabilities for business users.




Section 3: Sample Data Flow

A single sales transaction flows from the source system into the data warehouse by separating descriptive data into dimension tables and numeric data into the fact table.

Source Transaction

Order ID: 101

Customer: John Doe

Product: Laptop

Quantity: 2

Unit Price: ₹50,000

Order Date: 15-01-2024

Data Warehouse Representation

fact_sales

{
  date_key: 20240115,
  product_key: 5,
  customer_key: 12,
  quantity_sold: 2,
  unit_price: 50000,
  discount_amount: 0,
  total_amount: 100000
}


dim_date

{
  date_key: 20240115,
  full_date: '2024-01-15',
  day_of_week: 'Monday',
  month: 1,
  month_name: 'January',
  quarter: 'Q1',
  year: 2024,
  is_weekend: false
}


dim_product

{
  product_key: 5,
  product_name: 'Laptop',
  category: 'Electronics',
  subcategory: 'Computers',
  unit_price: 50000
}


dim_customer

{
  customer_key: 12,
  customer_name: 'John Doe',
  city: 'Mumbai',
  state: 'Maharashtra',
  customer_segment: 'Retail'
}

This structure allows efficient querying and analysis of sales data across different dimensions such as time, product, and customer.