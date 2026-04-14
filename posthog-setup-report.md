# PostHog post-wizard report

The PostHog wizard completed the Astro integration for the Ewaffle landing site. After the wizard pass, the event taxonomy was normalized to the Phase 1 CRO contract used by Late.

| Event | Description | File |
|---|---|---|
| `cta_click` | CTA clicks with `button_text`, `section`, `position_on_page`, and `destination`. Covers hero CTA, WhatsApp, catalog meeting link, live demo, service decision helper, and academia WhatsApp CTA. | `BaseLayout.astro`, `Hero.astro`, `DemoSection.astro`, `AcademiaCTA.astro`, `CatalogLeadModal.astro`, `ServiceDecisionHelper.astro` |
| `form_start` | First interaction with a conversion form. | `Contact.astro`, `CatalogLeadModal.astro`, `DiscountPopup.astro` |
| `form_submit` | Successful form submission. Includes contextual properties such as `form_name`, `section`, service, course, and whether optional fields were provided. | `Contact.astro`, `CatalogLeadModal.astro`, `DiscountPopup.astro` |
| `form_abandon` | Visitor started a form but left/dismissed before a successful submit. | `Contact.astro`, `CatalogLeadModal.astro`, `DiscountPopup.astro` |
| `scroll_section` | Section visibility milestones at 25, 50, 75, and 90 percent, with `section_name` and `scroll_percentage`. | `src/components/posthog.astro` |

## Integration Notes

- PostHog is initialized from `src/components/posthog.astro` and injected in `src/layouts/BaseLayout.astro`.
- Localhost is excluded from capture so development sessions do not pollute production analytics.
- Environment variables live in `.env` locally and must be configured in Cloudflare Pages for production:
  - `PUBLIC_POSTHOG_PROJECT_TOKEN`
  - `PUBLIC_POSTHOG_HOST`
- The local `.env` is gitignored. `.env.example` documents the required keys without secrets.

## Dashboard Follow-Up

The wizard created a starter PostHog dashboard, but the code now emits the normalized Late/CRO event names above. Rebuild the dashboard around:

- CTA breakdown: `cta_click` grouped by `section` and `button_text`
- Form funnel: `form_start` -> `form_submit`, grouped by `form_name`
- Abandonment: `form_abandon` grouped by `form_name`
- Content depth: `scroll_section` grouped by `section_name` and `scroll_percentage`

The wizard also generated an agent skill folder. It was intentionally not kept in the project because the production change should stay limited to the landing instrumentation.
