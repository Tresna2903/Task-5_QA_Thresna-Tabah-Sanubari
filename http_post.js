import { check } from 'k6';
import http from 'k6/http';

export default function () {
const res = http.post('https://reqres.in/api/users', 
JSON.stringify({
    "name": "morpheus",
    "job": "leader"
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const checkOutput = check (res, {
      'is status 201': (r) => r.status === 201,
    });
}


