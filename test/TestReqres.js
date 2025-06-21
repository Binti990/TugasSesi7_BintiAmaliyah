const assert = require("assert");
const fetch = require("node-fetch");

describe("Feature Reqres", function () {

  it("GET - Get Single User", async function () {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();

    console.log("GET Response:", data);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.data.id, 2);
  });

  it("POST - Create User", async function () {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": "reqres-free-v1"},
      body: JSON.stringify({ name: "morpheus", job: "leader" }),
    });
    const data = await response.json();

    console.log("POST Response:", data);
    assert.strictEqual(response.status, 201);
    assert.strictEqual(data.name, "morpheus");
  });

  it("PUT - Create User", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-api-key": "reqres-free-v1" },
      body: JSON.stringify({ name: "morpheus", job: "leader" }),
    });
    const data = await response.json();

    console.log("PUT Response:", data);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.name, "morpheus");
  });

  it("PATCH - Update User", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-api-key": "reqres-free-v1"},
      body: JSON.stringify({ name: "neo", job: "the one" }),
    });
    const data = await response.json();

    console.log("PATCH Response:", data);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.name, "neo");
  });

  it("DELETE - Delete User", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
    });

    console.log("DELETE Response status:", response.status);
    assert.strictEqual(response.status, 401);
  });

});
