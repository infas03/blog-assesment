
import { describe, beforeEach, it, expect, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useAuthStore } from "../store/auth";

vi.mock("#app", () => ({
  useNuxtApp: () => ({
    $api: {
      get: vi.fn(async (url: string) => {
        console.log("Mocked API URL Called:", url);
        if (url === "/users?username=user") {
          return [
            {
              id: 1,
              username: "user",
              password: "user123",
              role: "user",
            },
          ];
        }
        return [];
      }),
    },
  }),
}));


describe("Auth Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("logs in a user successfully", async () => {
    console.log("Test execution reached here"); 

    const authStore = useAuthStore();

    const success = await authStore.login({ username: "user", password: "user123" });
    console.log('success: ', success)

    expect(success).toBe(true);
    expect(authStore.isAuthenticated).toBe(true);
    expect(authStore.user?.username).toBe("user");
  });

  it("fails to log in with incorrect credentials", async () => {
    const authStore = useAuthStore();
    const success = await authStore.login({ username: "wrong", password: "wrong" });

    expect(success).toBe(false);
    expect(authStore.isAuthenticated).toBe(false);
  });

  it("logs out a user", () => {
    const authStore = useAuthStore();
    authStore.logout();

    expect(authStore.isAuthenticated).toBe(false);
    expect(authStore.user).toBeNull();
  });
});
