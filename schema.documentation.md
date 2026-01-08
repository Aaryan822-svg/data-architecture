///Normalization Explanation (Third Normal Form – 3NF)

The FlexiMart database schema is designed in Third Normal Form (3NF) to ensure data integrity, reduce redundancy, and prevent anomalies. A relation is in 3NF if it is in Second Normal Form (2NF) and no non-key attribute is transitively dependent on the primary key.

Functional Dependencies

Each table has a clear primary key that uniquely determines all other attributes:

customers:
customer_id → first_name, last_name, email, phone, city, registration_date

products:
product_id → product_name, category, price, stock_quantity

orders:
order_id → customer_id, order_date, total_amount, status

order_items:
order_item_id → order_id, product_id, quantity, unit_price, subtotal

There are no partial dependencies, as all primary keys are single-attribute surrogate keys. Additionally, there are no transitive dependencies; for example, customer details are stored only in the customers table and not repeated in the orders table.

Avoidance of Anomalies

Update Anomalies are avoided because each fact is stored in exactly one place. Updating a customer’s email requires a change in only the customers table.

Insert Anomalies are prevented since new customers or products can be added independently without requiring an order.

Delete Anomalies are avoided because deleting an order does not remove customer or product information.

By separating entities into logically independent tables and enforcing relationships through foreign keys, the schema achieves 3NF compliance, ensuring consistency, scalability, and efficient data maintenance.

