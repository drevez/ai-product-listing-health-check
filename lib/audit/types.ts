export type AuditStatus = "not_started";

export type AuditInput = {
  productUrl: string;
};

export type AuditResult = {
  status: AuditStatus;
};
