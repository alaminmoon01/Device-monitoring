# Admin Device Monitoring Update

The Admin Device Management page now searches by bank account number using:

`GET /api/admin/device-monitoring/account/:accountNumber`

The endpoint is protected by the existing admin authentication middleware and returns the customer plus saved TrustedDevice records.

## Important data limitation in the existing database

The current `TrustedDevice` model stores `ipAddress`, `browser`, `operatingSystem`, and `approximateLocation`. It does **not** store IP geolocation fields (country/city/ISP separately), GPS latitude/longitude, GPS accuracy, or GPS permission status. The Admin page shows these fields as unavailable/not recorded rather than inventing values. Existing customer-side GPS/IP test UI does not persist those values to the database.

No Prisma schema or migration was changed in this update.
