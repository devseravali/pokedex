import '@testing-library/jest-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
    headers: new Headers(),
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'OK',
    type: 'basic',
    url: '',
    clone: () => this,
    body: null,
    bodyUsed: false,
    text: () => Promise.resolve(''),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    bytes: () => Promise.resolve(new Uint8Array()),
    } as unknown as Response)
  );
