# Gypsy Laut: handover to Claude

Prepared 22 October 2026. Treat this as a snapshot and inspect the actual files before editing. “Unverified” means the information was not established in the material inspected, not that it does not exist.

## Project and brief

Jeff developed a separate website concept for the owner after the owner asked him to think about helping get the business moving. Jeff intended it as a proactive gesture demonstrating his capabilities. The user now states that Gypsy Laut is a 65 ft vessel staying in Indonesia, with the current concept a premium private floating villa based in Mushroom Bay, Nusa Lembongan. Guests access activities by the vessel's tenders and selected outside providers such as dive operators. It is no longer being relocated to Australia. This is the current direction supplied by Jeff; exact operational arrangements and permissions remain unverified.

Audience: prospective guests seeking a private premium stay and island experiences; travel partners may also use the site. This audience is inferred from the website and brief, not a verified customer segmentation study.

Owner name and direct contact route: unverified. Do not infer the owner from the existing public website. Jeff previously said the owner had not been told about the new concept when the message was drafted; whether the owner has since seen or approved it is unverified. No specific owner approvals or rejections were verified. Earlier references to locked milestones refer to Jeff's website design process, not owner approval.

## Site identity and structure

Use the included `site/` as a locally identified snapshot, not a confirmed copy of the live preview's current version. Root `index.html` is the homepage. Six linked pages are in `site/experiences/`:

- Stay Aboard: private overnight stay, life aboard, day rhythm, interiors, food, facilities and practical information.
- Private Day Charter: day itinerary, tender access, activities, food and sunset option. This is a legacy offer; whether to remove, hide or revise is unverified under the new stationary concept.
- Wildlife, Snorkelling & Scuba: reef and wildlife experiences, conditions, manta encounter caveat, local dive partners and guest enquiry.
- Surf & Paddle: conditions, surf, paddle, tender access, facilities and enquiry.
- Fishing & Spearfishing: fishing, specialist spearfishing, catch-to-table, rules and enquiry. Permitted activities and locations need current expert confirmation.
- Private Expeditions: regional routes, Lombok/Gilis, Sumbawa/Moyo, Komodo, life aboard and enquiry. This implies movement of the main vessel and conflicts with the current stationary model. Its continued use is unverified.

Homepage sequence: navigation and hero; concept; six experience cards; stay aboard; local exploration and illustrative charts; on-the-water stories; concierge; private expeditions and regional charts; vessel introduction and specifications; life-aboard gallery; enquiry. Read each page for precise current copy and section details.

Tone: calm, premium, personal, private and editorial, with the boat as the base and the guest's experience leading. Established copy examples include “Your private base on the Indonesian sea” and “Stay on the water. Explore from it.” Maintain existing visual direction unless Jeff directs otherwise. Avoid presenting unconfirmed activities, inclusions, facilities or wildlife sightings as promises.

Design as implemented: Cormorant Garamond display and DM Sans body, bundled under `site/gypsy-laut/assets/fonts/` with OFL license files. Core homepage colours: navy `#09284a`, ocean `#0c3046`, ink `#102033`, cream `#f5f0e7`, sand `#d8c6a8`, aqua `#8aaeb2`, timber `#6b4530`. Large photography, dark ocean backgrounds, cream sections, serif headlines and detached image frames establish the style. Logo PNG variants and flyer are in `site/gypsy-laut/assets/brand/`; the older source README says the transparent logo variants were extracted from the flyer. Original logo master and usage rights unverified.

Images and video: `site/gypsy-laut/assets/images/`, `video/`, and `videos/`. Source notes include `IMAGE_SOURCES.txt`, `DAY_CHARTER_REFERENCE_SOURCES.txt`, `destinations/DESTINATION_IMAGE_SOURCES.txt`, `marine-wildlife/MARINE_WILDLIFE_SOURCES.txt`, and `maps/EXPEDITION_CHART_SOURCES.txt`. They are leads, not proof that every image is licensed or approved. Jeff said the available images were the best he could find and newer photos and videos will be needed. Ask him and the owner for them. Do not assume stock imagery shows Gypsy Laut. Earlier research included an image approval boundary: obtain approval before bringing in new image assets.

## What must be confirmed

Owner/Jeff to supply or approve: nightly rates, seasonality, taxes and fees; minimum stays and guest capacity; included services and optional activities; deposits, cancellation, weather, safety and privacy policies; operating dates; accurate crew and tender details; actual boat specifications and facilities; licensed partners and agreed terms; current imagery and rights; approved WhatsApp number and enquiry email; form provider, destination and privacy/spam handling; owner contact and review of all claims. Technical account holders must identify hosting, DNS, analytics and social access. These are open items, not a claim that the site literally labels each item TBD.

The current enquiry form deliberately prevents sending and displays a status message. WhatsApp is a non-link. Do not promise enquiries are received until a real destination and backend have been implemented and tested. An outdoor projector/screen is described as planned in existing copy, not confirmed installed. Existing claims such as crew aboard, tenders, Starlink, watermaker, air conditioning, equipment and capacity are unverified current facts and need owner confirmation. Maps are illustrative, not navigation charts; do not imply fishing markers are verified outside restricted zones.

Known issue: opening the homepage as a `file://` file can fail to resolve directory-style experience links. Use a local HTTP server. A prior task reported targeted desktop/mobile checks of Surf & Paddle hero spacing and the Private Expeditions image frame, not a fresh full-site QA. Current preview availability, source equivalence, broken links and end-to-end rendering are unverified in this handover.

## Decisions, uncertainties and next steps

Confirmed by Jeff: Indonesia, Lembongan, 65 ft, private floating accommodation, tender-based guest activities and outside specialist vendors. Australia relocation is superseded. Existing design concept was built as a separate preview and did not alter the original site at the time it was introduced. Jeff liked the completed preview; owner approval is unverified.

Inferences or proposals: target segments, full commercial positioning, recommended operations and prior business-deck prices/budgets are hypotheses. No pricing, operating profit, permissions, owner approvals or contracted partners should be represented as established fact.

1. Compare the packaged snapshot with the actual current Sites source and preview, then list every conflict with the stationary model for Jeff and the owner to decide, particularly day charter and expeditions. Preserve the current design while discussing scope.
2. Ask the owner/Jeff for verified vessel information, approved copy and images, rates, policies, contact destinations and legal/operational confirmation. Verify asset rights and account access without collecting passwords in the handover.
3. Once scope and facts are approved, implement the agreed changes in a working copy, connect and test the chosen enquiry routes, inspect desktop/mobile and obtain the necessary approval before any production or domain change.

See `../access-map.md` for data locations and login gaps. This package does not claim to contain all original boat books, invoices, cloud files or agreements.
