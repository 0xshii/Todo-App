# 🛡️ Vulnerable Todo App (XSS & Client-Side Auth Demo)

This is a deliberately vulnerable frontend-only **Todo List App** built using vanilla JavaScript. It includes basic user registration, login, and todo management — all stored in `localStorage`.

The purpose of this project is to demonstrate **client-side security flaws**, including:

- ❌ DOM-based XSS
- ❌ Plaintext password storage
- ❌ Insecure session handling
- ❌ Role manipulation via `localStorage`
- ❌ No input validation or sanitization

---

## 🚀 Features

- User registration & login (with role: `'user'`)
- Todos are stored per session in `localStorage`
- Uses `innerHTML` for rendering (→ XSS vector 💥)
- Auto-login after registration
- Shows current logged-in user

---

## 🐞 Known Vulnerabilities

| Type                      | CWE ID | Description |
|---------------------------|--------|-------------|
| DOM-Based XSS             | CWE-79 | Direct injection via `innerHTML` from `todoInput` |
| Plaintext password storage | CWE-256 | Passwords are stored directly in `localStorage` |
| Role Escalation           | CWE-284 | User can modify their role to `admin` via DevTools |
| Persistent XSS via localStorage | CWE-79 | Stored todo items can execute scripts on load |
| No Input Validation       | CWE-20 | Username and password fields are unsanitized |

---

## 🧪 XSS Payload Example

To test for XSS:

1. Register and log in.
2. In the "Add Todo" input, enter:

```html
<script>alert('XSS')</script>
