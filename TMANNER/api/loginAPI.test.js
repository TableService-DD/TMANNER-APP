import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginAPI } from "./data";

// Mocking axios for testing
const mock = new MockAdapter(axios);

describe('loginAPI', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should return true when login is successful', async () => {
    mock.onPost('{API_HOST}/biz/user/').reply(200, {
      status: 200,
      message: "SUCCESS",
      access_token: "some-access-token",
      refresh_token: "some-refresh-token"
    });

    const response = await loginAPI('yonghyunlee@hanyang.ac.kr', 'password123');
    expect(response).toBe(true);
  });

  it('should return false when login fails', async () => {
    mock.onPost('{API_HOST}/biz/user/').reply(401, {
      status: 401,
      message: "UNAUTHORIZED"
    });

    const response = await loginAPI('yonghyunlee@hanyang.ac.kr', 'wrong-password');
    expect(response).toBe(false);
  });
});
