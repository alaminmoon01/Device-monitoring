import { apiRequest } from "../../services/api";

// Admin account/device unlock operations use the existing backend endpoints.
export function unlockCustomerAccount(customerId, token) {
  return apiRequest(`/auth/admin/customers/${customerId}/unlock`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function unlockDevice(deviceId, token) {
  return apiRequest(`/auth/admin/devices/${deviceId}/unlock`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
}
