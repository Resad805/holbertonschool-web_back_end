-- Create composite index on first letter of name and score
-- Improves performance for queries filtering by name prefix and score

CREATE INDEX idx_name_first_score
ON names (name(1), score);
