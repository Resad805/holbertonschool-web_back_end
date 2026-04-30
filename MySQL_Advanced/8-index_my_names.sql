-- Create index on the first letter of name
-- Improves performance for queries like WHERE name LIKE 'a%'

CREATE INDEX idx_name_first
ON names (name(1));
