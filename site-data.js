window.OROYA_PAGES = {
  "privacy-policy": {
    category: "Legal Information",
    title: "Privacy Policy",
    description:
      "This policy explains how OROYA collects, uses, stores, and shares information when users upload photos, receive AI-generated results, and use the mobile application.",
    updatedAt: "March 19, 2026",
    documentType: "Privacy document",
    highlights: [
      {
        label: "User Content",
        value: "Uploaded photos are stored in our database as part of the service."
      },
      {
        label: "AI Processing",
        value: "Photos may be sent to a third-party AI provider to generate descriptions or results."
      },
      {
        label: "Stored Results",
        value: "We store the uploaded photo together with the AI response and generated description."
      }
    ],
    sections: [
      {
        id: "information-we-collect",
        title: "Information We Collect",
        paragraphs: [
          "When a user uses OROYA, we may collect account details, support communications, device information, and content submitted through the application.",
          "This includes user-uploaded photos, user-provided text, generated descriptions, AI responses, and related result records that are created while the service is being used."
        ],
        bullets: [
          "Account and profile information provided by the user",
          "Photos uploaded by the user through the mobile application",
          "Descriptions, prompts, metadata, and generated results linked to those photos",
          "Technical information such as device type, crash information, logs, and usage diagnostics"
        ]
      },
      {
        id: "how-we-use-information",
        title: "How We Use Information",
        paragraphs: [
          "We use collected information to operate the service, process uploaded photos, generate descriptions or results, store past outputs, improve reliability, respond to support requests, and protect the platform from misuse.",
          "If a user uploads a photo for analysis or description, that photo may be processed by our systems and by a third-party AI service provider in order to return the requested result inside the app."
        ],
        note: {
          title: "Important",
          copy: "If your product flow changes, this page should always match the real processing flow used inside the application and backend."
        }
      },
      {
        id: "sharing-with-third-parties",
        title: "Sharing With Third Parties",
        paragraphs: [
          "We may share user-uploaded photos and related request data with third-party service providers when it is necessary to provide the core functionality of the application.",
          "In particular, photos may be sent to a third-party AI provider so that the provider can generate an AI response, explanation, or description for the user. We may also use cloud infrastructure providers to store uploaded content, generated descriptions, and result records."
        ],
        bullets: [
          "Third-party AI providers may receive user photos for processing",
          "Cloud providers may store descriptions, result records, and related service data",
          "Service providers are used to operate, secure, and improve the application"
        ]
      },
      {
        id: "storage-and-retention",
        title: "Storage and Retention",
        paragraphs: [
          "User-uploaded photos may be stored in our database or connected storage systems. AI-generated descriptions, AI responses, and result records may also be stored so that users can view prior outputs inside the application.",
          "We retain data for as long as reasonably necessary to provide the service, maintain account history, investigate abuse, comply with legal obligations, and support legitimate operational needs."
        ]
      },
      {
        id: "user-rights",
        title: "User Rights and Requests",
        paragraphs: [
          "Users may contact OROYA to request access, correction, or deletion of their personal information, subject to applicable law and our legitimate operational, fraud-prevention, and legal obligations.",
          "Deletion requests related to uploaded photos, stored results, and AI-generated descriptions can be submitted through the contact page listed on this website."
        ]
      }
    ],
    support: {
      title: "Privacy requests",
      copy: "Use the contact page for privacy questions, access requests, or deletion-related requests.",
      primaryLabel: "Open Contact Page",
      primaryHref: "/contact.html",
      secondaryLabel: "Read Data Deletion Policy",
      secondaryHref: "/data-deletion.html"
    },
    sidebarNote:
      "This page should be linked from the app wherever privacy disclosures or third-party AI processing disclosures are required."
  },
  "terms-of-use": {
    category: "Legal Information",
    title: "Terms of Use",
    description:
      "These terms govern access to and use of the OROYA mobile application, including photo uploads, AI-generated responses, and stored result records.",
    updatedAt: "March 19, 2026",
    documentType: "Terms document",
    highlights: [
      {
        label: "Core Use",
        value: "Users may upload photos and receive AI-generated outputs through the app."
      },
      {
        label: "Responsible Use",
        value: "Users must not upload unlawful, infringing, deceptive, or harmful content."
      },
      {
        label: "Service Limits",
        value: "The app may rely on third-party AI and cloud services to operate."
      }
    ],
    sections: [
      {
        id: "acceptance-of-terms",
        title: "Acceptance of Terms",
        paragraphs: [
          "By downloading, accessing, or using OROYA, the user agrees to these Terms of Use and any related policies published on this website.",
          "If the user does not agree to these terms, the user should not use the application."
        ]
      },
      {
        id: "service-description",
        title: "Service Description",
        paragraphs: [
          "OROYA allows users to submit photos and receive AI-assisted results, descriptions, or other outputs generated through internal systems and third-party AI providers.",
          "The service may store uploaded photos together with generated descriptions, AI responses, and result records so the user can access those results later inside the application."
        ]
      },
      {
        id: "user-responsibilities",
        title: "User Responsibilities",
        paragraphs: [
          "Users are responsible for the content they upload and for ensuring that they have the right to submit that content to the application.",
          "Users must not use OROYA to upload material that is unlawful, abusive, defamatory, infringing, sexually exploitative, fraudulent, or harmful to others."
        ],
        bullets: [
          "Do not upload content that violates another person's rights",
          "Do not upload illegal, deceptive, or unsafe material",
          "Do not misuse the app, attempt unauthorized access, or interfere with the service"
        ]
      },
      {
        id: "ai-generated-output",
        title: "AI-Generated Output",
        paragraphs: [
          "AI-generated results may be incomplete, inaccurate, or unsuitable in some situations. Users should review outputs carefully and not rely on them as a substitute for professional advice, guaranteed facts, or legal determinations.",
          "OROYA does not guarantee that AI-generated descriptions or responses will always be accurate, complete, available, or appropriate for every context."
        ],
        note: {
          title: "AI Notice",
          copy: "If the app produces regulated, medical, legal, or other high-risk outputs, the product team should add additional disclaimers tailored to that use case."
        }
      },
      {
        id: "termination",
        title: "Suspension and Termination",
        paragraphs: [
          "We may restrict, suspend, or terminate access to OROYA if a user violates these terms, creates legal or safety risk, abuses the service, or uses the app in a way that threatens the platform or other users.",
          "We may also modify or discontinue features, including AI-related features, at any time."
        ]
      }
    ],
    support: {
      title: "Questions about these terms",
      copy: "Use the contact page for policy questions, compliance requests, or App Review follow-up.",
      primaryLabel: "Open Contact Page",
      primaryHref: "/contact.html",
      secondaryLabel: "Read Privacy Policy",
      secondaryHref: "/privacy-policy.html"
    },
    sidebarNote:
      "These terms should be linked anywhere the application asks users to accept or continue with the service."
  },
  "community-guidelines": {
    category: "Rules and Safety",
    title: "Community Guidelines",
    description:
      "These rules describe what users may not upload, share, or do while using OROYA and related support channels.",
    updatedAt: "March 19, 2026",
    documentType: "Rules document",
    highlights: [
      {
        label: "Safe Uploads",
        value: "Users must upload only lawful and appropriate photos and content."
      },
      {
        label: "No Abuse",
        value: "Harassment, hate, threats, fraud, and exploitation are prohibited."
      },
      {
        label: "Enforcement",
        value: "Violations may lead to content removal, suspension, or permanent account closure."
      }
    ],
    sections: [
      {
        id: "respectful-use",
        title: "Respectful Use",
        paragraphs: [
          "Users must use OROYA in a lawful, respectful, and responsible way. Abuse of the service, support channels, or reporting systems is not allowed.",
          "Users must not harass, threaten, intimidate, or target other people through submitted content, profile information, or support messages."
        ]
      },
      {
        id: "prohibited-content",
        title: "Prohibited Content",
        paragraphs: [
          "Users must not upload photos, text, or related material that is illegal, abusive, hateful, violent, sexually exploitative, fraudulent, or otherwise inappropriate for the service.",
          "Users must also not upload content that they do not have the right to use or that violates the privacy, publicity, copyright, or other rights of another person."
        ],
        bullets: [
          "No illegal or exploitative images or content",
          "No harassment, hate speech, threats, or bullying",
          "No impersonation, fraud, scams, or misleading submissions",
          "No copyrighted or private material submitted without authorization"
        ]
      },
      {
        id: "platform-misuse",
        title: "Platform Misuse",
        paragraphs: [
          "Users must not attempt to damage, overload, scrape, reverse engineer, or interfere with OROYA, its backend systems, its AI integrations, or its supporting cloud services.",
          "Users must not use automated or deceptive behavior to manipulate the service or generate abusive traffic."
        ]
      },
      {
        id: "enforcement",
        title: "Enforcement",
        paragraphs: [
          "We may review reported or detected violations and take action including warnings, content removal, feature restrictions, temporary suspension, or permanent account termination.",
          "Where necessary, we may also preserve records and cooperate with legal obligations, safety reviews, or abuse investigations."
        ]
      }
    ],
    support: {
      title: "Report abuse or misuse",
      copy: "Use the contact page if you need to report prohibited content, harmful behavior, or misuse of the service.",
      primaryLabel: "Open Contact Page",
      primaryHref: "/contact.html",
      secondaryLabel: "Read Terms of Use",
      secondaryHref: "/terms-of-use.html"
    },
    sidebarNote:
      "This page is intended to function as the service rules page for users, platform reviewers, and support references."
  },
  "data-deletion": {
    category: "Legal Information",
    title: "Data Deletion Policy",
    description:
      "This page explains how users can request deletion of account data, uploaded photos, stored descriptions, AI responses, and result history.",
    updatedAt: "March 19, 2026",
    documentType: "Deletion document",
    highlights: [
      {
        label: "Deletion Scope",
        value: "Requests may include account data, uploaded photos, and stored AI-generated results."
      },
      {
        label: "Verification",
        value: "We may verify identity before processing a deletion request."
      },
      {
        label: "Retention Limits",
        value: "Some records may be retained where legally required or needed for security."
      }
    ],
    sections: [
      {
        id: "how-to-request-deletion",
        title: "How to Request Deletion",
        paragraphs: [
          "Users may request deletion by contacting OROYA through the contact page on this website and identifying the relevant account.",
          "A deletion request may cover account information, uploaded photos, generated descriptions, AI responses, and stored result records associated with the user's account."
        ],
        bullets: [
          "Provide the email address or identifier linked to the account",
          "State that you are requesting deletion of account data and stored results",
          "Provide any information reasonably needed to verify identity"
        ]
      },
      {
        id: "what-deletion-may-cover",
        title: "What Deletion May Cover",
        paragraphs: [
          "Subject to applicable law and technical constraints, deletion may include user account information, uploaded photo records, generated descriptions, AI responses, support history, and related stored result data.",
          "Some data may also exist in backups, logs, security systems, or legal records for a limited period after an active deletion request is completed."
        ]
      },
      {
        id: "when-data-may-be-retained",
        title: "When Data May Be Retained",
        paragraphs: [
          "We may retain limited information where required for legal compliance, dispute resolution, fraud prevention, security, abuse investigations, or enforcement of our rights and policies.",
          "Where retention is required, we aim to retain only the minimum information necessary for those purposes."
        ]
      }
    ],
    support: {
      title: "Need to submit a deletion request",
      copy: "Use the contact page and include the account identifier connected to the uploaded photos or stored results.",
      primaryLabel: "Open Contact Page",
      primaryHref: "/contact.html",
      secondaryLabel: "Read Privacy Policy",
      secondaryHref: "/privacy-policy.html"
    },
    sidebarNote:
      "This page should be linked from any in-app setting or help flow where users request deletion of stored account or content data."
  },
  contact: {
    category: "Support",
    title: "Contact",
    description:
      "Use this page for support, legal questions, privacy inquiries, data deletion requests, or App Review communications regarding OROYA.",
    updatedAt: "March 19, 2026",
    documentType: "Support document",
    highlights: [
      {
        label: "General Support",
        value: "For account help, technical issues, or product questions."
      },
      {
        label: "Privacy Requests",
        value: "For access, deletion, and questions about uploaded photos or stored results."
      },
      {
        label: "Legal Contact",
        value: "For App Review, compliance, or policy-related communications."
      }
    ],
    sections: [
      {
        id: "contact-details",
        title: "Contact Details",
        paragraphs: [
          "General support email: support@oroya.xyz",
          "Privacy and legal email: legal@oroya.xyz",
          "Website: http://oroya.xyz/"
        ]
      },
      {
        id: "what-to-include",
        title: "What to Include in Your Request",
        paragraphs: [
          "To help us respond efficiently, include the account email address or identifier, a short description of the issue, and any relevant details about uploaded photos, stored results, or AI-generated responses involved in the request.",
          "If you are making a privacy or deletion request, please clearly state the action you want us to take."
        ]
      },
      {
        id: "response-times",
        title: "Response Times",
        paragraphs: [
          "We aim to review support and legal requests within a reasonable period. Some requests may take longer where identity verification, data review, provider coordination, or legal assessment is required.",
          "If additional information is needed, we may contact the requester before completing the request."
        ],
        note: {
          title: "Before Launch",
          copy: "Replace the example support addresses with your final production contact details if they change."
        }
      }
    ],
    support: {
      title: "Related documents",
      copy: "Users commonly review the privacy and deletion pages together with this support page.",
      primaryLabel: "Read Privacy Policy",
      primaryHref: "/privacy-policy.html",
      secondaryLabel: "Read Data Deletion Policy",
      secondaryHref: "/data-deletion.html"
    },
    sidebarNote:
      "This page is intended to be the direct support and compliance contact route referenced by the mobile application and App Store submission."
  }
};
