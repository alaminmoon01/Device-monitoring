# Device telemetry setup

This update stores device/browser metadata and IP-derived approximate geolocation on successful customer login. IP geolocation is approximate and depends on the public IP; local/private IPs will not produce country/city/ISP. GPS is requested only when the customer explicitly checks the optional consent checkbox on the login form. A denied or unavailable permission status is saved without coordinates.

## Apply database change

1. Back up the MySQL database.
2. Ensure `DATABASE_URL` is configured in `backend/.env`.
3. From `backend`, run `npx prisma generate`.
4. Apply the included migration using your migration workflow, or inspect and run `prisma/migrations/20261108090000_device_telemetry_fields/migration.sql` against the SecureBank database. Do not run `db push` against a database with important data without a backup.
5. Restart backend and frontend.

The migration adds nullable fields only; it does not fabricate historical GPS/IP metadata. Existing device rows remain intact and new telemetry will be collected on subsequent logins.
