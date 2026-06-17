import type { AuditInput, AuditResult } from "./types";

export async function runAudit(input: AuditInput): Promise<AuditResult> {
  void input;

  return {
    status: "not_started",
  };
}
