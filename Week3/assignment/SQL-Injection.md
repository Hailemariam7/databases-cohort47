### Exercise 3: SQL Injection

#### 1. Example of SQL Injection

To exploit the given function, a hacker could pass the following values:

- `name`: `'' OR '1'='1`
- `code`: `'' OR '1'='1`

The resulting query would be:

```sql
SELECT Population FROM country WHERE Name = '' OR '1'='1' AND code = '' OR '1'='1';
```

### Secure SQL Query Function

Here's the corrected function to prevent SQL injection:

```javascript
function getPopulation(Country, name, code) {
  conn.query(
    "SELECT Population FROM ?? WHERE Name = ? AND code = ?",
    [Country, name, code],
    (err) => {
      if (err) throw err;
    }
  );
}
```
