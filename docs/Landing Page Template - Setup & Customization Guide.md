**Landing Page Template \- Setup & Customization Guide** �� **Table of Contents**   
1\. Quick Setup Checklist 

2\. Customization Variables 

3\. How to Make Changes Efficiently 

4\. Standard Operating Procedure 

5\. Advanced Customizations 

6\. Troubleshooting 

⚡ **Quick Setup Checklist** 

**Before You Start** 

Have your business logo ready (URL or file) 

Know your brand colors (hex codes) 

Have your webhook URL for form submissions 

Prepare your content (headlines, descriptions, etc.) 

Decide on your pricing structure 

**15-Minute Setup** 

1\. **Replace all {{VARIABLES}} with your content** 

2\. **Update colors in CSS :root section** 

3\. **Add your webhook URL** 

4\. **Test form submissions** 

5\. **Upload and test on your domain** 

�� **Customization Variables** 

 **Core Branding** 

{{BUSINESS\_NAME}} \- Your business name 

{{LOGO\_URL}} \- Direct link to your logo image 

{{PAGE\_TITLE}} \- Browser tab title 

{{META\_DESCRIPTION}} \- SEO description  
�� **Color Scheme** 

{{PRIMARY\_COLOR}} \- Main background (\#11111a) 

{{SECONDARY\_COLOR}} \- Section backgrounds (\#1a1a2e) {{ACCENT\_COLOR}} \- Accent/CTA color (\#00d4ff) 

{{PURPLE\_COLOR}} \- Secondary accent (\#6366f1) 

{{SUCCESS\_COLOR}} \- Success messages (\#10b981) 

{{WARNING\_COLOR}} \- Warning messages (\#f59e0b) {{DANGER\_COLOR}} \- Error messages (\#ef4444) 

{{TEXT\_COLOR}} \- Main text (\#ffffff) 

{{TEXT\_DIM\_COLOR}} \- Secondary text (\#a1a1aa) 

{{BORDER\_COLOR}} \- Border color (rgba(161, 161, 170, 0.2)) {{GRADIENT\_COLOR\_1}} \- Gradient start (rgba(0, 212, 255, 0.1)) {{GRADIENT\_COLOR\_2}} \- Gradient end (rgba(99, 102, 241, 0.1)) 

�� **Navigation** 

{{NAV\_LINK\_1\_TEXT}} \- First nav link text 

{{NAV\_LINK\_1\_ANCHOR}} \- First nav link destination {{NAV\_LINK\_2\_TEXT}} \- Second nav link text 

{{NAV\_LINK\_2\_ANCHOR}} \- Second nav link destination {{NAV\_LINK\_3\_TEXT}} \- Third nav link text 

{{NAV\_LINK\_3\_ANCHOR}} \- Third nav link destination {{NAV\_CTA\_TEXT}} \- Main nav CTA button text 

{{NAV\_CTA\_ANCHOR}} \- Main nav CTA destination

 **Hero Section**   
{{HERO\_BADGE\_ICON}} \- Badge emoji/icon {{HERO\_BADGE\_TEXT}} \- Badge text 

{{HERO\_HEADLINE}} \- Main headline 

{{HERO\_SUBTITLE}} \- Subtitle description {{AVATAR\_1}} \- First customer avatar initial {{AVATAR\_2}} \- Second customer avatar initial {{AVATAR\_3}} \- Third customer avatar initial {{SOCIAL\_PROOF\_TEXT\_1}} \- Social proof text {{RATING\_STARS}} \- Star rating display 

{{RATING\_TEXT}} \- Rating description 

{{CTA\_1\_TEXT}} \- Primary CTA button text {{CTA\_1\_ANCHOR}} \- Primary CTA destination {{CTA\_2\_TEXT}} \- Secondary CTA button text {{CTA\_2\_ANCHOR}} \- Secondary CTA destination {{STAT\_1\_NUMBER}} \- First statistic number {{STAT\_1\_LABEL}} \- First statistic label 

{{STAT\_1\_CHANGE}} \- First statistic change {{STAT\_2\_NUMBER}} \- Second statistic number {{STAT\_2\_LABEL}} \- Second statistic label {{STAT\_2\_CHANGE}} \- Second statistic change {{STAT\_3\_NUMBER}} \- Third statistic number {{STAT\_3\_LABEL}} \- Third statistic label 

{{STAT\_3\_CHANGE}} \- Third statistic change�� **Form Section**   
{{FORM\_SECTION\_ID}} \- Section ID for linking 

{{FORM\_TITLE}} \- Form main title 

{{FORM\_SUBTITLE}} \- Form description 

{{EMAIL\_LABEL}} \- Email field label 

{{EMAIL\_PLACEHOLDER}} \- Email field placeholder 

{{BUSINESS\_FIELD\_LABEL}} \- Business name field label {{BUSINESS\_FIELD\_PLACEHOLDER}} \- Business name placeholder {{WEBSITE\_FIELD\_LABEL}} \- Website field label 

{{WEBSITE\_PLACEHOLDER}} \- Website placeholder 

{{WEBSITE\_HELP\_TEXT}} \- Website help text 

{{REVENUE\_FIELD\_LABEL}} \- Revenue field label 

{{REVENUE\_DEFAULT\_OPTION}} \- Revenue dropdown default {{REVENUE\_OPTION\_1\_VALUE}} \- Revenue option 1 value {{REVENUE\_OPTION\_1\_TEXT}} \- Revenue option 1 text ... (continue for all 5 revenue options) 

{{TIME\_FIELD\_LABEL}} \- Best time field label 

{{TIME\_DEFAULT\_OPTION}} \- Time dropdown default {{TIME\_OPTION\_1\_VALUE}} \- Time option 1 value 

{{TIME\_OPTION\_1\_TEXT}} \- Time option 1 text 

... (continue for all 4 time options) 

{{CHALLENGE\_FIELD\_LABEL}} \- Challenge field label 

{{CHALLENGE\_PLACEHOLDER}} \- Challenge placeholder {{FORM\_SUBMIT\_TEXT}} \- Submit button text 

{{FORM\_FOOTER\_TEXT}} \- Privacy/footer text

�� **Pricing Section**   
{{PRICING\_SECTION\_ID}} \- Section ID for linking 

{{PRICING\_TITLE}} \- Pricing section title 

{{PRICING\_SUBTITLE}} \- Pricing section subtitle 

{{PRICING\_TOGGLE\_MONTHLY}} \- Monthly toggle text {{PRICING\_TOGGLE\_ANNUAL}} \- Annual toggle text 

{{FEATURED\_BADGE\_TEXT}} \- Featured plan badge 

For each plan (1, 2, 3): 

{{PLAN\_X\_NAME}} \- Plan name 

{{PLAN\_X\_DESCRIPTION}} \- Plan description 

{{PLAN\_X\_MONTHLY\_PRICE}} \- Monthly price (numbers only) {{PLAN\_X\_ANNUAL\_PRICE}} \- Annual price (numbers only) {{PLAN\_X\_FEATURE\_1}} \- Feature 1 text 

... (up to 8 features per plan) 

{{PLAN\_X\_MISSING\_1}} \- Missing feature text 

... (up to 3 missing features) 

{{PLAN\_X\_CTA\_TEXT}} \- CTA button text 

{{PLAN\_X\_ID}} \- Plan identifier for tracking 

{{PLAN\_3\_CTA\_LINK}} \- External link for plan 3 

�� **Technical Settings** 

{{WEBHOOK\_URL}} \- Form submission webhook 

{{FORM\_SOURCE}} \- Form source identifier 

{{SUCCESS\_MESSAGE}} \- Success alert message 

{{ERROR\_MESSAGE}} \- Error alert message 

{{FORM\_SUCCESS\_MESSAGE}} \- Form success message {{FORM\_ERROR\_MESSAGE}} \- Form error message

⚡ **How to Make Changes Efficiently** 

**Method 1: Search & Replace** 

1\. **Use your code editor's "Find & Replace All" feature** 2\. **Search for {{VARIABLE\_NAME}}** 

3\. **Replace with your actual content** 

4\. **Repeat for each variable** 

**Method 2: Prompt-Based Changes** 

When asking me for changes, use this format:   
"Please update the template with these changes: 

\- HERO\_HEADLINE: "Your New Headline Here" 

\- ACCENT\_COLOR: "\#ff6b35" 

\- PLAN\_1\_NAME: "Starter Package" 

\- Add a fourth pricing plan with..."

**Method 3: Section-Based Updates** 

Reference specific sections: 

**"Update the hero section with..."** 

**"Change the form fields to..."** 

**"Modify pricing plan 2 to..."** 

**"Add a new section after pricing for..."** 

�� **Standard Operating Procedure** 

**Phase 1: Content Preparation (15 mins)** 

1\. **Gather all text content** 

Headlines, descriptions, feature lists 

Customer testimonials and statistics 

Button text and calls-to-action 

2\. **Prepare visual assets** 

Logo (preferably SVG or high-res PNG) 

Brand colors (get hex codes) 

Any additional images needed 

3\. **Technical setup** 

Set up webhook endpoint for form submissions Prepare domain/hosting for deployment 

**Phase 2: Template Customization (20 mins)** 

1\. **Basic branding** 

Replace business name and logo 

Update color scheme in CSS :root 

Set page title and meta description   
2\. **Content replacement** 

Update hero section content 

Customize form fields and labels 

Set pricing plans and features 

3\. **Technical configuration** 

Add webhook URL 

Update success/error messages 

Test form validation 

**Phase 3: Testing & Deployment (10 mins)** 

1\. **Local testing** 

Test all forms 

Check responsive design 

Verify all links work 

2\. **Cross-browser testing** 

Chrome, Firefox, Safari 

Mobile devices (iOS/Android) 

3\. **Go live** 

Upload to hosting 

Test live forms 

Monitor for issues 

**Phase 4: Optimization (Ongoing)** 

1\. **Analytics setup** 

Add Google Analytics 

Set up conversion tracking 

Monitor form submissions 

2\. **A/B testing** 

Test different headlines 

Try different pricing presentations 

Optimize form fields  
�� **Advanced Customizations** 

**Adding New Sections** 

To add a new section, follow this pattern: 

html 

\<section id\="new-section" class\="your-section-class"\> 

\<div class\="container"\> 

*\<\!-- Your content here \--\>* 

\</div\> 

\</section\> 

**Custom CSS Classes** 

Add new styles in the \<style\> section: 

css 

.your-custom-class { 

*/\* Your styles \*/* 

} 

**JavaScript Functionality** 

Add new functions before the closing \</script\> tag: 

javascript 

function yourCustomFunction() { 

*// Your code* 

} 

**Integration Examples** 

1\. **Google Analytics** 

html 

*\<\!-- Add before closing \</head\> \--\>* 

\<script async src\="https://www.googletagmanager.com/gtag/js?id=GA\_MEASUREMENT\_ID"\>\</script\> 

2\. **Live Chat Widget** 

html  
*\<\!-- Add before closing \</body\> \--\>* 

\<script\> 

*// Your chat widget code* 

\</script\>

3\. **Email Marketing Integration** 

Update the webhook to connect to your email platform Add hidden fields for segmentation 

�� **Troubleshooting** 

**Common Issues & Solutions** 

**Forms not submitting:** 

Check webhook URL is correct 

Verify webhook accepts POST requests 

Check browser console for JavaScript errors 

**Styling issues:** 

Clear browser cache 

Check CSS syntax 

Verify color hex codes are valid 

**Mobile display problems:** 

Test on actual devices 

Use browser dev tools mobile view 

Check viewport meta tag 

**Performance issues:** 

Optimize image sizes 

Minify CSS/JavaScript 

Use CDN for assets 

**Browser Compatibility** 

**Supported:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+   
**Mobile:** iOS Safari 12+, Chrome Mobile 60+ **Quick Fixes** 

css 

*/\* Fix mobile form zoom \*/* 

input, select, textarea { 

font-size: 16px \!important; 

} 

*/\* Fix button hover on mobile \*/* 

@media (hover: none) { 

.btn:hover { 

transform: none; 

} 

}

�� **Getting Help** 

**When to Ask for Changes** 

Need to add/remove form fields 

Want to change the layout structure 

Need additional sections 

Require custom functionality 

**How to Request Changes** 

1\. **Be specific** \- "Change button color to \#ff6b35 " 2\. **Provide context** \- "This is for a plumbing company" 3\. **Include examples** \- "Like this website: \[URL\]" 4\. **Test first** \- "I tried X but Y happened" 

**Change Request Template**   
I need to update the template for \[business type\]. 

Changes needed: 

1\. \[Specific change 1\] 

2\. \[Specific change 2\] 

3\. \[Specific change 3\] 

Current issue: \[Describe any problems\] 

Goal: \[What you want to achieve\] 

Deadline: \[When you need this\]

This template is designed to be your foundation. Start with the basic customizations and gradually add more advanced features as needed\! 