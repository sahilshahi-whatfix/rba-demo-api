# rba-demo-api

Fictional Renewal by Andersen demo data, served as a REST API by json-server 0.17 on Vercel.

- `GET /accounts`, `/contacts`, `/orders`, `/service_requests`, `/stores`
- Phone lookup: `GET /contacts?phone_digits=2144548759&_expand=account`
- Address lookup: `GET /accounts?zip=18034&street_like=4440 DEVONSHIRE DR`
- Evidence: `GET /accounts/{id}?_embed=orders&_embed=service_requests`

Edit `db.json` and push to change the data. All records are fictional.
