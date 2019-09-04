import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndpointOfDomains = apiUrl + "/website/listOfDomains";
const apiEndpointOfPostDomain = apiUrl + "/website/createDomain";

export function getDomains() {
  return http.get(apiEndpointOfDomains);
}

export function saveDomain(domain) {
  return http.post(apiEndpointOfPostDomain, domain);
}
