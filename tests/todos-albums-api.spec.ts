import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder API - Todos & Albums', () => {
  test('GET /todos - list todos', async ({ request }) => {
    const response = await request.get('/todos');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBe(200);
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
    expect(body[0]).toHaveProperty('completed');
  });

  test('GET /todos?completed=true - filter completed', async ({ request }) => {
    const response = await request.get('/todos?completed=true');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    body.forEach((todo: { completed: boolean }) => expect(todo.completed).toBe(true));
  });

  test('GET /albums - list albums', async ({ request }) => {
    const response = await request.get('/albums');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBe(100);
    expect(body[0]).toHaveProperty('userId');
    expect(body[0]).toHaveProperty('title');
  });

  test('GET /albums/1/photos - album photos', async ({ request }) => {
    const response = await request.get('/albums/1/photos');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('url');
    expect(body[0]).toHaveProperty('thumbnailUrl');
    expect(body[0].albumId).toBe(1);
  });

  test('PATCH /todos/1 - partial update', async ({ request }) => {
    const response = await request.patch('/todos/1', {
      data: { completed: true },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.completed).toBe(true);
    expect(body.id).toBe(1);
  });
});
