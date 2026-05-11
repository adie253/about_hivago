const API_URL = import.meta.env.VITE_API_URL; // e.g. https://api.hivago.in

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(res.status, body);
  }

  return res.status === 204 ? (undefined as T) : res.json();
}

export class ApiError extends Error {
  status: number;
  body: any;
  constructor(status: number, body: any) {
    super(body?.message ?? `HTTP ${status}`);
    this.status = status;
    this.body = body;
  }
  get fieldErrors(): Record<string, string> {
    const map: Record<string, string> = {};
    for (const fe of this.body?.fieldErrors ?? []) {
      map[fe.field?.charAt(0).toLowerCase() + fe.field?.slice(1)] = fe.message;
    }
    return map;
  }
}
