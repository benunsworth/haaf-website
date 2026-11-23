# HAAF Website — Technical Maintenance & Cutover Runbook

This document is for the Web Administrator and future technical volunteers managing the infrastructure, DNS cutover, and deployment pipeline for **haaf.uk**.

---

## 1. Architecture Overview

* **Repository:** Hosted on GitHub (`haaf-website`).
* **Hosting & CDN:** Netlify Starter Plan (£0/month).
* **Framework:** Astro (static output mode, compiled automatically by Netlify in the cloud).
* **CMS:** Sveltia CMS (runs in-browser at `/admin/`, writes commits via Netlify Identity / Git Gateway).
* **Forms:** Netlify Forms (forwarding directly to the charity Gmail with honeypot spam protection).
* **SSL:** Automated Let's Encrypt certificates managed by Netlify.

---

## 2. Setting Up Netlify for the First Time (One-Time Setup)

1. **Create Free Netlify Account:** Sign up at [netlify.com](https://www.netlify.com/) using the charity Gmail or GitHub account.
2. **Import from Git:**
   * Click **"Add new site"** -> **"Import an existing project"**.
   * Select **GitHub** and authorize access to the `haaf-website` repository.
   * Netlify will automatically detect Astro:
     * Build command: `npm run build`
     * Publish directory: `dist`
   * Click **Deploy haaf-website**.
3. **Enable Netlify Identity (for Volunteer Admin Login):**
   * In your Netlify dashboard, go to **Site configuration** -> **Identity**.
   * Click **Enable Identity**.
   * Under **Registration preferences**, select **Invite only** (prevents random visitors from signing up).
   * Under **External providers**, you can optionally enable Google / GitHub.
   * Under **Services** -> **Git Gateway**, click **Enable Git Gateway** (allows Sveltia CMS to commit changes to the repo).
4. **Invite Volunteer Editors:**
   * Go to the **Identity** tab in Netlify.
   * Click **Invite users** and enter the email addresses of trustees or volunteers.
   * They will receive an email invitation to set their password.
5. **Configure Form Notifications to Gmail:**
   * Go to **Site configuration** -> **Forms** -> **Form notifications**.
   * Add a notification: **Email notification** -> Send to `info@haaf.uk` (or the charity Gmail).
   * Select "New form submission".

---

## 3. DNS Cutover Runbook (Switching Away from WPEngine)

When the Board and volunteers have reviewed the preview site and are ready to launch:

1. **Add Custom Domain in Netlify:**
   * Go to **Domain management** -> **Add a custom domain**.
   * Enter: `haaf.uk` and confirm `www.haaf.uk`.
2. **Update DNS Records at your Domain Registrar (e.g. 123 Reg, GoDaddy, Cloudflare):**
   * **Apex Domain (`haaf.uk`):**
     * Type: `A`
     * Name: `@` (or leave blank)
     * Value: `75.2.60.5` (Netlify Load Balancer IP)
   * **Subdomain (`www.haaf.uk`):**
     * Type: `CNAME`
     * Name: `www`
     * Value: `your-site-name.netlify.app`
   * *(Note: Keep any existing MX or TXT/SPF records for email unchanged!)*
3. **Verify SSL:**
   * Netlify will automatically request and issue a Let's Encrypt certificate within 10–30 minutes of DNS propagation.
4. **Decommission WPEngine:**
   * After 48 hours of successful traffic routing to Netlify, cancel the WPEngine WordPress hosting account to eliminate the monthly fee.

---

## 4. Local Preview (Without Node.js)

To preview the website locally on any computer:
1. Open terminal in the project directory.
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in any web browser.
