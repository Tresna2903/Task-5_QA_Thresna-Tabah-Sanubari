import { check } from 'k6';
import http from 'k6/http';

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