CREATE TABLE public.access_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
 expectations text NOT NULL CHECK (char_length(expectations) BETWEEN 1 AND 2000),
 referral text NOT NULL CHECK (char_length(referral) BETWEEN 1 AND 200),
 additional text NOT NULL DEFAULT '' CHECK (char_length(additional) <= 2000),
 acknowledged boolean NOT NULL CHECK (acknowledged = true),
 sms_consent boolean NOT NULL DEFAULT false CHECK (sms_consent = false)
);
GRANT INSERT (name,email,phone,expectations,referral,additional,acknowledged) ON public.access_applications TO anon;
GRANT ALL ON public.access_applications TO service_role;
ALTER TABLE public.access_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors may request access without SMS consent" ON public.access_applications FOR INSERT TO anon WITH CHECK (acknowledged = true AND sms_consent = false);
CREATE INDEX access_applications_email_time ON public.access_applications (email, created_at);
CREATE FUNCTION public.limit_application_repeats() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
 IF EXISTS (SELECT 1 FROM public.access_applications WHERE email = NEW.email AND created_at > now() - interval '10 minutes') THEN
  RAISE EXCEPTION 'Please wait before submitting another application.';
 END IF;
 RETURN NEW;
END;
$$;
REVOKE ALL ON FUNCTION public.limit_application_repeats() FROM PUBLIC;
CREATE TRIGGER limit_application_repeats BEFORE INSERT ON public.access_applications FOR EACH ROW EXECUTE FUNCTION public.limit_application_repeats();