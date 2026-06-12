export type ClerkProfile = {
  email: string;
  fullName: string | null;
  profileImageUrl: string | null;
};

export type BaseContextInput = {
  userId: string | null;
  requestId?: string;
  ipAddress?: string;
  getClerkProfile?: (clerkId: string) => Promise<ClerkProfile | null>;
};

export function createBaseContext(input: BaseContextInput) {
  return {
    auth: {

      userId: input.userId,
      clerkId: input.userId,
    },
    requestId: input.requestId ?? "unknown",
    ipAddress: input.ipAddress,
    getClerkProfile: input.getClerkProfile,
  };
}

export type Context = ReturnType<typeof createBaseContext>;
