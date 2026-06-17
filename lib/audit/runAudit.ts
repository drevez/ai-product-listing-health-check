import type { AuditInput, AuditResult } from "./types";

export async function runAudit(_input: AuditInput): Promise<AuditResult> {
  return {
    status: "not_started",
  };
}
