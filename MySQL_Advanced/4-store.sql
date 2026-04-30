-- Create trigger to decrease item quantity after inserting an order
-- Ensures stock is automatically updated when a new order is added

CREATE TRIGGER decrease_quantity_after_order
AFTER INSERT ON orders
FOR EACH ROW
UPDATE items
SET quantity = quantity - NEW.number
WHERE name = NEW.item_name;
