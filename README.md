# SecureBank — Device Monitoring (Moon)

Feature source extracted from the supplied SecureBank project.

## Included
- Device information/fingerprint/geolocation frontend modules
- Admin device monitoring page
- Device monitoring backend route
- Admin route source reference (contains other admin features too)
- Shared Prisma/auth dependencies and existing device telemetry notes

## IMPORTANT: shared backend file
`backend/routes/admin.routes.js` contains multiple admin features, not only device monitoring. It is included as a source reference. Do not replace the main project's file with a feature-only copy. Coordinate changes with the integration owner and extract device-monitoring-specific admin endpoints before merging.

## Shared dependencies
The app relies on the canonical MySQL database, Prisma schema/migrations, auth middleware, and main Express server. Keep these centrally managed. GPS collection must remain consent-based; denying GPS must not prevent login.

## Safety
Never commit `.env`, customer personal data, credentials, tokens, `node_modules`, or generated secrets.
