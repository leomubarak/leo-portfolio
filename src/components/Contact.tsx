import { useRef } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Send, XCircle } from 'lucide-react';
import { Button, Card, Reveal, Section, SectionHeading } from '@/components/ui';
import { Field, HoneypotField } from '@/components/ui/Field';
import { SocialIcon } from '@/components/brand/SocialIcon';
import { useContactForm, isContactEndpointConfigured } from '@/hooks/useContactForm';
import { activeSocialLinks } from '@/data/socialLinks';
import { siteConfig } from '@/data/site';
import { FIELD_LIMITS } from '@/lib/validation';

function useContactMethods() {
  const methods: { key: string; label: string; value: string; href: string }[] = [];
  if (siteConfig.email) {
    methods.push({ key: 'email', label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` });
  }
  if (siteConfig.whatsappNumber) {
    methods.push({ key: 'whatsapp', label: 'WhatsApp', value: `+${siteConfig.whatsappNumber}`, href: `https://wa.me/${siteConfig.whatsappNumber}` });
  }
  return methods;
}

export function Contact() {
  const { values, errors, status, statusMessage, setValue, handleBlur, setHoneypot, submit } = useContactForm();
  const formRef = useRef<HTMLFormElement>(null);
  const methods = useContactMethods();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const firstInvalid = await submit();
    if (firstInvalid) formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
  };

  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        eyebrow="Contact"
        title="Let's build something useful"
        description="Have a project idea, a web development question, a collaboration in mind, or just want to connect? I'd love to hear from you."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <Reveal>
          <Card padding="lg" className="h-full">
            <h3 className="font-display text-lg font-semibold text-content">Reach me directly</h3>
            {methods.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {methods.map((method) => (
                  <li key={method.key}>
                    <a
                      href={method.href}
                      {...(method.key === 'whatsapp' && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 transition-colors hover:border-line-strong hover:bg-surface-sunken"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        {method.key === 'email' ? <Mail size={16} aria-hidden="true" /> : <SocialIcon platform="whatsapp" size={16} />}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-content-subtle">{method.label}</span>
                        <span className="block truncate text-sm text-content">{method.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm leading-relaxed text-content-muted">Use the form and I will reply by email.</p>
            )}

            {activeSocialLinks.length > 0 && (
              <>
                <p className="eyebrow mt-8">Elsewhere</p>
                <ul className="mt-4 space-y-2">
                  {activeSocialLinks.map((link) => (
                    <li key={link.platform}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-sm text-content-muted transition-colors hover:text-content">
                        <SocialIcon platform={link.platform} size={16} />
                        {link.label}
                        {link.handle && <span className="font-mono text-xs text-content-subtle">{link.handle}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <p className="mt-8 flex items-center gap-2 border-t border-line pt-6 text-sm text-content-subtle">
              <MapPin size={15} aria-hidden="true" />
              {siteConfig.location}
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
          <Card padding="lg">
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <HoneypotField onChange={setHoneypot} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" required value={values.name} error={errors.name} maxLength={FIELD_LIMITS.name} autoComplete="name" placeholder="Your name" onChange={(value) => setValue('name', value)} onBlur={() => handleBlur('name')} />
                <Field id="email" label="Email" type="email" required value={values.email} error={errors.email} maxLength={FIELD_LIMITS.email} autoComplete="email" placeholder="you@example.com" onChange={(value) => setValue('email', value)} onBlur={() => handleBlur('email')} />
              </div>
              <div className="mt-5">
                <Field id="subject" label="Subject" required value={values.subject} error={errors.subject} maxLength={FIELD_LIMITS.subject} placeholder="What is this about?" onChange={(value) => setValue('subject', value)} onBlur={() => handleBlur('subject')} />
              </div>
              <div className="mt-5">
                <Field id="message" label="Message" multiline required value={values.message} error={errors.message} maxLength={FIELD_LIMITS.message} placeholder="Tell me a little about what you have in mind." onChange={(value) => setValue('message', value)} onBlur={() => handleBlur('message')} />
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (<><Loader2 className="animate-spin" aria-hidden="true" />Sending…</>) : (<><Send aria-hidden="true" />Send message</>)}
                </Button>
                <p className="text-xs text-content-subtle">Fields marked <span className="text-accent">*</span> are required.</p>
              </div>
              <div role="status" aria-live="polite" className="mt-5 empty:mt-0">
                {statusMessage && (
                  <p className={status === 'success' ? 'flex items-start gap-2 rounded-xl border border-accent bg-accent-soft px-4 py-3 text-sm text-content' : 'flex items-start gap-2 rounded-xl border border-line-strong bg-surface-sunken px-4 py-3 text-sm text-content-muted'}>
                    {status === 'success' ? <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /> : <XCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
                    {statusMessage}
                  </p>
                )}
              </div>
              {import.meta.env.DEV && !isContactEndpointConfigured && (
                <p className="mt-5 rounded-xl border border-dashed border-line-strong px-4 py-3 font-mono text-[11px] leading-relaxed text-content-subtle">
                  No VITE_CONTACT_ENDPOINT set — submissions will not be delivered. See the README for connecting Formspree, Web3Forms, EmailJS or your own endpoint.
                </p>
              )}
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
