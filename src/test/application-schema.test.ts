import { describe, expect, it } from 'vitest';
import { applicationSchema } from '@/lib/application-schema';
const valid = { name: 'Example Applicant', email: 'test@example.com', phone: '+1 202 555 0114', expectations: 'Everyday ideas.', referral: 'A friend', additional: '', website: '', acknowledged: true };
describe('Access application validation', () => {
  it('accepts complete applications without optional notes', () => expect(applicationSchema.safeParse(valid).success).toBe(true));
  it('rejects missing consent acknowledgement', () => expect(applicationSchema.safeParse({ ...valid, acknowledged: false }).success).toBe(false));
  it('rejects malformed contact information', () => {
    expect(applicationSchema.safeParse({ ...valid, email: 'bad' }).success).toBe(false);
    expect(applicationSchema.safeParse({ ...valid, phone: 'not a phone' }).success).toBe(false);
  });
  it('rejects overlong and automated submissions', () => {
    expect(applicationSchema.safeParse({ ...valid, expectations: 'a'.repeat(2001) }).success).toBe(false);
    expect(applicationSchema.safeParse({ ...valid, website: 'spam' }).success).toBe(false);
  });
});