import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API - Posts', () => {
  test('GET /posts - list all posts', async ({ request }) => {
    const response = await request.get('/posts');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBe(100);
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('body');
  });

  test('GET /posts/1 - single post', async ({ request }) => {
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body.title).toBeTruthy();
  });

  test('POST /posts - create new post', async ({ request }) => {
    const response = await request.post('/posts', {
      data: { title: 'QA Test Post', body: 'Automated test content', userId: 1 },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Test Post');
    expect(body.id).toBeTruthy();
  });

  test('PUT /posts/1 - update post', async ({ request }) => {
    const response = await request.put('/posts/1', {
      data: { id: 1, title: 'Updated Title', body: 'Updated body', userId: 1 },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('Updated Title');
  });

  test('DELETE /posts/1 - delete post', async ({ request }) => {
    const response = await request.delete('/posts/1');
    expect(response.status()).toBe(200);
  });

  test('GET /posts?userId=1 - filter by user', async ({ request }) => {
    const response = await request.get('/posts?userId=1');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    body.forEach((post: { userId: number }) => expect(post.userId).toBe(1));
  });

  test('GET /posts/1/comments - nested resource', async ({ request }) => {
    const response = await request.get('/posts/1/comments');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('email');
    expect(body[0]).toHaveProperty('body');
    expect(body[0].postId).toBe(1);
  });
});
