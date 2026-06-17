import type { AuditResult } from "./types";

export function rulesEngine(): AuditResult {
  return {
    status: "not_started",
  };
}
