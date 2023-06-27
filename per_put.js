import { check } from 'k6';
import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    scenarios: {
      example_scenario: {
        // name of the executor to use
        executor: 'shared-iterations',
  
        // common scenario configuration
  
        // executor-specific configuration
        vus: 1000,
        iterations: 3500,
        maxDuration: '2s',
      },
    },
  };

export default function () {
const res = http.put('https://reqres.in/api/users/2', 
JSON.stringify({
    "name": "morpheus",
    "job": "zion resident"
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const checkOutput = check (res, {
      'is status 200': (r) => r.status === 200,
    });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }