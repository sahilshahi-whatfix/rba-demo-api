# rba-demo-api

Fictional Renewal by Andersen demo data, served as a REST API by json-server 0.17 on Vercel.

- `GET /accounts`, `/contacts`, `/orders`, `/service_requests`, `/stores`
- Address lookup (the one call the demo uses; returns the account with its orders and service requests):
  `GET /accounts?zip=55042&street_like=8217 HIDDEN BAY&_embed=orders&_embed=service_requests`
- Phone lookup: `GET /contacts?phone_digits=6517392846&_expand=account`

`street_like` is a case-insensitive match, so leave off the street suffix (DR, TRL, AVE) to tolerate variations.
Searching with only the house number (`street_like=8217`) in 55042 returns two accounts, which is handy for showing the AMBIGUOUS case.

Edit `db.json` and push to change the data. All records are fictional.
